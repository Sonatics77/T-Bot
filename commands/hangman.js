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

let send1Arr = [`Unknown: ${hsword.join(" ")}`,`Used: `];
  await message.channel.send(send1Arr);
  while(hsword.includes("██")){
    const msgs = await message.channel.awaitMessages(msg => msg.content.includes("hm"), {maxMatches: 1});
    //awaits for response "hm letter"
    var l1msg = message.channel.lastMessageID;
    message.channel.fetchMessage(l1msg).then(dlmsg => {
      dlmsg.delete();
    })
    //deletes response
    if(! msgs){
      return message.channel.send("Send a valid response");
      //ends if invalid response
    } else {
      var awaitR = `${msgs.map(msg => msg.content)}`
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

      } //else {

      //}
      let sendArr = [`Unknown: ${hsword.join(" ")}`,`Used: ${uletters.join("")}`];
      var lmsg = message.channel.lastMessageID;
      message.channel.send(lmsg);
      message.channel.fetchMessage(lmsg).then(dlmsg => {
        dlmsg.delete();
        message.channel.send(sendArr);
      })
      //edits last message to updated

    }
  }


function hang1() {

}
}

module.exports.help = {
  name: "test"
}

//  for (var i = 0; i < hword.length; i++) {
//    hsword.push("_");
//  }


 //______
// |/   |
 //|    O
 //|   /|\
 //|   / \
///|\
