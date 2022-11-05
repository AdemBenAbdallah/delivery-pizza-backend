import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import orderRouter from './routes/orders.js'
import productRouter from './routes/products.js'
import  loginRouter  from "./routes/login.js";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

//middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/order", orderRouter);
app.use("/api/product", productRouter);
app.use("/api/login" , loginRouter)

app.listen(process.env.PORT || 8800, () => {
  connect();
  console.log("Connected to backend.");
});
