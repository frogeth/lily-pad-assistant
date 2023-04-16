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

export const helpCommandResponse = (
  defaultCommands: Command[],
  customCommands: Command[]
) => {
  const writeSection = (commands: Command[]) =>
    commands
      .map((cmd: any) => `/${cmd.alias}: ${getDescription(cmd)}`)
      .join("\n");
  return `🪂 *Airdrop Guides:*\n${writeSection(
    customCommands
  )}\n\n*🐸 Socials:*\n${writeSection(defaultCommands)}`;
};

export const writeBotFatherCommandsList = async (commands: Command[]) => {
  const fileString = `help - Lists all the commands \n${(
    await generateCommandsList(commands)
  ).join("\n")}`;

  return fileString;
};
