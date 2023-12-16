const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Tables = require("../models/Tables");

// GET all tables
router.get("/alltables", async (req, res) => {
  try {
    const table = await Tables.find();
    res.json(table);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
//get only available tables
router.get("/availabletables", async (req, res) => {
  try {
    const availableTables = await Tables.find({
      etatDisponibilite: "disponible",
    });
    res.json(availableTables);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Endpoint to update table availability status
router.put("/updateTableStatus/:tableId", async (req, res) => {
  try {
    const { tableId } = req.params;

    // Find the table by ID
    const table = await Tables.findById(tableId);

    if (!table) {
      return res.status(404).json({ msg: "Table not found" });
    }

    // Update the availability status to 'reservée'
    table.etatDisponibilite = "reservée";

    // Save the updated table
    await table.save();

    res.json({ msg: "Table status updated successfully", table });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// GET a single table by ID
router.get("/gettable/:id", async (req, res) => {
  try {
    const table = await Tables.findById(req.params.id);
    if (!table) {
      return res.status(404).json({ msg: "table not found" });
    }
    res.json(table);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// POST a new table
router.post("/addtable", async (req, res) => {
  try {
    const newTable = new Tables(req.body);
    const table = await newTable.save();
    res.json(table);
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

// PUT update a table by ID
router.put("/updatetable/:id", async (req, res) => {
  try {
    let table = await Tables.findById(req.params.id);
    if (!table) {
      return res.status(404).json({ msg: "table not found" });
    }
    table = Object.assign(table, req.body);
    table = await plat.save();
    res.json(table);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// DELETE a plat by ID
router.delete("/deletetable/:id", async (req, res) => {
  try {
    const table = await Tables.findByIdAndDelete(req.params.id);
    if (!table) {
      return res.status(404).json({ msg: "table not found" });
    }
    res.json({ msg: "table removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
