const Discord = require("discord.js");
const ffmpeg = require("ffmpeg");

module.exports.run = async (Bot, message, args, prefix) => {
  var vChannel = message.member.voiceChannel;
  console.log(vChannel);
  vChannel.join();
}

  module.exports.help = {
    name: "join"
  }
