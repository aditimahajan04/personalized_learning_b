const express = require('express');
const connectDB = require('./config/db');
const familyRoutes = require('./routes/familyRoutes'); // Import routes
require('dotenv').config();

const app = express(); // Initialize app

// Middleware
app.use(express.json()); // Middleware for JSON parsing

// Database connection
connectDB();

// Register routes
app.use('/api/family', familyRoutes);

// Default route for testing
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
