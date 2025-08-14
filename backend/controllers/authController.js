const bcrypt = require('bcryptjs');
const User = require('../models/User');


exports.signup = async (req, res) => {
  try {
    console.log("Received request body:", req.body);
    const { fullName, email, password, } = req.body;

    if (!password) {
      return res.status(400).json({ message: 'Password required' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    // Hash password here (only after validating no existing user)
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ fullName, email, password: hashedPassword });

    await newUser.save();
    console.log('✅ User saved successfully!');
    console.log("Saving password:", password);


    await newUser.save();
    console.log('New user created:', newUser);
    return res.status(201).json({ message: 'Signup successfully' });

  } catch (err) {
    console.error('Signup error:', err);
    return res.status(500).json({ message: 'Server error' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;  // raw password from request

    console.log("Login attempt with:", email);

    const user = await User.findOne({ email });
    console.log('User found:', user);

    if (!user) {
      console.log("No user with that email");
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    console.log("Entered password:", password);
    console.log("Stored hash:", user.password);

    // Compare raw password with hashed password in DB
    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Password match:", isMatch);

    if (!isMatch) {
      console.log("Password incorrect");
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
