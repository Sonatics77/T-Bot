const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (Bot, message, args, prefix) => {
  let unmute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(! unmute) return message.reply("Couldn't find user.")
  let muterole = message.guild.roles.find(`name`, "muted");
  unmute.removeRole(muterole.id);
  message.channel.send(`<@${unmute.id}> has been unmuted!`);

}


module.exports.help = {
  name: "unmute"
}
