import express from "express";
import authRoute from "./auth.routes.js";
import productDataRoute from "./productData.routes.js";
import bookingUserRoute from "./bookingUser.routes.js";

const router = express.Router();

router.use("/auth", authRoute);
router.use("/product", productDataRoute);
router.use("/booking", bookingUserRoute);

export default router;
