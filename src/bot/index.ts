import { Telegraf } from "telegraf";
import {
  getCommands,
  helpCommandResponse,
  Command,
  writeBotFatherCommandsList,
  defaultCommands,
} from "@commands";

const App = async () => {
  const { BOT_TOKEN = "" } = process.env;
  const bot = new Telegraf(BOT_TOKEN);
  const mirrorCommands = await getCommands(false);
  const commands = [...mirrorCommands, ...defaultCommands];

  commands.forEach((command: Command) => {
    bot.command(command.alias, (ctx) => ctx.reply(command.response));
  });

  bot.command("help", (ctx) =>
    ctx.reply(helpCommandResponse(defaultCommands, mirrorCommands), {
      parse_mode: "Markdown",
    })
  );

  bot.command("guides", async (ctx) => {
    let inline_keyboard: any = [];
    mirrorCommands.forEach((command: Command) => {
      inline_keyboard.push([
        {
          text: command.alias,
          url: command.response,
        },
      ]);
    });

    ctx.reply("🪂 *Frog.eth Airdrop Guides:*\nCome visit us @lilyPadCrypto", {
      parse_mode: "Markdown",
      reply_markup: {
        inline_keyboard: [
          [{ text: "Official Mirror", url: "https://mirror.xyz/frog.eth" }],
          ...inline_keyboard,
        ],
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
