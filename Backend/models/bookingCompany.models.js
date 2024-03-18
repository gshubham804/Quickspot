import mongoose from "mongoose";

const bookingCompanySchema = new mongoose.Schema({
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
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProductData",
  },
});

const BookingCompany = new mongoose.model("BookingCompany", bookingCompanySchema);
export default BookingCompany;
