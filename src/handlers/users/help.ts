import bot from '../../loader';

// Handle the /start command
bot.command("help", (ctx) => ctx.reply("/start - Bot start \n/help - help"));
