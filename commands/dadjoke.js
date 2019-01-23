const Discord = require("discord.js");
const givemeaJoke = require('give-me-a-joke');

module.exports.run = async (Bot, message, args, prefix) => {
  givemeaJoke.getRandomDadJoke(function(joke) {
   message.channel.send(joke);
 });
}


module.exports.help = {
  name: "dadjoke"
}
