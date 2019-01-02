const Discord = require("discord.js");
const Ffmpeg = require("ffmpeg");

module.exports.run = async (Bot, message, args) => {
  let vChannel = message.author.voiceChannel;
  message.channel.send(message.author.voiceChannel);
  vChannel.join().then(connection => {
    message.channel.send(`Successfully joined ${vChannel}`);
  });

}

module.exports.help = {
  name: "join"
}
