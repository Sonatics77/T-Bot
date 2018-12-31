const Discord = require("discord.js");

module.exports.run = async (Bot, message, args) => {
  let cmdargs = message.content.slice(1).trim().split(" ");
  let argus = cmdargs.splice(0,1);
  let chosen = argus[Math.floor(Math.random() * args.length)]
  return message.channel.send(rand);
}

module.exports.help = {
  name: "choose"
}
