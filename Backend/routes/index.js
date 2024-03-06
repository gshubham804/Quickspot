import express from "express";
import authRoute from "./auth.routes.js";
import productDataRoute from "./productData.routes.js";
const router = express.Router();

router.use("/auth", authRoute);
router.use("/product", productDataRoute);

export default router;
