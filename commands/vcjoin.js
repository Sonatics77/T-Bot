const Discord = require("discord.js");

module.exports.run = async (Bot, message, args) => {
  let vChannel = message.member.voiceChannel;
  vChannel.join().then(connection => {
    message.channel.send(`Succesfull joined ${vChannel}`);
  })
}

module.exports.help = {
  name: "join"
}
