const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Plats = require("../models/Plats");
const upload = require("../middleware/menuStorage");

// GET all plats
router.get("/allplats", async (req, res) => {
  try {
    const plats = await Plats.find();
    res.json(plats);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// GET a single plat by ID
router.get("/getplat/:id", async (req, res) => {
  try {
    const plat = await Plats.findById(req.params.id);
    if (!plat) {
      return res.status(404).json({ msg: "Plat not found" });
    }
    res.json(plat);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// POST a new plat

router.post("/addplat", upload.single("file"), async (req, res) => {
  try {
    const {
      nomPlat,
      description,
      categorie,
      prix,
      ingredients,
      disponibilite,
      tempsPreparation,
    } = req.body;
    let plat = new Plats({
      nomPlat,
      description,
      categorie,
      image: req.file.filename,
      prix,
      ingredients,
      disponibilite,
      tempsPreparation,
    });
    const myPlat = await plat.save();
    res.json(myPlat);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

router.post("/addplate", async (req, res) => {
  try {
    const newPlat = new Plats(req.body);
    const plat = await newPlat.save();
    res.json(plat);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

// PUT update a plat by ID
router.put("/updateplat/:id", async (req, res) => {
  try {
    let plat = await Plats.findById(req.params.id);
    if (!plat) {
      return res.status(404).json({ msg: "Plat not found" });
    }
    plat = Object.assign(plat, req.body);
    plat = await plat.save();
    res.json(plat);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// DELETE a plat by ID
router.delete("/deleteplat/:id", async (req, res) => {
  try {
    const plat = await Plats.findByIdAndDelete(req.params.id);

    if (!plat) {
      return res.status(404).json({ msg: "Plat not found" });
    }

    res.json({ msg: "Plat removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

module.exports = router;
