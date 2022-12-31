import { Bot, Context } from 'grammy';
import { BOT_TOKEN, ADMINS } from './data/config';

// Create an instance of the `Bot` class and pass your authentication token to it. 
const bot = new Bot<Context>(BOT_TOKEN);

// export bot constanta
export default bot;
 