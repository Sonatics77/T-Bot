const Discord = require("discord.js");
const Ffmpeg = require("ffmpeg");

module.exports.run = async (Bot, message, args, prefix) => {
  let jrChannel = await message.member.voiceChannelID;
  let jChannel = await message.guild.channels.find(channel => channel.id == jrChannel);
  console.log(jChannel);
  jChannel.join().then(connection => {
    console.log("CONNECTED");
  });
}

module.exports.help = {
  name: "join"
}
