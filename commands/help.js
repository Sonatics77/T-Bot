const Discord = require("discord.js");

module.exports.run = async (Bot, message, args, prefix) => {

  let boticon = Bot.user.displayAvatarURL
  let eHelp = new Discord.RichEmbed()
  .setTitle(`TaskieBot Commands`)
  .setThumbnail(boticon)
  .setColor(`#137ab2`)
  .setDescription(`Prefix is ${prefix} Can be changed with ${prefix}prefix <prefix>`)
  .addField(`Moderation`, `${prefix}report @user reason, ${prefix}ban @user, ${prefix}kick @user, ${prefix}tempmute @user 1m, ${prefix}unmute @user, ${prefix}addrole <role>, ${prefix}removerole <role>`)
  .addField(`Info`, `${prefix}serverinfo, ${prefix}botinfo`)
  .addField(`Games`, `${prefix}hangman, ${prefix}ttt <@user>`)
  .addField(`Announcements`, `${prefix}announce #channel <text>`)
  .addField(`Other`, `${prefix}cat, ${prefix}embed <colour (or hex code)> <text>, ${prefix}choose <option1>, <option 2>,... etc`);

  message.channel.send(eHelp);

}

module.exports.help = {
  name: "help"
}
