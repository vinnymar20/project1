const express = require('express');
const router = express.Router();

// Import controller
const notificationController = require('../controllers/notificationController');

// Definisikan rute untuk mengirim notifikasi
router.post('/send', notificationController.sendNotification);

module.exports = router;
