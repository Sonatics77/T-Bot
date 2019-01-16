const Discord = require("discord.js");

module.exports.run = async (Bot, message, args) => {

  let boticon = Bot.user.displayAvatarURL
  let eHelp = new Discord.RichEmbed()
  .setTitle("TaskieBot Commands")
  .setThumbnail(boticon)
  .setColor("#137ab2")
  .setDescription(`Prefix is ${prefix}. Can be changed with ${prefix}prefix <prefix>`)
  .addField("Moderation", "t.report @user reason, t.ban @user, t.kick @user, t.tempmute @user 1m, t.unmute @user, t.addrole <role>, t.removerole <role>")
  .addField("Info", "t.serverinfo, t.botinfo")
  .addField("Games", "t.hangman")
  .addField("Announcements", "t.announce #channel <text>")
  .addField("Other", "t.cat, t.embed <colour (or hex code)> <text>, t.choose <option1>, <option 2>,... etc");

  message.channel.send(eHelp);

}

module.exports.help = {
  name: "help"
}
