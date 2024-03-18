import express from "express";
import {
  getProductData,
  postProductData,
  filteredData,
  getProductDetailsData,
} from "../controllers/productData.controllers.js";
const router = express.Router();

router.get("/getProductData", getProductData);
router.get("/getProductDetailsData", getProductDetailsData);
router.post("/postProductData", postProductData);
router.post("/filteredData", filteredData);

export default router;
