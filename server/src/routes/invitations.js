const express = require('express');
const auth = require('../middlewares/auth');
const mail = require('../utils/mail');

const router = new express.Router();
const Reservation = require('../models/Reservation');

const createMailOptions = (data) => {
  const { to, host, movie, date, time, cinema, image, seat } = data;

  const htmlContent = `
                <h1><strong>Invitation For Movie</strong></h1>
                <p>Hi, You have been invited by ${host}</p>
                <p>Movie name: ${movie}</p>
                <p>Date: ${date}</p>
                <p>Time: ${time}</p>
                <p>Cinema name: ${cinema}</p>
                <p>Cinema seat: ${seat}</p>
                <img src="${image}" alt="cinema Image"/>
                <br/>
              `;
  return {
    from: 'aditya.psingh02@gmail.com',
    to,
    subject: 'Atomic Invitation',
    html: htmlContent,
  };
};

router.get('/invitation/:id', async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.id)
      .populate('movieId')
      .populate('cinemaId');

    if (!reservation) return res.status(404).send('Reservation not found');

    const host = reservation.username;
    const movie = reservation.movieId?.title || 'Unknown Movie';
    const date = reservation.date;
    const time = reservation.startAt;
    const cinema = reservation.cinemaId?.name || 'Unknown Cinema';
    const image = reservation.cinemaId?.image || '';
    const seat = JSON.stringify(reservation.seats);

    console.log({ host, movie, date, time, cinema, image, seat });

    res.send(`
  <html>
    <head>
      <title>Movie Invitation</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background: #f9f9f9;
          color: #333;
          padding: 20px;
        }
        .container {
          max-width: 600px;
          margin: auto;
          background: white;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          text-align: center;
        }
        h1 {
          color: #2c3e50;
        }
        p {
          font-size: 16px;
          margin: 10px 0;
        }
        img {
          margin-top: 20px;
          max-width: 100%;
          height: auto;
          border-radius: 10px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1><strong>🎬 Movie Invitation</strong></h1>
        <p><strong>From:</strong> ${host}</p>
        <p><strong>Movie:</strong> ${movie}</p>
        <p><strong>Date:</strong> ${new Date(date).toDateString()}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Cinema:</strong> ${cinema}</p>
        <p><strong>Seat(s):</strong> ${seat}</p>
        <img src="${image}" alt="Cinema Image"/>
      </div>
    </body>
  </html>
`);

  } catch (error) {
    console.error(error);
    res.status(500).send('Error loading invitation page');
  }
});



// Send Invitation Emails
router.post('/invitations', auth.simple, async (req, res) => {
  const invitations = req.body;
  const promises = invitations.map((invitation) => {
    const mailOptions = createMailOptions(invitation);
    return mail
      .sendEMail(mailOptions)
      .then(() => ({
        success: true,
        msg: `The Invitation to ${mailOptions.to} was sent!`,
      }))
      .catch((exception) => ({ success: false, msg: exception }));
  });

  Promise.all(promises).then((result) => res.status(201).json(result));
});
module.exports = router;
