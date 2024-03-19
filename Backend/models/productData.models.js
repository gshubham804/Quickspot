import mongoose from "mongoose";

const productDataSchema = new mongoose.Schema({
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
  nearest: [
    {
      type: String,
    },
  ],
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
    default: Date.now,
  },
  numberOfZones:{
    type:Number,
  },
  numberOfSlotsEachZone:{
    type:Number
  },
  zones: [
    {
      name: String,
      slots: [
        {
          date: {
            type: String,
          },
          from: {
            type: String,
          },
          to: {
            type: String,
          }
        },
      ],
    },
  ],
});

const productData = new mongoose.model("ProductData", productDataSchema);
export default productData;
