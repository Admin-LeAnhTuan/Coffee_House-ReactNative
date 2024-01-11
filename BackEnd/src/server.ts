import express from "express";
import http from "http";
import dotenv from "dotenv"
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors"
// import { Server } from "socket.io";

// import local
const ConnectDatabase = require("./helper/Connection.helper");
import userRouter from "./router/User.router"
import productRouter from "./router/Product.router"
import toppingRouter from "./router/Topping.router"
import typeProductRouter from "./router/TypeProduct.router"
import categoryRouter from "./router/Category.router"
import orderRouter from "./router/Order.router"
import detailOrderRouter from "./router/DetailOrder.router"


dotenv.config({
    path:"./config/.env"
})

// 
const port = process.env.PORT || 8080
const app = express();
const server = http.createServer(app);

app.use(bodyParser.json());
app.use(cookieParser());
app.use(compression());
app.use(cors())

// use 
app.use("/user", userRouter);
app.use("/product", productRouter);
app.use("/topping", toppingRouter);
app.use("/categories",categoryRouter);
app.use("/detailOrder",categoryRouter);
app.use("/typeProduct", typeProductRouter);
app.use("/order", orderRouter);
app.use("/detailOrder", detailOrderRouter);

ConnectDatabase();
server.listen(port, ()=> {
    console.log(`Server running on http://localhost:${port}`);
})