<!-- Title -->
<h1 align="center">LilyPad Assistant</h1>

<!-- Badges -->
<p align="center">
  <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript">
  <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white" alt="Telegram">
  <img src="https://img.shields.io/badge/Ethereum-3C3C3D?style=for-the-badge&logo=Ethereum&logoColor=white" alt="Ethereum">
</p>

<!-- Description -->
<p align="center">Official Telegram bot for https://t.me/lilypadcrypto</p>

<!-- Features -->
## ✨ Features
- Detection of Mirror Posts for Frog.Eth
- Custom Commands, and default commands
- Auto Deployment to Digital Ocean

## Commands
> `npm run build` - Creates /dist folder for production launch

> `npm run start` - Starts the bot. (Automatically runs command list generator)

> `npm run start-pm2` - Starts the bot using pm2. (Allows you to run in the background)

## To add or edit commands

1. Fork this repo
2. Create a `.env` file with the following contents:

```
BOT_TOKEN= " " // insert your bot token here
```

3. Create or edit commands in [commands.js](/src/bot/commands/commands.js)

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

## TO-DO

- [ ] add support for deprecating mirror posts
- [x] Write mirror.xyz integration
- [ ] Write tweet integration
- [ ] Announcement generator
- [x] All guides text generator
- [ ] cooldown on commands?
- [ ] admin panel (way later down)

<!-- Contributing -->
## 🤝 Contributing
Contributions are always welcomed.

<!-- Footer -->
<p align="center">
  Made with ❤️ by Frog.eth
</p>

