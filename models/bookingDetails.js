const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  fromAddress: { type: String, required: true },
  toAddress: { type: String, required: true },
  passengers: { type: String, enum:["1","2","3","4","5+"], required: true },
  luggage: { type: String, enum:["1","2","3","4","5+"], required: true },
  journeyDate: { type: Date, required: true },
  journeyTime: { type: String, required: true },
  message: { type: String, required: false },
}, { timestamps: true });

const Booking = mongoose.model('bookingDetails', bookingSchema);

module.exports = Booking;
