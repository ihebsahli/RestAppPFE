const mongoose = require('mongoose');

const RecompencesSchema = new mongoose.Schema({
  nomRec: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  date_expiration: {
    type: Date,
    required: true
  },
  nbrPoints: {
    type: Number,
    required: true
  },
  statusRec: {
    type: String,
    enum: ['disponible', 'utilisé'],
    default: 'disponible'
  },
  typeRec: {
    type: String,
    enum: ['réduction sur la facture', 'entrée gratuit', 'dessert gratuit'],
    required: true
  }
});

module.exports = Recompences = mongoose.model('recompences', RecompencesSchema);

