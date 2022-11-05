import express from "express";
import {postOrder , createOrder , findOrderId, updateStatus} from "../controllers/Order.js";
// import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", createOrder);
router.get("/", postOrder);
router.get("/:id" , findOrderId)
router.put("/:id",updateStatus)


// router.put("/:id", verifyAdmin, updateHotel);
// router.delete("/:id", verifyAdmin, deleteHotel);
// router.get("/find/:id", getHotel);
// router.get("/", getHotels);
// router.get("/countByCity", countByCity);
// router.get("/countByType", countByType);
// router.get("/room/:id", getHotelRooms);

export default router;
