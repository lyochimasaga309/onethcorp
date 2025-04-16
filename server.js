const express = require('express');
const path = require("path");
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const connectDB = require('./config/db');
const User = require('./models/user');
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const paypal = require('@paypal/checkout-server-sdk');

dotenv.config();
connectDB();

const app = express();

const clientId = process.env.AWTQIiUBW4yaHXIQUvcrFCT_hJSJJzq4_fM2TRRt7Dl_xTIroSL3NEqz_H0THYYBiTQdoVfSr9C0VYnO;
const clientSecret = process.env.EO9d4ED9X6z4oYHjp0oeP04ObG7tmNq2ZlxKtRG9YW6O3kZJl0al6_3w73PvyW8OhIODVnqx0_TAwbY;

const environment = new paypal.core.LiveEnvironment(clientId, clientSecret);
const client = new paypal.core.PayPalHttpClient(environment);
function showService(serviced) {
  const sections = document.querySelectorAll('.service-section');
  sections.forEach(section => {
    sections.classList.remove('active');
});

document.getElementById(serviceId).classList.add('acive');
}
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("MongoDB connection error:",err));

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/forgot-password", (req, res) => {
  res.render("forgot-password");
});

app.get('/signup', (req, res) => {
  res.render('signup');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/services', (req, res) => {
  res.render('services');
});

app.get('/success', async (req, res) => {
  const { token } = req.query;

  const request = new paypal.orders.OrdersCaptureRequest(token);
  try {
    const capture = await client.execute(request);
    res.send('Payment successful!');
  } catch (err) {
    console.error('Error capturing PayPal payment:', err);
    res.send('Payment failed.');
  }
});

app.get('/cancel', (req, res) => {
  res.send('payment was canceled.');
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "Invalid Credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid Credentials" });

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {expiresIn: "1h" });
    res.json({ token });
  } catch (err) {
       console.error(err);
       res.status(500).json({ msg: "Server error" });
  }
  res.send("login functionality will be added here");
});

app.post("/signup", 
  [
     body("email").isEmail().withMessage("Enter a valid email"),
     body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
  ],
  async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
         return res.status(400).json({ errors: errors.array() });
      }

      const { firstname, surname, email, password } = req.body;
      try {
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ msg: "User arleady exists" });

        user = new User({ firstname, surname, email, password });
        await user.save();
        res.status(201).json({ msg: "User registered successfully" });
      } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Server error" });
      }
});

app.post('/create-paypal-payment', async (req, res) => {
  const request = new paypal.orders.OrdersCreateRequest();
  request.headers['prefer'] = 'return=representation';
  request.requestBody({
    intent: 'CAPTURE',
    purchase_units: [{
      amount: {
        currency_code: 'USD',
        value: req.body.amount
      }
    }],
    application_context: {
      return_url: `${YOUR_DOMAIN}/success`,
      cancel_url: `${YOUR_DOMAIN}/cancel`
    }
  });

  try {
    const order = await client.execute(request);
    res.json({ approval_url: order.result.links[1].href });
  } catch (err) {
    console.error('Error creating Paypal payment:', err);
    res.status(500).send('Error creating PayPal payment');
  }
});

app.post('/submit-land', (req, res) => {
  const { landType, location, budget, landNotes } = req.body;

  console.log('land request received:', landType, location, budget, landNotes);

  res.send("Your land request has been received. We will get back to you soon!");
});

app.post('/submit-renting', (req, res) => {
  const rentData = req.body;
  res.send('House renting request submitted');
});

app.post('/submit-booking', (req, res) => {
  const bookingData = req.body;
  res.send('Hotel booking request received!');
});

app.post('/submit-delivery', (req, res) => {
  const deliveryData = req.body;
  res.send('Delivery request placed!');
});

// Simple Test Route
app.get('/', (req, res) => {
    res.json({message: 'Server is running...'});
});


// Use Routes
const propertyRoutes = require('./routes/propertyRoutes');
const userRoutes = require('./routes/userRoutes');
app.use('/api/properties', propertyRoutes);
app.use('/api/users', userRoutes);


// Start Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));