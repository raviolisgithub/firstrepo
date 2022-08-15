module.exports = {
    name: 'leave',
    description: 'Stops the music bot!',
    async execute(client, message, args, Discord) {
        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel) return message.channel.send('Oops! You need to be in a voice channel to stop the music! ERROR 14DM.');
        await message.channel.send('Leaving channel... :smiling_face_with_tear:')
    } 
}