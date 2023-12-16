const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Ingredients = require('../models/Ingredients');
const upload = require('../middleware/ingredientStorage')

// GET all ingredients
router.get('/allingredient', async (req, res) => {
  try {
    const ingredient = await Ingredients.find();
    res.json(ingredient);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// GET a single ingredient by ID
router.get('/getingredient/:id',  async (req, res) => {
  try {
    const ingredient = await Ingredients.findById(req.params.id);
    if (!ingredient) {
      return res.status(404).json({ msg: 'Ingredient not found' });
    }
    res.json(ingredient);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// POST a new ingredient
router.post('/addingredient', upload.single("file"),async (req, res) => {
  try {
    const { nomIngredient , prix } = req.body;
    let ingredient = new Ingredients({
      nomIngredient ,
      image: req.file.filename,
      prix
    })
    const myingredient = await ingredient.save();
    res.json(myingredient);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

// PUT update a ingredient by ID
router.put('/updateingredient/:id', async (req, res) => {
  try {
    let ingredient = await Ingredients.findById(req.params.id);
    if (!ingredient) {
      return res.status(404).json({ msg: 'Ingredient not found' });
    }
    ingredient = Object.assign(ingredient, req.body);
    ingredient = await plat.save();
    res.json(ingredient);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// DELETE a plat by ID
router.delete('/deleteingredient/:id', async (req, res) => {
  try {
    const ingredient = await Ingredients.findByIdAndDelete(req.params.id);
    if (!ingredient) {
      return res.status(404).json
({ msg: 'Ingredient not found' });
}
res.json({ msg: 'ingredient removed' });
} catch (err) {
console.error(err.message);
res.status(500).send('Server Error');
}
});

module.exports = router;