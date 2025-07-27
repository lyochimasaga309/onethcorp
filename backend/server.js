require('dotenv').config({ path: __dirname + '/.env' });

const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const houseRoutes = require("./routes/houseRoutes");

const app = express();
connectDB(); // ← one clean connection here

app.use("/api/houses", houseRoutes);

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use("/api/houses", houseRoutes);

app.get("/", (req, res) => {
  res.send("Backend is working! Ready to accept requests.");
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost: ${5000}`));

