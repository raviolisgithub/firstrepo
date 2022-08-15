module.exports = {
    name: 'unmute',
    description: 'Unmute members with this command!',
    execute(client, message, args, Discord){
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guilds.roles.cache.find(role => role.name === Verified);
            let muteRole = message.guilds.roles.cache.find(role => role.name === Muted);

            let memberTarget= message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(mainRole.id);
            memberMute.roles.add(mainRole.id);
            message.channel.send(`@${memberTarget.user.id}> has been unmuted.`);
        } else {
            message.channel.send("Oops! You cannot unmute that member! ERROR 8H.");
        }
    }
}