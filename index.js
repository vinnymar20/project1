require('dotenv').config();



const express = require('express');

// Initialize Express app
const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Routes
app.use('/users', require('./routes/userRoute'));  // User routes
app.use('/email', require('./routes/emailRoute')); // Email routes
app.use('/notification', require('./routes/notificationRoute')); // Notification routes

// Timer 
require('./jobs/notificationJob'); // Memulai tugas pengiriman notifikasi setiap 10 detik

// Start the server
app.listen(3000, () => console.log('Server started on port 3000'));
