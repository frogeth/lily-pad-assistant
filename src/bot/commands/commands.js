const mirror = {
  alias: "mirror", // alias to trigger the command
  response: "https://mirror.xyz/frog.eth", // response the bot sends
  description: "Frog.eth's Official Mirror.xyz profile", // description of the command as it appears in the bot's /help command
};

const linea = {
  alias: "linea",
  response:
    "https://mirror.xyz/frog.eth/DkCeQP7F2l8v1rLn1pvZ3KvHsCxNJGnK5rVkf-R5jfs",
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
  description: "How to setup a Testnet Shardeum node",
};

const base = {
  alias: "base",
  response:
    "https://mirror.xyz/frog.eth/yDtARfnf6nbakfSNp1osgp5eHkr8AQI4dvpRgA4hy-I",
  description: "How to mint dev Base NFT",
};

const twitter = {
  alias: "twitter",
  response: "https://twitter.com/frogdoteth",
  description: "Frog.eth's Official Twitter profile",
};

const gm = {
  alias: "gm",
  response: "come say gm https://t.me/GoodMorningFrogs",
  description: "Official GM chat",
};

const gn = {
  alias: "gn",
  response: "come say gn https://t.me/GoodNightFrogs",
  description: "Official GN chat",
};

// Add new commands here
const commands = [
  mirror,
  zksync,
  layerzero,
  shardeum,
  base,
  twitter,
  linea,
  gm,
  gn,
];

export default commands;
