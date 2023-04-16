import { getPosts, searchContentForAttribute } from "@mirror";
import { Command } from "@commands";

const mirror = {
  alias: "mirror", // alias to trigger the command
  response: "https://mirror.xyz/frog.eth", // response the bot sends
  description: "Frog.eth's Official Mirror.xyz profile", // description of the command as it appears in the bot's /help command
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

export const defaultCommands: Command[] = [mirror, twitter, gm, gn];

const getCommands = async (withDefaultCommands = true) => {
  let commands: Command[] = [];
  const posts = await getPosts();

  posts.forEach((post) => {
    const alias = searchContentForAttribute(
      post.content.body,
      "lilyPadBotCommand"
    );
    const descriptionExists = searchContentForAttribute(
      post.content.body,
      "lilyPadBotDescription"
    );

    const command: Command = {
      alias,
      response: `https://mirror.xyz/frog.eth/${post.originalDigest}`,
      description: descriptionExists ? descriptionExists : "",
    };
    commands.push(command);
  });

  if (withDefaultCommands) {
    commands = [...commands, ...defaultCommands];
  }

  return commands;
};

export default getCommands;
