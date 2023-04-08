import bot from "./bot/index.js";
import server from "./bot/server.js";
import { writeCommandsList } from "./bot/commands/generator.js";
import * as e from "dotenv";
e.config();

// Generate commands list file for @botfather in bot/commands/generatedCmdList.txt
writeCommandsList();

const PORT = process.env.PORT;
server.listen(PORT, () => console.log(`Server is live at localhost:${PORT}`));

bot();
