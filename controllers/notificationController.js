const admin = require('firebase-admin');


const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
// const serviceAccount = require('../keys/serviceAccountKey.json'); 

// Inisialisasi Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Fungsi untuk mengirim push notification
exports.sendNotification = async (req, res) => {
  const { token, title, body, data } = req.body;

  // Akses deepLinkUrl dan username dari data
  const link = data?.deepLink;
  const name = data?.username;
  const image = data?.imageUrl;

  
  const message = {
    notification: {
      title: title,
      body: body,
    },
    data: {
      deepLinkUrl: link,  // URL deep link
      usernameParam: name,
      imageUrl: image,
    },
   
    token: token,
  };

  try {
    const response = await admin.messaging().send(message);
    res.status(200).send({ message: 'Notification sent successfully', response });
  } catch (error) {
    res.status(500).send({ message: 'Error sending notification', error });
  }
};
