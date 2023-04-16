import fs from "fs";
import path from "path";
import { commands } from "@commands";

const fileLocation = "./assets/generatedCmdList.txt";

const defaultCommandDescription = (alias) =>
  `Official Airdrop Guide for ${alias}`;

const getDescription = ({ description, alias }) =>
  description ? description : defaultCommandDescription(alias);

const generateCommandsList = () =>
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
    `Generated list of commands at ${fileLocation}:\n\n${fileString}\n`
  );
};
