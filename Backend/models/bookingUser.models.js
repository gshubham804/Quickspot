import mongoose from "mongoose";

const bookingUserSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  date: {
    type: String,
  },
  from: {
    type: String,
  },
  to: {
    type: String,
  },
  zoneNumber: {
    type: Number,
  },
  SlotNumbers: [Number],
  companyName: {
    type: String,
  },
});

const BookingUser = new mongoose.model("BookingUser", bookingUserSchema);
export default BookingUser;
