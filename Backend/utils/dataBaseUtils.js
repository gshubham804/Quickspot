import productData from "../models/productData.models.js";

// Function to build the search query
export const buildSearchQuery = (pincode, companyName) => {
    const searchQuery = {};
  
    if (pincode) {
      searchQuery.pincode = pincode;
    }
  
    if (companyName) {
      searchQuery.companyName = { $regex: new RegExp(companyName, 'i') };
    }
  
    return searchQuery;
  };

  // Function to perform the database search
export const performDatabaseSearch = async (searchQuery) => {
    const selectedFields = ["ratings", "companyName", "price"];
    return await productData.find({
      $or: [
        searchQuery.pincode ? { pincode: searchQuery.pincode } : null,
        searchQuery.companyName ? { companyName: searchQuery.companyName } : null
      ].filter(Boolean),
    }).select(selectedFields.join(' '))
    // .limit(5);            to limit the data
  };