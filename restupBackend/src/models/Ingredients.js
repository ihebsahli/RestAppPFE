const mongoose = require('mongoose');


const IngredientSchema = new mongoose.Schema({



    nomIngredient: {
        type: String,
        required: true,
        maxlength: 50
    },

    image: {
        type: String,
        required: true

    },
    prix: {
        type: Number,
        required: true,
        min: 0
    }
});

module.exports = Ingredient = mongoose.model('ingredient', IngredientSchema);
