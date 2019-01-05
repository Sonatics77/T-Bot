const Discord = require("discord.js");
var randomWord = require('random-words');

module.exports.run = async (Bot, message, args) => {
  message.channel.send(randomWord);
  })
}

module.exports.help = {
  name: "test"
}
