const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const sequelize = require('./config/db');
const User = require('./models/User'); // Import User model

const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Sync the database
sequelize.sync({ force: false }) // Set force: true to drop and recreate tables
    .then(() => console.log('Database synchronized.'))
    .catch(err => console.error('Error synchronizing database:', err));

// Routes
app.get('/', (req, res) => {
    res.send('Bus Reservation System Backend');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
require('dotenv').config();
