import fs from "fs";

const fileLocation = "./assets/generatedCmdList.txt";

export type Command = {
  alias: string;
  response: string;
  description: string;
};

const defaultCommandDescription = (alias: Command["alias"]) =>
  `Official Airdrop Guide for ${alias}`;

const getDescription = ({ description, alias }: Command) =>
  description ? description : defaultCommandDescription(alias);

const generateCommandsList = async (commands: Command[]) =>
  commands.map((cmd: Command) => `${cmd.alias} - ${getDescription(cmd)}`);

export const helpCommandResponse = (commands: Command[]) =>
  commands
    .map((cmd: any) => `/${cmd.alias}: ${getDescription(cmd)}`)
    .join("\n");

export const writeBotFatherCommandsList = async (commands: Command[]) => {
  const fileString = `help - Lists all the commands \n${(
    await generateCommandsList(commands)
  ).join("\n")}`;

  return fileString;
};
export const writeCommandsList = async (fileString: string) => {
  fs.writeFileSync(fileLocation, fileString, "utf-8");
};
