import bot from "@bot";
import { writeCommandsList } from "@commands";
import * as e from "dotenv";

e.config();
writeCommandsList();
bot();
