const ms = require('ms');
module.exports = {
    name: 'mute',
    description: 'Mute members with this command!',
    execute(client, message, args, Discord){
        const target = message.mentions.users.first();
        if(target){

            let mainRole = message.guilds.roles.cache.find(role => role.name === Verified);
            let muteRole = message.guilds.roles.cache.find(role => role.name === Muted);

            let memberTarget= message.guild.members.cache.get(target.id);

            if(!args[1]){
                memberTarget.roles.remove(mainRole.id);
            memberMute.roles.add(mainRole.id);
            message.channel.send(`@${memberTarget.user.id}> has been muted.`);
            return   
            }
            memberTarget.roles.remove(mainRole.id);
            memberMute.roles.add(mainRole.id);
            message.channel.send(`@${memberTarget.user.id}> has been muted for ${ms(ms)(args)[1]}.`);

            setTimeout(function(){
                memberTarget.roles.remove(mainRole.id);
            memberMute.roles.add(mainRole.id);
            }, ms(orgs[1]))
        } else {
            message.channel.send("Oops! You cannot mute that member! ERROR 7G.");
        }
    }
}