module.exports = {
    name: 'kick',
    description: 'Kick members with this command!',
    execute(client, message, args, Discord){
       const member = message.mentions.users.first();
       if(member){
           const memberTarger = message.guild.members.cache.get(member.id);
           memberTarger.kick();
           message.channel.send('User has been kicked!');
       }else{
       
        message.channel.send('Oops! You cannot kick that member. ERROR 5E.');
       }
    }
}