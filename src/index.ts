import api from "./api";
import { AppConfig } from "./config";
import bot from "@bot";

AppConfig.parse(process.env);

bot();
api();
