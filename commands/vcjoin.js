const Discord = require("discord.js");
const Ffmpeg = require("ffmpeg");

module.exports.run = async (Bot, message, args) => {
  let vChannel = message.member.channel.id;
  message.channel.send(message.member.channel.id);
  vChannel.join().then(connection => {
    message.channel.send(`Successfully joined ${vChannel}`);
  });

}

module.exports.help = {
  name: "join"
}
