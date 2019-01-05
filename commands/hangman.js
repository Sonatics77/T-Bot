const Discord = require("discord.js");
var randomWord = require('random-words');

module.exports.run = async (Bot, message, args) => {
  let hword = (randomWord({min: 7, max: 15}));
  message.channel.send(hword);
  var i;
  var hsword = [];
  for (i = 0; i < hword.length+1; i++) {
    hsword.push("_");
  }
  const msgs = await message.channel.awaitMessages(msg => msg.content.includes("t.hm"), {maxMatches: 1});
  if(! msgs){
    return message.channel.send("Send a valid response");
  } else {
    message.channel.send(`${msgs.map(msg => msg.content)}`);
    var hletter = msg.content.slice(5).trim();
    if (hword.includes(hletter)){
      
    }
  }

}

module.exports.help = {
  name: "test"
}
