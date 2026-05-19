const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Middleware - lets server understand JSON data
app.use(express.json());

// Routes - connects users routes
app.use('/api/users', require('./routes/users'));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected!'))
  .catch((err) => console.log('Connection Failed:', err));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});