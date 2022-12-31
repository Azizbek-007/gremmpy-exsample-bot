import { Bot, Context } from 'grammy';
import { BOT_TOKEN, ADMINS } from './data/config';

const bot = new Bot<Context>(BOT_TOKEN);

export default bot;
 