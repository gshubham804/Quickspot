import PrdouctData from "../models/productData.models.js";

export const getProductData = async (req, res, next) => {
  try {
    // Select only the desired fields
    const productData = await PrdouctData.find()
      .select('images ratings companyName price');

    return res.status(200).json({
      status: "success",
      data: productData,
    });
  } catch (error) {
    console.error("Error fetching product data:", error);
    return res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};

export const postProductData = async (req, res, next) => {
    const {
      ownerFullName,
      ownerAvatar,
      companyName,
      companyDescription,
      images,
      ratings,
      price,
      location,
      city,
      pincode,
    } = req.body;
  
    try {
      const newProductData = await PrdouctData.create({
        ownerFullName,
        ownerAvatar,
        companyName,
        companyDescription,
        images,
        ratings,
        price,
        location,
        city,
        pincode,
      });
  
      return res.status(201).json({
        status: "success",
        data: newProductData,
      });
    } catch (error) {
      console.error("Error creating product data:", error);
      return res.status(500).json({
        status: "error",
        message: "Internal Server Error",
      });
    }
  };