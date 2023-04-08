import bot from "./bot/index.js";
import server from "./bot/server.js";
import * as e from "dotenv";
e.config();

const PORT = process.env.PORT;

server.listen(PORT, () => console.log(`Server is live at localhost:${PORT}`));

bot();
