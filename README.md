# lily-pad-assistant

Official Telegram bot for [The Lily Pad](https://t.me/lilypadcrypto)

> `npm run start` - Starts the bot. (Automatically runs command list generator)

> `npm run commands` - Generates a list of commands that can be given to [@BotFather](https://t.me/botfather) on Telegram.

> [Here are the docs for pm2 to host this on your own server](https://pm2.keymetrics.io/docs/usage/quick-start/)

## To add or edit commands

1. Fork this repo
2. Create or edit objects in [commands.js](/bot/commands/commands.js)
3. Add the object to the `commands` array at the bottom
4. Run the bot and update [@BotFather](https://t.me/botfather) commands list using /setcommands

## TO-DO

- [ ] Write mirror.xyz integration
- [ ] Write tweet integration
- [ ] Announcement generator
- [ ] All guides text generator
- [ ] cooldown on commands?
- [ ] admin panel (way later down)

> 🐸 Made by **Frog.eth**
