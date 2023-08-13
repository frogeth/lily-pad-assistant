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
  if (req.headers.authentication === process.env.SNAPSHOT_WEBHOOK_SECRET) {
    return res.send("Received a POST HTTP method");
  } else {
    return res.send("Failed to authenticate.");
  }
});

app.listen(8080, () => console.log(`Server listening on port 8080!`));
