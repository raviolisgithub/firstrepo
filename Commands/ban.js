module.exports = {
    name: 'Ban',
    description: 'Ban members with this command!',
    execute(client, message, args, Discord){
       const member = message.mentions.users.first();
       if(member){
           const memberTarger = message.guild.members.cache.get(member.id);
           memberTarger.ban();
           message.channel.send('User has been banned!');
       }else{
       
        message.channel.send('Oops! You cannot ban that member. ERROR 6F.');
       }
    }
}