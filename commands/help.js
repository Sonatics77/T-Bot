const Discord = require("discord.js");

module.exports.run = async (Bot, message, args) => {

  let boticon = bot.user.displayAvatarURL
  let eHelp = new Discord.RichEmbed()
  .setTitle("TaskieBot Commands")
  .setThumbnail(boticon)
  .setColor("#137ab2")
  .setDescription("Prefix is t\.")
  .setField("Moderation", "t.report @user reason, t.ban @user, t.kick @user, t.tempmute @user 1m, t.unmute @user, t.addrole role, t.removerole role")
  .setField("Info", "t.serverinfo, t.botinfo")
  .setField("Games", "t.hangman")
  .setField("Announcements", "t.announce #channel \"text\"")
  .setField("Other", "t.cat, t.embed \"colour (or hex code)\", t.choose option1 option 2... etc");

  message.channel.send(eHelp);

}

module.exports.help = {
  name: "help"
}
