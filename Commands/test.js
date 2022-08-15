module.exports = {
    name: 'test',
    description: 'For testing purposes only.',
    execute(client, message, args, Discord){
       message.channel.send('Yup this is a test!');
    }
}
