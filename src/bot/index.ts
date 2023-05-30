import AnyCase from "./AnyCase";

import { getCommands, helpCommandResponse, Command, writeBotFatherCommandsList, defaultCommands } from "@commands";
import { Telegraf } from "telegraf";

const App = async () => {
  const { BOT_TOKEN = "" } = process.env;
  const bot = new Telegraf(BOT_TOKEN);
  AnyCase.apply(bot);
  const mirrorCommands = await getCommands(false);
  const commands = [...mirrorCommands, ...defaultCommands];

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
