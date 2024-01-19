/* eslint-disable @typescript-eslint/no-namespace,@typescript-eslint/no-empty-interface */

import { z } from "zod";

export const AppConfig = z.object({
  BOT_TOKEN: z.string(),
  ALLOWED_CHANNEL_ID: z.string(),
  GEMSKI_DISCORD_WEBHOOK: z.string().startsWith("https://discord.com/api/webhooks/"),
  JEFF_DISCORD_WEBHOOK: z.string().startsWith("https://discord.com/api/webhooks/"),
  SNAPSHOT_WEBHOOK_SECRET: z.string(),
});

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof AppConfig> {}
  }
}
