import fs from "fs";
import commands from "./commands.js";

const fileLocation = "./bot/commands/generatedCmdList.txt";

const defaultCommandDescription = (command) =>
  `Official Airdrop Guide for ${command.alias}`;

const getDescription = (command) =>
  command.description
    ? command.description
    : defaultCommandDescription(command);

export const generateCommandsList = () =>
  commands.map((cmd) => `${cmd.alias} - ${getDescription(cmd)}`);

export const helpCommandResponse = commands
  .map((cmd) => `/${cmd.alias}: ${getDescription(cmd)}`)
  .join("\n");

export const writeCommandsList = () => {
  const fileString = generateCommandsList().join("\n");
  fs.writeFileSync(fileLocation, fileString, "utf-8");
  console.log(`Commands list generated at ${fileLocation}`);
};

export const generator = () => writeCommandsList();
