const Discord = require("discord.js");
const Ffmpeg = require("ffmpeg");

module.exports.run = async (Bot, message, args, prefix) => {
  let jChannel = await message.member.voiceChannel;
  console.log(jChannel);
  jChannel.join().then(connection => {
    console.log("CONNECTED");
  });
}

module.exports.help = {
  name: "join"
}
