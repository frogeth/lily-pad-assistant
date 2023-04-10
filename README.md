# lily-pad-assistant

Official Telegram bot for [The Lily Pad](https://t.me/lilypadcrypto)

> `npm run build` - Creates /dist folder for production launch

> `npm run start` - Starts the bot. (Automatically runs command list generator)

> `npm run start-pm2` - Starts the bot using pm2. (Allows you to run in the background)

---

## To add or edit commands

1. Fork this repo
2. Create a `.env` file with the following contents:

```
BOT_TOKEN= " " // insert your bot token here
```

3. Create or edit commands in [commands.js](/bot/commands/commands.js)

```
const newCommandName = {
 alias: "mirror", // alias to trigger the command
 response: "https://mirror.xyz/frog.eth", // response the bot sends
 description: "Insert description of the command here",
};
```

4. Add the object to the `commands` array at the bottom of [commands.js](/bot/commands/commands.js)

```
const commands = [newCommandName, ...otherCommands];
```

---

## TO-DO

- [ ] Write mirror.xyz integration
- [ ] Write tweet integration
- [ ] Announcement generator
- [ ] All guides text generator
- [ ] cooldown on commands?
- [ ] admin panel (way later down)

---

> 🐸 Made by **Frog.eth**
