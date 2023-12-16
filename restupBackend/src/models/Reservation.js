const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
  nomComplet: { type: String, required: true },
  numeroTelephone: { type: String, required: true },
  dateReservation: { type: Date, required: true },
  heureReservation: { type: String, required: true },
  nombrePersonnes: { type: Number, required: true },
  numeroTable: { type: Number, required: true },
  status: {
    type: String,
    default: "pending", // Set an initial status if needed
    enum: ["pending", "accepted", "canceled"], // Define possible status values
  },
});

const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation;
