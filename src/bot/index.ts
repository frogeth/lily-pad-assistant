import AnyCase from "./AnyCase";
import { getCommands, helpCommandResponse, Command, writeBotFatherCommandsList, defaultCommands } from "@commands";
import { WebhookClient } from "discord.js";
import { Telegraf } from "telegraf";
import { channelPost } from "telegraf/filters";

const App = async () => {
  const { BOT_TOKEN = "", ALLOWED_CHANNEL_ID = 0, DISCORD_WEBHOOK = "" } = process.env;
  const bot = new Telegraf(BOT_TOKEN);
  AnyCase.apply(bot);
  const mirrorCommands = await getCommands(false);
  const commands = [...mirrorCommands, ...defaultCommands];

  bot.on(channelPost("photo"), async (ctx) => {
    if (ctx.update.channel_post.chat.id === Number(ALLOWED_CHANNEL_ID)) {
      const fileId = ctx.update.channel_post.photo[0].file_id;
      const fileLink = await ctx.telegram.getFileLink(fileId);

      const webhookClient = new WebhookClient({ url: DISCORD_WEBHOOK });

      webhookClient
        .send({ content: ctx.channelPost.caption, files: [{ attachment: fileLink.href }] })
        .then(() => {
          console.log("Message sent successfully");
          webhookClient.destroy(); // Don't forget to destroy the client
        })
        .catch((error) => {
          console.error("Error sending message:", error);
          webhookClient.destroy(); // In case of error, destroy the client
        });
    }
  });

  bot.on(channelPost("text"), (ctx) => {
    if (ctx.update.channel_post.chat.id === Number(ALLOWED_CHANNEL_ID)) {
      const webhookClient = new WebhookClient({ url: DISCORD_WEBHOOK });
      webhookClient
        .send(ctx.channelPost.text)
        .then(() => {
          console.log("Message sent successfully");
          webhookClient.destroy(); // Don't forget to destroy the client
        })
        .catch((error) => {
          console.error("Error sending message:", error);
          webhookClient.destroy(); // In case of error, destroy the client
        });
    }
  });

  commands.forEach((command: Command) => {
    bot.command(command.alias, (ctx) => ctx.reply(command.response));
  });

  bot.command("help", (ctx) =>
    ctx.reply(helpCommandResponse(defaultCommands, mirrorCommands), {
      parse_mode: "Markdown",
    }),
  );

  bot.command("guides", async (ctx) => {
    let inlineKeyboard: any = [];
    mirrorCommands.forEach((command: Command) => {
      inlineKeyboard.push([
        {
          text: command.alias,
          url: command.response,
        },
      ]);
    });

    ctx.reply("🪂 *Frog.eth Airdrop Guides:*\nCome visit us @lilyPadCrypto", {
      parse_mode: "Markdown",
      reply_markup: {
        inline_keyboard: [[{ text: "Official Mirror", url: "https://mirror.xyz/frog.eth" }], ...inlineKeyboard],
      },
    });
  });

  const botFatherCommands = await writeBotFatherCommandsList(commands);

  bot.command("botfathercommands", (ctx) => {
    ctx.reply(botFatherCommands);
  });

  bot.launch();
  console.log("Bot is live");
};

export default App;
