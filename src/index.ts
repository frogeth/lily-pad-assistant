import bot from "@bot";
import * as e from "dotenv";
import express from "express";

e.config();
bot();
const app = express();
app.use(express.json());

app.post("/snapshot", (req, res) => {
  console.log(req.body);
  console.log(req.headers);
  return res.send("Received a POST HTTP method");
});

app.listen(8080, () => console.log(`Server listening on port 8080!`));
