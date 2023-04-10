import { Telegraf } from "telegraf";
import { commands, helpCommandResponse } from "@commands";

const App = async () => {
  const { BOT_TOKEN } = process.env;
  const bot = new Telegraf(BOT_TOKEN);

  commands.forEach((command) => {
    bot.command(command.alias, (ctx) => ctx.reply(command.response));
  });

  bot.command("help", (ctx) => ctx.reply(helpCommandResponse));

  bot.launch();
  console.log("Bot is live");
};

export default App;
