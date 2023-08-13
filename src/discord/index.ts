import { MessagePayload, WebhookClient, WebhookMessageCreateOptions } from "discord.js";

export const sendDiscordMessage = (payload: string | MessagePayload | WebhookMessageCreateOptions, chatId: number) => {
  if (chatId === Number(process.env.ALLOWED_CHANNEL_ID)) {
    const webhookClient = new WebhookClient({ url: process.env.DISCORD_WEBHOOK });

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
