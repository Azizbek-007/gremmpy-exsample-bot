import dotenv from 'dotenv';

dotenv.config();

const BOT_TOKEN = process.env.BOT_TOKEN || "BOT TOKEN";
const ADMINS = process.env.ADMINS || "ADMINS ID"
const IP = process.env.IP || "SERVER IP";

export {BOT_TOKEN, ADMINS, IP};