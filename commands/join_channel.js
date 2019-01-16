const Discord = require("discord.js");
var ffmpeg = require('FFMPEG WORK');

module.exports.run = async (Bot, message, args) => {
  console.log(message.member.voiceChannel);
  var vChannel = message.guild.channels.find(channel => channel.id == message.member.voiceChannel);
  if(message.member.voiceChannel){
    console.log("1");
    if(! message.guild.voiceConnection){
      console.log("2");

      vChannel.join();
    }
  }
}
  module.exports.help = {
    name: "join"
  }
