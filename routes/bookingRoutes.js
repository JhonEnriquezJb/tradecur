import express from "express"

import {
  obtenerBookings,
  nuevoBooking,
  obtenerBooking,
  editarBooking,
  eliminarBooking,
} from "../controllers/bookingController.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router
.route("/")
.get( checkAuth, obtenerBookings)
.post( checkAuth, nuevoBooking);

router
.route("/:id")
.get(checkAuth, obtenerBooking)
.put(checkAuth, editarBooking) 
.delete(checkAuth, eliminarBooking);

export default router;