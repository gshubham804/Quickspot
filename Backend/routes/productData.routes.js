import express from "express";
import {getProductData, postProductData} from "../controllers/productData.controllers.js";
const router = express.Router();

router.get("/getProductData", getProductData);
router.post("/postProductData", postProductData);

export default router;
