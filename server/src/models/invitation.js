const mongoose = require('mongoose');

const invitationSchema = new mongoose.Schema({
  to: String,
  host: String,
  movie: String,
  date: String,
  time: String,
  cinema: String,
  image: String,
  seat: String,
});

module.exports = mongoose.model('Invitation', invitationSchema);
