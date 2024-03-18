import mongoose from "mongoose";

const bookingUserSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  date: {
    type: Date,
  },
  from: {
    type: Date,
  },
  to: {
    type: Date,
  },
  numberOfSlots: {
    type: Number,
  },
  SlotNumbers: [Number],
  companyName: {
    type: String,
  },
});

const BookingUser = new mongoose.model("BookingUser", bookingUserSchema);
export default BookingUser;
