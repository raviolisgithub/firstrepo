module.exports = {
    name: 'rickroll',
    description: 'Get rickrolled kiddo!',
    execute(client, message, args, Discord){


        let role = message.guild.roles.cache.find(r => r.name === "Testing role");
       if (message.member.roles.cache.some(r => r.name === "Testing role")){
        message.channel.send('Never Gonna Give You Up!');
       } else {
        message.channel.send("Oh shoot! You don't have the roles to do this command, Let me fix that. :)");
        message.member.roles.add('995969253045968906').catch(console.error);
       }
       
    }
    }
