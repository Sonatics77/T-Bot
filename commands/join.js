const Discord = require("discord.js");
const ffmpg = require("ffmpg");

module.exports.run = async (Bot, message, args, prefix) => {
  var vChannel = message.member.voiceChannel;
  //console.log(vChannel);
  vChannel.join();
}

  module.exports.help = {
    name: "join"
  }
