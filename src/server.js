const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const sequelize = require('./config/database');
const User = require('./models/User'); // Import User model
const Town = require('./models/Town'); // Import Town model
const Bus = require('./models/Bus'); // Import Bus model
const Booking = require('./models/Booking'); // Import Booking model

const userRoutes = require('./routes/userRoutes'); // Import User routes

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json()); // Combine with bodyParser for flexibility

// Sync the database
sequelize
    .sync({ force: false }) // Set force: true if you want to reset tables
    .then(() => {
        console.log('Database synchronized successfully!');
    })
    .catch((err) => {
        console.error('Error synchronizing database:', err);
    });

// Routes
app.use('/api/users', userRoutes); // User-related routes

app.get('/', (req, res) => {
    res.send('Welcome to the Bus Reservation System Backend!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
