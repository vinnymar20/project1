// notificationJob.js
const axios = require('axios');
const cron = require('node-cron');

let notifNumber = 1;
 
function sendNotification() {
  const url = 'https://project1-pearl-gamma.vercel.app/notification/send/';
  const data = {
    token: "eBQ1KgC2Sbeh0lljr3QQQz:APA91bER-UylRiVwI_FIspGGQpPe4VRmjT7D7afeVzUcLZg962PJ8-AmZZixaOmoAjU512XI9N3oHMH7rRvxzQsy2h_0tgV42MZpAdK-KsMtJ9I8Dw4vp40",
    title: "Hello there!",
    body: "Notification at 13 PM",
    data: {
      deepLink: "tess://tess.com/secondPage",
      username: "Vinnnyyyyy",
      imageUrl: ""
    }
  };

  axios.post(url, data)
    .then(response => {
      console.log('Notification sent:', response.data);
    })
    .catch(error => {
      console.error('Error sending notification:', error);
    });
}

function sendNotification2() {
  const url = 'https://project1-pearl-gamma.vercel.app/notification/send/';
  const data = {
    token: "eBQ1KgC2Sbeh0lljr3QQQz:APA91bER-UylRiVwI_FIspGGQpPe4VRmjT7D7afeVzUcLZg962PJ8-AmZZixaOmoAjU512XI9N3oHMH7rRvxzQsy2h_0tgV42MZpAdK-KsMtJ9I8Dw4vp40",
    title: "Hello there!",
    body: "Notification every hour",
    data: {
      deepLink: "tess://tess.com/secondPage",
      username: "Vinnnyyyyy",
      imageUrl: ""
    }
  };

  axios.post(url, data)
    .then(response => {
      console.log('Notification sent:', response.data);
    })
    .catch(error => {
      console.error('Error sending notification:', error);
    });
}

// Menjalankan tugas ini setiap 10 detik
// setInterval(sendNotification, 5000); // 10000 ms = 10 detik

// // Menjadwalkan tugas untuk berjalan setiap hari pada jam 6 pagi
// cron.schedule('0 14 * * *', () => {
//   sendNotification();
//   console.log('Scheduled notification sent at 13 PM');
// });

// // Timer setiap 1 jam
// const job = cron.schedule('0 * * * *', () => {
//   sendNotification2();

//   notifNumber = notifNumber + 1;

//   // Contoh kondisi untuk menghentikan timer
//   const shouldStop = checkSomeCondition(); 
//   if (shouldStop) {
//     console.log('Timer stopped due to condition.');
//     job.stop(); // Menghentikan cron job
//   }

//   console.log('Scheduled notification sent every hour');
// });



// Contoh fungsi kondisi
function checkSomeCondition() {
  return notifNumber === 5; // Hentikan timer jika waktu jam 18:00
}