const Discord = require("discord.js");
var randomWord = require('random-words');

module.exports.run = async (Bot, message, args) => {
  let hword = (randomWord());
  message.channel.send(hword);
  var hsword = [];
  for (var i = 0; i < hword.length; i++) {
    hsword.push("██");
  }
  message.channel.send(hsword.join(" "));

  while(hsword.includes("██")){
    const msgs = await message.channel.awaitMessages(msg => msg.content.includes("hm"), {maxMatches: 1});
    if(! msgs){
      return message.channel.send("Send a valid response");
    } else {
      message.channel.send(`${msgs.map(msg => msg.content)}`);
      var awaitR = `${msgs.map(msg => msg.content)}`
      var hletter = awaitR.slice(3).trim();
      message.channel.send(hletter);
      if (hword.includes(hletter)){
        var indices = [];
        for(var i2=0; i2<hword.length;i2++) {
        if (hword[i2] == hletter) indices.push(i2);
        }
        for(var i3=0; i3<indices.length; i3++) {
          hsword[indices[i3]] = hletter;
        }
        message.channel.send(hsword.join(" "));
      }
    }
  }

}

module.exports.help = {
  name: "test"
}

//  for (var i = 0; i < hword.length; i++) {
//    hsword.push("_");
//  }
