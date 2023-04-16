import { Telegraf } from "telegraf";
import {
  getCommands,
  helpCommandResponse,
  writeCommandsList,
  Command,
  writeBotFatherCommandsList,
} from "@commands";

const App = async () => {
  const { BOT_TOKEN = "" } = process.env;
  const bot = new Telegraf(BOT_TOKEN);
  const commands = await getCommands();

  commands.forEach((command: Command) => {
    bot.command(command.alias, (ctx) => ctx.reply(command.response));
  });

  bot.command("help", (ctx) => ctx.reply(helpCommandResponse(commands)));

  const botFatherCommands = await writeBotFatherCommandsList(commands);

  bot.command("botfathercommands", (ctx) => {
    ctx.reply(botFatherCommands);
  });

  writeCommandsList(botFatherCommands);

  bot.launch();
  console.log("Bot is live");
};

export default App;
