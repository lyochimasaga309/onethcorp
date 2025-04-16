const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const protect = require('../middleware/authMiddleware');


const router = express.Router();

// Dashboard pages
router.get('/dashboard/profile', (req, res) => {
    res.render('dashboard/profile', { title: 'Profile' });
});

router.get('/dashboard/investors', (req, res) => {
    res.render('dashboard/investors', { title: 'Investors' });
});

router.get('/dashboard/customers', (req, res) => {
    res.render('dashboard/customers', { title: 'Customers' });
});

router.get('/dashboard/settings', (req, res) => {
    res.render('dashboard/settings', { title: 'Settings' });
});

// Logout route (add your logout logic here)
router.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/login'); // Redirect to login after logout
    });
});

//Home Route 
router.get('/', (req, res) => {
    const user =  req.session.user || {name: "John Doe", profilePicUrl: "/uploads/john-doe.jpg"};  // Get user data from session if logged in
            res.render('index', { user });
        
});

// Signup Route
router.post('/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: 'User already exists' });

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });

        // Save the user
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });

    } catch (error) {
        console.error("Error Details:", error);  // Detailed logging
        res.status(500).json({ message: 'Server error', error: error.message }); // Send error message back
    }
});

// Login Route
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        //Store user in session
        req.session.user = {
            name: user.username,
            profilePicUrl: user.profilePicUrl || '/uploads/default.jpg',
        };

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });

    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});
// Profile Route: This will be protected by JWT
router.get('/profile', protect, async (req, res) => {
    try {
        const user = await User.findById(req.user.id);  // Access user ID from the JWT
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);  // Return user details
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});


module.exports = router;
