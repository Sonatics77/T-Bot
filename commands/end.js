const Discord = require("discord.js");

module.exports.run = async (Bot, message, args) => {



    if(message.member.hasPermission("ADMINISTRATOR")) {
      client.destroy()
    }
