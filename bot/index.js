import { Telegraf, session } from "telegraf";
import commands from "./commands.js";

const App = async () => {
  const { BOT_TOKEN } = process.env;
  const bot = new Telegraf(BOT_TOKEN);

  commands.forEach((command) => {
    bot.command(command.alias, (ctx) => ctx.reply(command.response));
  });

  bot.launch();
  console.log("Bot is live");
};

export default App;
