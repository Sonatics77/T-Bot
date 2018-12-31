const Discord = require("discord.js");

module.exports.run = async (Bot, message, args) => {
  let crawtime = message.createdAt;
  let csplittime = crawtime.split(" ")
  let ctimelength = csplittime.length;
  let ctime = csplittime.splice(0,(ctimelength-1));
  let embedTime = new Discord.RichEmbed()
  .setDescription("The current time is:")
  .setDescription(ctime);

  return message.channel.send(embedTime);
}

module.exports.help = {
  name: "time"
}
