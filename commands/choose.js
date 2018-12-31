const Discord = require("discord.js");

module.exports.run = async (Bot, message, args) => {
  let cmdargs1 = message.content.slice(1).trim().split(", ");
  let argus = cmdargs1.splice(0,1);
  let chosen = cmdargs1[Math.floor(Math.random() * cmdargs1.length)]
  return message.channel.send(chosen);
}

module.exports.help = {
  name: "choose"
}
