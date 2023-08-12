import { MessagePayload, WebhookClient, WebhookMessageCreateOptions } from "discord.js";

export const sendDiscordMessage = (payload: string | MessagePayload | WebhookMessageCreateOptions, chatId: number) => {
  const { ALLOWED_CHANNEL_ID = 0, DISCORD_WEBHOOK = "" } = process.env;
  if (chatId === Number(ALLOWED_CHANNEL_ID)) {
    const webhookClient = new WebhookClient({ url: DISCORD_WEBHOOK });

    webhookClient
      .send(payload)
      .then(() => {
        console.log("Message sent successfully");
        webhookClient.destroy(); // Don't forget to destroy the client
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        webhookClient.destroy(); // In case of error, destroy the client
      });
  }
};
