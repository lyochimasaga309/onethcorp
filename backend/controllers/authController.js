const bcrypt = require('bcryptjs');
const User = require('../models/User');


exports.signup = async (req, res) => {
  try {
    console.log("Received request body:", req.body);
    const { fullName, email, password, confirmPassword } = req.body;

    if (!password || !confirmPassword || password !== confirmPassword) {
      return res.status(400).json({ message: 'Password mismatch' });
    }

    const existing = await User.findOne({ email });

    if (existing) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    // Hash password here (only after validating no existing user)
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ fullName, email, password: hashedPassword });

    await newUser.save();
    console.log('New user created:', newUser);
    return res.status(201).json({ message: 'User created successfully' });

  } catch (err) {
    console.error('Signup error:', err);
    return res.status(500).json({ message: 'Signup failed', error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;  // raw password from request

    console.log("Login attempt with:", email);

    const user = await User.findOne({ email });
    console.log('User found:', user);

    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Compare raw password with hashed password in DB
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials'});
    }

    return res.status(200).json({ 
       message: 'Login successful',
       user: { 
        id: user._id,
        fullName: user.fullName, 
        email: user.email 
      } 
    });

  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ message: 'Login failed', error: err.message });
  }
};
