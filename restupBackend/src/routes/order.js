const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Plats = require('../models/Plats');
const { json } = require('body-parser');
const Panier = require('../models/Panier');
const Order = require('../models/Order');
router.post("/:iduser", async(req, res) => {
       
    try {    
        let me = await Panier.findOne({ users: req.params.userId });      
      const newOrder = new Order ({
          user:req.params.iduser,
          Total: req.body.total,
          panier: req.body.panier,   
          ingredient: req.body.ingredient,     
          promo:req.body.PromoExiste,
          
      });
      await newOrder.save();
      if(me){
         me=await[]
        await me.save();
      }
      
    res.json("done");
  } catch (error) {
      console.log(error);
  res.status(500).send('Server Error');
  }
  })
module.exports = router;