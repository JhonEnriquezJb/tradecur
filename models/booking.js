import mongoose from "mongoose";

const bookingSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      trim: true,
      required: true,
    },

    userEmail: {
      type: String,
      trim: true,
      required: true,
    },
    tourName: {
      type: String,
      trim: true,
      required: true,
    },
    fullName: {
      type: String,
      trim: true,
      required: true,
    },
    guestSize: {
      type: Number,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    bookAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

const Booking = mongoose.model("Proyecto", bookingSchema);
export default Booking;
