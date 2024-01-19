import { MessagePayload, WebhookClient, WebhookMessageCreateOptions } from "discord.js";

export const sendDiscordMessage = (
  urls: string[],
  payload: string | MessagePayload | WebhookMessageCreateOptions,
  chatId: number,
) => {
  if (chatId === Number(process.env.ALLOWED_CHANNEL_ID)) {
    urls.forEach((url) => {
      const webhookClient = new WebhookClient({ url });

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
    });
  }
};
