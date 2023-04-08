import fs from "fs";

const generateCommandsList = (commands) => {
  const commandsList = commands.map((command) => {
    return `${command.alias} - ${
      command.description
        ? command.description
        : `Official Airdrop Guide for ${command.alias}`
    }`;
  });
  return commandsList;
};

const writeCommandsList = (commandsList) => {
  const commandsListString = commandsList.join("\n");
  fs.writeFileSync(
    "./generated-commands-list.txt",
    commandsListString,
    "utf-8"
  );
  console.log("Commands list generated");
};

const mirror = {
  alias: "mirror",
  response: "https://mirror.xyz/frog.eth",
  description: "Frog.eth's Official Mirror.xyz profile",
};

const zksync = {
  alias: "zksync",
  response:
    "https://mirror.xyz/frog.eth/blZfEks_qBpCfTiiOZx-FQSh5DZE9bNPvrwlkDJBmQE",
};

const layerzero = {
  alias: "layerzero",
  response:
    "https://mirror.xyz/frog.eth/vupvwOMgs3e2q4w5rpfL_1gH9vDsGOYVKeerhPUt3w0",
};

const shardeum = {
  alias: "shardeum",
  response:
    "https://mirror.xyz/frog.eth/xGK3t_-F-O_EpM7AsFR2_m5PhszqmZiLByYbGgYeFIY",
};

const base = {
  alias: "base",
  response:
    "https://mirror.xyz/frog.eth/yDtARfnf6nbakfSNp1osgp5eHkr8AQI4dvpRgA4hy-I",
};

const commands = [mirror, zksync, layerzero, shardeum, base];

const commandsList = generateCommandsList(commands);
writeCommandsList(commandsList);

export default commands;
