import mongoose from "mongoose";

const prdouctDataSchema = new mongoose.Schema({
  ownerFullName: {
    type: String,
    required: true,
  },
  ownerAvatar: {
    type: String,
  },
  companyName: {
    type: String,
    required: true,
  },
  companyDescription: {
    type: String,
    required: true,
  },
  images: [
    {
      type: String,
    },
  ],
  ratings: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
  },
  location: {
    type: String,
  },
  city: {
    type: String,
  },
  pincode: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const prdouctData = new mongoose.model("ProductData", prdouctDataSchema);
export default prdouctData;
