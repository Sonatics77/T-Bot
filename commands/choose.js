const Discord = require()"discord.js");

module.exports.run = async (Bot, message, args) => {
  let cmdargs = message.content.slice(Prefix.length).trim().split(" ");
  let args = cmdargs.splice(0,1);
  let chosen = args[Math.floor(Math.random() * args.length)]
  return.message.channel.send(rand);
}

module.exports.help = {
  name: "choose"
}
