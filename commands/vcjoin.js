const Discord = require("discord.js");
const Ffmpeg = require("ffmpeg");

module.exports.run = async (Bot, message, args) => {
  let vChannel = message.member.voiceChannel;
  message.channel.send(vChannel);
//  vChannel.join().then(connection => {
  //  message.channel.send(`Succesfully joined ${vChannel}`);

}

module.exports.help = {
  name: "join"
}
