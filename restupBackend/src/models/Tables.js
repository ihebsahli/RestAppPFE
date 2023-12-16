const mongoose = require('mongoose');

const TablesSchema = new mongoose.Schema({
  capacite: {
    type: Number,
    enum: [2 , 4 , 8],
    default: 2,
    required: true
  },
  emplacement: {
    type: String,
    required: true
  },
  etatDisponibilite: {
    type: String,
    enum: ['disponible', 'reservée'],
    default: 'disponible'
  }
});

module.exports = Tables = mongoose.model('tables', TablesSchema);
