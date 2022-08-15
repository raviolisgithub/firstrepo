module.exports = {
    name: 'embed',
    description: 'This is how an embed message looks like!',
    execute(client, message, args, Discord){
        const newEmbed = new Discord.MesssageEmbed()
        .setColor('#009975')
        .setTitle('Embed Message Title')
        .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
        .setDescription('Embed Description')
        .addImage('https://medium.com/@cpsexton/building-more-beautiful-embeds-for-your-discord-bot-8ce712bbc98')
        .setFooter('This is your embed footer.');

        message.channel.send(newEmbed);
    }
    
}