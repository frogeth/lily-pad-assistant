import bot from "@bot";
import { writeCommandsList } from "@bot/commands/generator.js";
import * as e from "dotenv";
e.config();

writeCommandsList();

bot();
