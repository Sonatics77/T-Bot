const Discord = require("discord.js");
var randomWord = require('random-words');

module.exports.run = async (Bot, message, args) => {
  let hword = (randomWord());
  message.channel.send(hword);
  var hsword = ["","","","","","","","","","","","","","",""];
  for (var i = 0; i < hword.length; i++) {
      hsword[i] = "_";
    }
  message.channel.send(hword.length);
  message.channel.send(hsword.join(" "));
  const msgs = await message.channel.awaitMessages(msg => msg.content.includes("hm"), {maxMatches: 1});
  if(! msgs){
    return message.channel.send("Send a valid response");
  } else {
    message.channel.send(`${msgs.map(msg => msg.content)}`);
    var hletter = message.content.slice(3).trim();
    if (hword.includes(hletter)){
      var indices = [];
      for(var i2=0; i2<hword.length;i2++) {
      if (hword[i2] == hletter) indices.push(i2);
      }
      for(var i3=0; i3<indices.length; i3++) {
        hsword[indices[i3]] = hletter;
      }
      message.channel.send(hsowrd.join(" "));
    }
  }

}

module.exports.help = {
  name: "test"
}

//  for (var i = 0; i < hword.length; i++) {
//    hsword.push("_");
//  }
