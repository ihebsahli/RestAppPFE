const mongoose = require('mongoose');

const categories = ['Entrée', 'Plat principal', 'Dessert', 'Boisson']; // liste des catégories possibles

const PlatsSchema = new mongoose.Schema({

  // Users: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'user',
  // },

  nomPlat: {
    type: String,
    required: true,
    maxlength: 50
  },
  description: {
    type: String,
    required: true,
   
  },
  categorie: {
    type: String,
    enum: categories, // utilisation du type enum pour restreindre les valeurs possibles à la liste de catégories prédéfinies
    required: true,
  },
  image: {
    type: String,
    required:true

  },
  prix: {
    type: Number,
    required: true,
    min: 0
  },
  ingredients: {
    type: [String],
    required: true,
  },
  disponibilite: {
    type: Boolean,
    required: true,
  },
  tempsPreparation: {
    type: Number,
    required: true,
    min: [5 , "minimun 5 minutes"],
    max: 120
  },
});

module.exports = Plats = mongoose.model('plats', PlatsSchema);
