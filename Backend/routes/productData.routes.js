import express from "express";
import {getProductData, postProductData,filteredData} from "../controllers/productData.controllers.js";
const router = express.Router();

router.get("/getProductData", getProductData);
router.post("/postProductData", postProductData);
router.post("/filteredData", filteredData);

export default router;
