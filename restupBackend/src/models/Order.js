const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    Total: Number,
    panier: [{
        plats: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'plats',
        },

        quantity: {
            type: Number,
            default: 1,
        },
    }],

    ingredient: [
        {
            ingredients: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'ingredient',
            },

            quantity: {
                type: Number,
                default: 1
            },

        },
    ],

    promo: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = Order = mongoose.model('order', OrderSchema);
