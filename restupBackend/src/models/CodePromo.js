const mongoose = require('mongoose');

const CodePromoSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  date_expiration: {
    type: Date,
    required: true,
  },
  réduction: {
    type: Number,
    required: true,
    min: 0, // Assure que la réduction est un nombre positif ou nul
    max: 100, // Assure que la réduction ne dépasse pas 100%
  },

});

module.exports = CodePromo = mongoose.model('code_promo', CodePromoSchema);
