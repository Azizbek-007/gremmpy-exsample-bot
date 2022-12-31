import bot from '../../loader';

bot.on('message', async (ctx) => {
    const text = ctx.message.text || "Happy Hacking 🥳🥳";
    await ctx.reply(text)
})