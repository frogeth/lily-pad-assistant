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
  const customCommands = await getCommands(false);
  const commands = [...customCommands, ...defaultCommands];

  commands.forEach((command: Command) => {
    bot.command(command.alias, (ctx) => ctx.reply(command.response));
  });

  bot.command("help", (ctx) =>
    ctx.reply(helpCommandResponse(defaultCommands, customCommands), {
      parse_mode: "Markdown",
    })
  );

  const botFatherCommands = await writeBotFatherCommandsList(commands);

  bot.command("botfathercommands", (ctx) => {
    ctx.reply(botFatherCommands);
  });

  bot.launch();
  console.log("Bot is live");
};

export default App;
