const mongoose = require('mongoose');
const PanierSchema = new mongoose.Schema({

    users: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'user',
      },

  panier: [
    {
      plats: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'plats',
      },

      quantity: {
        type: Number,
        default: 1
      },
      
    },
  ],

  ingredient: [
    {
      ingredients: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'ingredient',
      },

      quantity: {
        type: Number,
        default: 1
      },
       
    },
  ],

  date: {
    type: Date,
    default: Date.now,
  },
  
});

module.exports = Panier = mongoose.model('panier', PanierSchema);
