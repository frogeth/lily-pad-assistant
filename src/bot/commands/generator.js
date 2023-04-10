import fs from "fs";
import path from "path";
import commands from "./commands.js";

// const fileLocation = path.resolve("./generatedCmdList.txt");
// console.log("file name" + fileLocation);

const fileLocation = "./src/bot/commands/generatedCmdList.txt";

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
  const fileString = `help - Lists all the commands \n${generateCommandsList().join(
    "\n"
  )}`;
  fs.writeFileSync(fileLocation, fileString, "utf-8");
  console.log(
    `Generated list of commands at ${fileLocation}:\n\n${fileString}`
  );
};
