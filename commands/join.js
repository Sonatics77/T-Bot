const Discord = require("discord.js");
const ffmpeg = require.paths("C:\\Users\\thenu\\Documents\\TaskieBot\\T-Bot\\node_modules\\ffmpeg");

module.exports.run = async (Bot, message, args, prefix) => {
  var vChannel = message.member.voiceChannel;
  console.log(vChannel);
  vChannel.join();
}

  module.exports.help = {
    name: "join"
  }
