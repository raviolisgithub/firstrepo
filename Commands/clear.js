module.exports = {
    name: 'clear',
    description: 'Clear messages!.',
   async execute(client, message, args, Discord){
        if(!args[0]) return message.reply("Oops! You want to Specify the amount of messages you want to clear. ERROR 1A.");
        if(isNaN(args[0])) return message.reply('Oops! Please enter a real number 0. ERROR 2B. ');

        if(args[0] > 100) return message.reply('Oops! You cannot delete more than 100 messages. ERROR 3C.');
        if(args[0] < 1) return message.reply('Oops! Please put a number other than zero! ERROR CODE 4D.');

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
    }
}