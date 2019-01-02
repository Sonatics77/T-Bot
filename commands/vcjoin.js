const Discord = require("discord.js");
const Ffmpeg = require("ffmpeg");

module.exports.run = async (Bot, message, args) => {
  let vArgs = message.content.slice(7).trim();
  message.channel.send(vArgs);
  let vChannel = message.guild.channels.find(channel => channel.name == vArgs);
//  let vChannel = message.author.voiceChannel;
  vChannel.join().then(connection => {
    message.channel.send(`Successfully joined ${vChannel}`);
  });

}

module.exports.help = {
  name: "join"
}
