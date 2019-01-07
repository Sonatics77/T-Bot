const Discord = require("discord.js");
var randomWord = require('random-words');

module.exports.run = async (Bot, message, args) => {
  let hword = (randomWord());
  let hHang = ["__________________", "|/         |", "|            ", "|         ", "|   ", "|\\"];
  let hChannel= message.guild.channels.find(channel => channel.id == message.channel.id);
  hChannel.send(hword);
  hChannel.send(hHang);
  var hsword = [];
  let uletters = [];
  var dmsg = ""
  for (var i = 0; i < hword.length; i++) {
    hsword.push("██");
  }

//let send1Arr = [`Unknown: ${hsword.join(" ")}`,`Used: `];
  //await hChannel.send(send1Arr);
  //var lmsg = hChannel.lastMessageID;
  //var ldel = 0
  while(hsword.includes("██")){
    let send1Arr = [`Unknown: ${hsword.join(" ")}`,`Used: `];
      await hChannel.send(send1Arr);
      // send(drawfunction(how many wrong(AS ARRAY)))
      var lmsg = hChannel.lastMessageID;
      //var ldel = 0
    const msgs = await hChannel.awaitMessages(msg => msg.content.includes("hm"), {maxMatches: 1});
    //awaits for response "hm letter"
    let l1msg = hChannel.lastMessageID;
    console.log(l1msg);
    console.log(lmsg);
    hChannel.fetchMessage(l1msg).then(async dl1msg => {
       await dl1msg.delete();

    })
    //deletes response
    // TRY SEDNING UPDATE AT TOP
    if(! msgs){
      return hChannel.send("Send a valid response");
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
//      if (ldel == 0) {
    //  \  lmsg = hChannel.lastMessageID;
    //  \  hChannel.fetchMessage(lmsg).then(async dlmsg => {
          //await hChannel.send(sendArr);
    //      dlmsg.delete();
          //ldel = 1
    //  \  })
  //    } else {
    //    hChannel.fetchMessage(lmsg).then(dlmsg => {
      //     dlmsg.delete();
        //   hChannel.send(sendArr);
        //})
      //}
      //edits last message to updated
    }
    hChannel.fetchMessage(lmsg).then(async dlmsg => {
      dlmsg.delete();
    })
  }
//catch(console.log(err));

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
 //|   /|\\
 //|   / \\
///|\\
