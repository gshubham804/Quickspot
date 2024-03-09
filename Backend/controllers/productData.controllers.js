import ProductData from "../models/productData.models.js";
import { buildSearchQuery, performDatabaseSearch } from "../utils/dataBaseUtils.js";

// To get the data of companies
export const getProductData = async (req, res, next) => {
  try {
    // Select only the desired fields
    const productData = await ProductData.find().select(
      "images ratings companyName price"
    );

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

// To save the data of companies

export const postProductData = async (req, res, next) => {
  const {
    ownerFullName,
    ownerAvatar,
    companyName,
    companyDescription,
    images,
    nearest,
    ratings,
    price,
    location,
    city,
    pincode,
  } = req.body;

  try {
    const newProductData = await ProductData.create({
      ownerFullName,
      ownerAvatar,
      companyName,
      companyDescription,
      images,
      nearest,
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

// To get the data of companies on the basis of provided query

export const filteredData = async (req, res, next) => {
  try {
    const { pincode, companyName } = req.query;

    // Build the search query
    const searchQuery = buildSearchQuery(pincode, companyName);

    // Perform the search in the database
    const searchResults = await performDatabaseSearch(searchQuery);

    // Return the results
    res.json({ results: searchResults });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

