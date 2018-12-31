const Discord = require("discord.js");

module.exports.run = async (Bot, message, args) => {
  let embedTime = new Discord.RichEmbed()
  .setDescription("The current time is:")
  .setDescription(message.createdAt.substring(8));

  return message.channel.send(embedTime);
}

module.exports.help = {
  name: "time"
}
