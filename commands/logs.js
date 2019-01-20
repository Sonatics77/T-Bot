const Token = process.env.token;
const Discord = require("discord.js");
const Config = require("./config.json");
const Fs = require("fs");
const Bot = new Discord.Client({disableEveryone: true});
Bot.commands = new Discord.Collection();

module.exports.run = async (Bot, message, args, prefix) => {
  var logChannel = message.guild.channels.find(channel => channel.name == "logs");
  if(!logChannel){
    message.guild.channel.createChannel("logs", "text");
    var logChannel = message.guild.channels.find(channel => channel.name == "logs");
  }
  Bot.on("MEMBER_KICK", async () => {
    var aKick = await message.guild.fetchAuditLogs({type:"MEMBER_KICK"}).then(audit => audit.entries.first())
    console.log(aKick);
    var aUser= aKick.entry.executor;
    console.log(aUser);
  });

}
  module.exports.help = {
    name: "log"
  }
