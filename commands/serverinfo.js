const Discord = require("discord.js");

module.exports.run = async (Bot, message, args, prefix) => {


      let sicon = message.guild.iconURL;
      let serverembed =  new Discord.RichEmbed()
      .setDescription("Server Information")
      .setColor("42d9f4")
      .setThumbnail(sicon)
      .addField("Server Name", message.guild.name)
      .addField("Created On", message.guild.createdAt)
      .addField("You Joined", message.member.joinedAt)
      .addField("Total Members", message.guild.memberCount)

      return message.channel.send(serverembed);

    }


module.exports.help = {
  name: "serverinfo"
}
