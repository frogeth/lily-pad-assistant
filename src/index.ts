import bot from "@bot";
import * as e from "dotenv";
import express from "express";

e.config();
bot();
const app = express();

app.post("/snapshot", (req, res) => {
  console.log(req.body);
  return res.send("Received a POST HTTP method");
});

app.listen(8080, () => console.log(`Server listening on port 8080!`));
