const Discord = require("discord.js");

module.exports.run = async (Bot, message, args) => {
  let embedText = message.content.slice(7);
  let responseEmbed = new Discord.RichEmbed()
  .setDescription(embedText)

  return message.channel.send(responseEmbed);

}


module.exports.help = {
  name: "embed"
}
