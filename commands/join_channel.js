const Discord = require("discord.js");

module.exports.run = async (Bot, message, args) => {
  console.log(message.member.voiceChannel);
  if(message.member.voiceChannel){
    console.log("1");
    if(message.guild.voiceConnection){
      console.log("2");
      message.member.voiceChannel.join();
    }
  }
}
  module.exports.help = {
    name: "join"
  }
