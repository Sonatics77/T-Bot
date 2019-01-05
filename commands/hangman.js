const Discord = require("discord.js");
var randomWord = require('random-words');

module.exports.run = async (Bot, message, args) => {
  let hword = (randomWord({min: 7, max: 15}));
  const msgs = await new Discord.MessageCollector(message.channel, msg => msg.content.includes("t.hm"), {maxMatches: 1});
  if(! msgs){
    return message.channel.send("Send a valid response");
  } else {
    message.channel.send(msgs.collectedS);
  }

}

module.exports.help = {
  name: "test"
}
