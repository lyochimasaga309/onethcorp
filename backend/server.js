require('dotenv').config();

console.log("MONGO_URI from .env.local:", process.env.MONGO_URI);

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const authRoutes = require('./routes/authRoutes');
const houseRoutes = require("./routes/houseRoutes");

const app = express();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));


app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/houses', houseRoutes);

app.get("/", (req, res) => {
  res.send("Backend is working! Ready to accept requests.");
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost: ${PORT}`));

