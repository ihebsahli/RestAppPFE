const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Recompences = require('../models/Recompences');



// GET all recompences
router.get('/allrecompences', async (req, res) => {
  try {
    const recompence = await Recompences.find();
    res.json(recompence);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// GET a single recompence by ID
router.get('/getrecompence/:id',  async (req, res) => {
  try {
    const recompence = await Recompences.findById(req.params.id);
    if (!recompence) {
      return res.status(404).json({ msg: 'Recompence not found' });
    }
    res.json(recompence);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// POST a new recompence
router.post('/addrecompence', async (req, res) => {
  try {
    const newRecompence = new Recompences(req.body);
    const recompence = await newRecompence.save();
    res.json(recompence);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

// PUT update a recompence by ID
router.put('/updaterecompence/:id', async (req, res) => {
  try {
    let recompence = await Recompences.findById(req.params.id);
    if (!recompence) {
      return res.status(404).json({ msg: 'Recompence not found' });
    }
    recompence = Object.assign(recompence, req.body);
    recompence = await plat.save();
    res.json(recompence);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// DELETE a recompence by ID
router.delete('/deleterecompences/:id', async (req, res) => {
  try {
    const recompence = await Recompences.findByIdAndDelete(req.params.id);
    if (!recompence) {
      return res.status(404).json
({ msg: 'Recompence not found' });
}
res.json({ msg: 'recompence removed' });
} catch (err) {
console.error(err.message);
res.status(500).send('Server Error');
}
});

module.exports = router;