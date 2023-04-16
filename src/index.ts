import bot from "@bot";
import { writeCommandsList } from "@commands";
import mirror from "@mirror";
import * as e from "dotenv";

mirror();
e.config();
writeCommandsList();
bot();
