import bot from "./bot/index.js";
import server from "./bot/server.js";
import generateCommandsList from "./bot/commands/generator.js";
import * as e from "dotenv";

e.config();
generateCommandsList();

const PORT = process.env.PORT;
server.listen(PORT, () => console.log(`Server is live at localhost:${PORT}`));

bot();
