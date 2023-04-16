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
  commands.map(
    (cmd: Command) => `${cmd.alias.toLowerCase()} - ${getDescription(cmd)}`
  );

export const helpCommandResponse = (
  defaultCommands: Command[],
  mirrorCommands: Command[]
) => {
  const writeSection = (commands: Command[]) =>
    commands
      .map((cmd: any) => `/${cmd.alias}: ${getDescription(cmd)}`)
      .join("\n");

  return `🪂 *All Airdrop Guides:*\n /guides: Lists all the non-deprecated guides\n\n🪂 *Individual Airdrop Guides:*\n${writeSection(
    mirrorCommands
  )}\n\n*🐸 Socials:*\n${writeSection(defaultCommands)}`;
};

export const writeBotFatherCommandsList = async (commands: Command[]) => {
  const fileString = `help - Lists all the commands \nguides - Lists all the non-deprecated guides\n${(
    await generateCommandsList(commands)
  ).join("\n")}`;

  return fileString;
};
