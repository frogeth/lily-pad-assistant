import AnyCase from "./AnyCase";
import { sendDiscordMessage } from "../discord";
import { getCommands, helpCommandResponse, Command, writeBotFatherCommandsList, defaultCommands } from "@commands";
import { Telegraf } from "telegraf";
import { channelPost } from "telegraf/filters";

export const bot = new Telegraf(process.env.BOT_TOKEN);

const App = async () => {
  AnyCase.apply(bot);
  const mirrorCommands = await getCommands(false);
  const commands = [...mirrorCommands, ...defaultCommands];

  bot.on(channelPost("photo"), async (ctx) => {
    const photoArray = ctx.update.channel_post.photo;
    const fileId = photoArray[photoArray.length - 1].file_id;
    const fileLink = await ctx.telegram.getFileLink(fileId);
    sendDiscordMessage(
      {
        content: ctx.channelPost.caption,
        files: [{ attachment: fileLink.href }],
      },
      ctx.update.channel_post.chat.id,
    );
  });

  bot.on(channelPost("text"), (ctx) => {
    sendDiscordMessage(ctx.channelPost.text, ctx.update.channel_post.chat.id);
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
