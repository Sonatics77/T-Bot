const Discord = require("discord.js");

module.exports.run = async (Bot, message, args) => {
  let aArgs = message.content.slice(10).split(" ");
  if(! message.member.hasPermission("MENTION_EVERYONE")) return message.channel.send("You do not have the required permissions to use this command");
  let anChannel = `${aArgs.splice(0,2)}`;
  let annChannel = `${anChannel.slice(2)}`;
  let aChannel = `${annChannel.slice(0,annChannel.length -1)}`;
  let aText = aArgs.join(" ");
  let sendChannel = message.guild.channels.find(channel => channel.id == aChannel);

  message.channel.send(aChannel);
  message.channel.send(aText);

  sendChannel.send(aText);

}

module.exports.help = {
  name: "announce"
}
