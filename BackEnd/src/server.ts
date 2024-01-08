import express from "express";
import http from "http";
import dotevn from "dotenv"

// import { Server } from "socket.io";

dotevn.config({
    path: "../config/.env"
})

const port = process.env.PORT || 8080

const app = express();
const server = http.createServer(app);


server.listen(port, ()=> {
    console.log(`Server running on http://localhost:${port}`);
})