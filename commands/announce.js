const Discord = require("discord.js");

module.exports.run = async (Bot, message, args) => {
  let aArgs = message.content.slice(9).split(" ");
  if(! message.member.hasPermission("MENTION_EVERYONE")) return message.channel.send("You do not have the required permissions to use this command");
  let aChannel = aArgs.splice(0,1);
  let aText = aArgs.join(" ");
  let sendChannel = message.guild.channels.find(channel => channel.name === aChannel);

  sendChannel.send(aText);

}

module.exports.help = {
  name: "announce"
}
