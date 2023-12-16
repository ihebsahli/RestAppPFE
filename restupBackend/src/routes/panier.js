const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Plats = require('../models/Plats');
const { json } = require('body-parser');
const Panier = require('../models/Panier');

router.get('/:iduser', async (req, res) => {
  try {

    const mypanier = await Panier.findOne({ users: req.params.iduser }).populate("panier.plats");

    res.json({ panier: mypanier.panier, ingredient: mypanier.ingredient });
  } catch (err) {

    res.status(500).send('Server Error');
  }
});

router.post('/:id/:iduser/:isIngredient', async (req, res) => {

  try {
   
    if (req.params.isIngredient===true) {

      const newIngredient = {
        ingredients: req.params.id,
        quantity: 1
      };
      const me = await Panier.findOne({ users: req.params.iduser });
      let myaccount
      if (me) {
        myaccount = await me.ingredient.unshift(newIngredient)

      }
      else {
        myaccount = new Panier({
          users: req.params.iduser,
          ingredient: newIngredient,

        });
      }


      const addpanier = await myaccount.save();

      res.json("hola");

    }
    else {


      const newPlat = {
        plats: req.params.id,
        quantity: 1
      };
      const me = await Panier.findOne({ users: req.params.iduser });
      
      if (me) {
        await me.panier.unshift(newPlat)
        await me.save();

      }
      else {
        const myaccount = new Panier({
          users: req.params.iduser,
          panier: newPlat,

        });   
            await myaccount.save();

      }



      res.json("hola");
    }
  } catch (error) {
console.log(error);
    res.status(500).send(error);
  }
})

router.delete('/:id/:iduser/:isIngrediant', async (req, res) => {
  try {
    const me = await Panier.findOne({ users: req.params.iduser }).populate("panier.plats");
    if (req.params.isIngredient) {
      me.ingredient = me.ingredient.filter(
        ({ id }) => id !== req.params.id,
      );
    }
    else {
      me.panier = me.panier.filter(
        ({ id }) => id !== req.params.id,
      );
    }


    await me.save();
    res.json({ panier: me.panier });
  } catch (error) {
    res.status(500).send('Server Error');
  }
})

router.put('/clear', auth, async (req, res) => {
  try {
    const me = await User.findById(req.user.id).select('-password').populate("panier.plats");
    me.panier = []
    await me.save();
    res.json({ panier: me.panier });
  } catch (error) {

    res.status(500).send('Server Error');
  }
})


router.put('/:id/:userId/:quantity/:isIngrediant', async (req, res) => {
  try {
    const me = await Panier.findOne({ users: req.params.userId }).populate("panier.plats");
    if (req.params.isIngrediant === true) {
      me.ingredient.map((x) => {
        if (x.id.toString() == req.params.id)
          x.quantity = req.params.quantity
      }
      );
    }
    else {

      me.panier.map((x) => {
        if (x.id.toString() == req.params.id)
          x.quantity = req.params.quantity
      }
      );

    }

    me.save()
    res.json(me.panier)
  } catch (err) {
    console.log(err);

    res.status(500).send('Server Error');
  }
});

module.exports = router;