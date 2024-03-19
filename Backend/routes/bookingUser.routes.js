import express from "express";
import {bookTheParkingSlot} from "../controllers/bookingUser.controllers.js";
const router = express.Router();

router.post("/booktheparkingslot", bookTheParkingSlot);

export default router;
