import express, { Router } from "express";
const router = Router();
router.get("/", (req, res) => res.send("Welcome"));
const server = express();
server.use(express.json());
server.use(router);

export default server;
