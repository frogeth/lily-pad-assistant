import { bot } from "@bot";
import express from "express";

const proposalCreatedAlertMessage = `A new proposal has been created on Snapshot for STG. Vote for potential LayerZero Airdrop.`;

export default () => {
  const app = express();
  app.use(express.json());
  app.post("/snapshot", async (req, res) => {
    if (req.headers.authentication === process.env.SNAPSHOT_WEBHOOK_SECRET) {
      if (req.body.event === "proposal/created") {
        const url = `https://snapshot.org/#/${req.body.space}/${req.body.id}`;

        await bot.telegram.sendMessage(process.env.ALLOWED_CHANNEL_ID, proposalCreatedAlertMessage, {
          reply_markup: { inline_keyboard: [[{ text: "Vote Here", url }]] },
        });
      }
      return res.send("Received a POST HTTP method");
    } else {
      return res.status(401).send("Failed to authenticate.");
    }
  });

  app.listen(8080, () => console.log(`Server listening on port 8080!`));
};
