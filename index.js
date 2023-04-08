import app from "./bot/index.js";
import * as e from "dotenv";
import express, { Router } from "express";

e.config();

const router = Router();

router.get("/", (req, res) => res.send("Welcome"));

const server = express();

server.use(express.json());

app();

const PORT = process.env.PORT;

server.listen(PORT, () => console.log(`Server is live at localhost:${PORT}`));
