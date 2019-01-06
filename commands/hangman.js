const Discord = require("discord.js");
var randomWord = require('random-words');

module.exports.run = async (Bot, message, args) => {
  let hword = (randomWord());
  message.channel.send(hword);
  var hsword = [];
  let uletters = [];
  var dmsg = ""
  for (var i = 0; i < hword.length; i++) {
    hsword.push("██");
  }
  let phEmbed = new Discord.RichEmbed()
  .setTitle("Test")
  .addField("unknown", `${hsword.join(" ")}`);

  message.channel.send(phEmbed);
  while(hsword.includes("██")){
    const msgs = await message.channel.awaitMessages(msg => msg.content.includes("hm"), {maxMatches: 1});
    if(! msgs){
      return message.channel.send("Send a valid response");
    } else {
      var awaitR = `${msgs.map(msg => msg.content)}`
      msgs.deleteAll();
      let lMsg = message.channel.lastMessageID;
      message.channel.send(lmsg);
      lmsg.delete();

      var hletter = awaitR.slice(3).trim();
      if (hword.includes(hletter)){
        var indices = [];
        uletters.push(hletter);
        for(var i2=0; i2<hword.length;i2++) {
        if (hword[i2] == hletter) indices.push(i2);
        }
        for(var i3=0; i3<indices.length; i3++) {
          hsword[indices[i3]] = hletter;
        }
        let sendArr = [`Unknown: ${hsword.join(" ")}`,`Used: ${uletters.join("")}`];
        message.channel.send(sendArr)//.then(d_msg => d_msg.delete(10000));
      }
    }
  }

  message.channel.send(hEmbed);

function hang1() {

}
}

module.exports.help = {
  name: "test"
}

//  for (var i = 0; i < hword.length; i++) {
//    hsword.push("_");
//  }


 ______
 |/   |
 |    O
 |   /|\
 |   / \
/|\
