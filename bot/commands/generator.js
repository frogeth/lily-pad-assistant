import fs from "fs";
import commands from "./commands.js";

const fileLocation = "./bot/commands/generatedCmdList.txt";

const defaultCommandDescription = (command) =>
  `Official Airdrop Guide for ${command.alias}`;

const generateCommandsList = (commands) => {
  const commandsList = commands.map((command) => {
    return `${command.alias} - ${
      command.description
        ? command.description
        : defaultCommandDescription(command)
    }`;
  });
  return commandsList;
};

const writeCommandsList = (commandsList) => {
  const commandsListString = commandsList.join("\n");
  fs.writeFileSync(fileLocation, commandsListString, "utf-8");
  console.log(`Commands list generated at ${fileLocation}`);
};

export default () => {
  const commandsList = generateCommandsList(commands);
  writeCommandsList(commandsList);
};
