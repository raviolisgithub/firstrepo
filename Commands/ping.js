module.exports = {
    name: 'ping',
    description: 'A ping command is just a simple command, when you run it, the bot replies pong! A simple ping pong command.',
    execute(client, message, args, Disocrd){
       message.channel.send('Pong!');
    }
}
