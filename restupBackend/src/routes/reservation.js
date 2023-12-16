const express = require("express");
const bodyParser = require("body-parser");
const Reservation = require("../models/Reservation");
const router = express.Router();
const auth = require("../middleware/auth");

// route pour récupérer les réservations d'un client
router.get("/myClientreservations", auth, async (req, res) => {
  try {
    const reservations = await Reservation.find({
      user: req.user.id,
    }).populate("user", ["email", "firstname", "lastname", "phoneNumber"]);
    res.json(reservations);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.put("/accept/:id", auth, async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.id);

    if (!reservation) {
      return res.status(404).json({ msg: "Réservation non trouvée" });
    }

    // Check if the reservation is already accepted or canceled
    if (
      reservation.status === "accepted" ||
      reservation.status === "canceled"
    ) {
      return res
        .status(400)
        .json({ msg: "La réservation a déjà été acceptée ou annulée" });
    }

    // Update the reservation status to "accepted"
    reservation.status = "accepted";
    await reservation.save();

    res.json({ msg: "Réservation acceptée avec succès" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

// Create a new reservation
router.post("/create", auth, async (req, res) => {
  try {
    // Get reservation data from the request body
    const {
      nomComplet,
      numeroTelephone,
      dateReservation,
      heureReservation,
      nombrePersonnes,
      numeroTable,
    } = req.body;

    // Create a new reservation document
    const reservation = new Reservation({
      nomComplet,
      numeroTelephone,
      dateReservation,
      heureReservation,
      nombrePersonnes,
      numeroTable,
    });

    // Save the reservation to the database
    await reservation.save();

    res
      .status(200)
      .json({ message: "Reservation request created successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Route pour récupérer toutes les réservations
router.get("/list", auth, async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.json(reservations);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Route pour récupérer une réservation par son ID
router.get("/reservations/:id", async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.id);
    if (reservation) {
      res.json(reservation);
    } else {
      res
        .status(404)
        .send(`Aucune réservation trouvée pour l'ID ${req.params.id}`);
    }
  } catch (err) {
    res.status(400).send(err);
  }
});

// Route pour supprimer une réservation par son ID
router.delete("/deletereservation/:id", auth, async (req, res) => {
  try {
    const reservation = await Reservation.findByIdAndDelete(req.params.id);
    if (!reservation) {
      return res.status(404).json({ msg: "Réservation non trouvée" });
    }
    res.json({ msg: "Réservation supprimée" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

// Route to reject a reservation by ID
router.put("/reject/:id", auth, async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.id);

    if (!reservation) {
      return res.status(404).json({ msg: "Réservation non trouvée" });
    }

    // Check if the reservation is already accepted or canceled
    if (
      reservation.status === "accepted" ||
      reservation.status === "canceled"
    ) {
      return res
        .status(400)
        .json({ msg: "La réservation a déjà été acceptée ou annulée" });
    }

    // Update the reservation status to "canceled"
    reservation.status = "canceled";
    await reservation.save();

    res.json({ msg: "Réservation annulée avec succès" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

// Route to get reservations with status "accepted"
router.get("/accepted", async (req, res) => {
  try {
    const acceptedReservations = await Reservation.find({ status: "accepted" });
    res.json(acceptedReservations);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

// Route to get reservations with status "rejected"
router.get("/rejected", async (req, res) => {
  try {
    const rejectedReservations = await Reservation.find({ status: "canceled" });
    res.json(rejectedReservations);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

// route pour récupérer les réservations d'un client
router.get("/myClientreservations", auth, async (req, res) => {
  try {
    const reservations = await Reservation.find({
      user: req.user.id,
    }).populate("user", ["email", "firstname", "lastname", "phoneNumber"]);
    res.json(reservations);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
