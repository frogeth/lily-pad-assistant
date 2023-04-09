# lily-pad-assistant

Official Telegram bot for [The Lily Pad](https://t.me/lilypadcrypto)

> `npm run start` - Starts the bot. (Automatically runs command list generator)

> `npm run commands` - Generates a list of commands that can be given to [@BotFather](https://t.me/botfather) on Telegram.

> [Here are the docs for pm2 to host this on your own server](https://pm2.keymetrics.io/docs/usage/quick-start/)

## To add or edit commands

1. Fork this repo
2. Create or edit commands in [commands.js](/bot/commands/commands.js)

```
const mirror = {
 alias: "mirror", // alias to trigger the command
 response: "https://mirror.xyz/frog.eth", // response the bot sends
 description: "Insert description of the command here",
};
```

3. Add the object to the `commands` array at the bottom of [commands.js](/bot/commands/commands.js)

```
const commands = [mirror, zksync, layerzero, shardeum, base, twitter, gm, gn];
```

4. Use `npm run commands` and update [@BotFather](https://t.me/botfather) (by sending him /setCommands) and responding with the commands list generated in the [generatedCmdList.txt](./bot/commands/generatedCmdList.txt) file.

## TO-DO

- [ ] Write mirror.xyz integration
- [ ] Write tweet integration
- [ ] Announcement generator
- [ ] All guides text generator
- [ ] cooldown on commands?
- [ ] admin panel (way later down)

> 🐸 Made by **Frog.eth**
