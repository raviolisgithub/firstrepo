const ytdl = require('ytdl-core');
const ytsearch = require('yt-search');

module.exports = {
    name: 'play',
    description: 'Plays a video from youtube!',
    async execute(client, message, args, Discord) {
        const voiceChannel = message.member.voice.channel;

        if (!voiceChannel) return message.channel.send('Oops! You need to be in a voice channel! ERROR 9I.');
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')) return message.channel.send('Oops! You do not have the permissions! ERROR 10AJ.');
        if (!permissions.has('SPEAK')) return message.channel.send('Oops! You do not have the permissions! ERROR 10AJ.');
        if (!args.length) return message.channel.send('Oops! You need to send the second argument! ERROR 11BK.');

        const validURL = (str) =>{
            var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
            if(!regex.test(str)){
                return false;
            } else {
                return true;
            }
        }

        if(validURL(args[0])){
            message.channel.send('You entered a correct URL!');

            const connection = await voiceChannel.join();
            const stream = ytdl(args[0], {filter: 'audioonly'});

            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () =>{
                voiceChannel.leave();
                message.channel.send('Leaving Channel.');
            });

            await message.reply(`:thumbsup: Now Playing ***Your Link!***`)

            
        }

        const connection = await voiceChannel.join();

        const videoFinder = async (query) => {
            const videoResult = await ytsearch(query);

            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;

        }

        const video = await videoFinder(args.join(' '));

        if(video){
            const stream = ytdl(video.url, {filter: 'audioonly'});
            connection.play(stream, {seek: 6, volume: 1 })
            .on('finish', () =>{
                voiceChannel.leave();
            });

            await message.reply(`:thumbsup: Now PLaying ***${video.title}***`)
        } else {
            message.channel.send('Oops! No video results! ERROR 12CL.');
        }
    }


}