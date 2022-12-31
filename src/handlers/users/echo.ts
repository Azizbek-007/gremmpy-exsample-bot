import bot from '../../loader';

// Handle other messages.
bot.on('message', async (ctx) => {
    const text = ctx.message.text || "Happy Hacking 🥳🥳";
    await ctx.reply(text)
})