const Discord = require("discord.js");
var rn = require('random-number');


module.exports.run = async (Bot, message, args) => {
  var row3 = [":three:",":white_large_square:",":white_large_square:",":white_large_square:"];
  var row2 = [":two:",":white_large_square:",":white_large_square:",":white_large_square:"];
  var row1 = [":one:",":white_large_square:",":white_large_square:",":white_large_square:"];
  var bRow3 = row3.join(" ");
  var bRow2 = row2.join(" ");
  var bRow1 = row1.join(" ");
  var tBoard = [bRow3,bRow2,bRow1,":black_large_square: :regional_indicator_a: :regional_indicator_b: :regional_indicator_c:"];
  var options = {
    min:  0
  , max:  1
  , integer: true
  }
  var xORo = rn(options);
  var tUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(! tUser) return message.channel.send("Can't find user!");
  var tArgs = message.content.trim().split(" ");
  var userA = message.author.id;
  var user2B = tArgs[1]
  var userB = user2B.slice(2,tArgs[1].length-1);
  console.log(userA);
  console.log(userB);
  var tChannel= message.guild.channels.find(channel => channel.id == message.channel.id);
  tChannel.send(tBoard);
  var boardID = tChannel.lastMessageID; //boardID
  console.log(boardID);
  await tChannel.send(`Waiting for ${tArgs[1]} to reply with \"yes\"...`);
  const msgs = await tChannel.awaitMessages(msg => msg.author.id == userB, {maxMatches: 1});
  tChannel.send("Starting tic tac toe game...");
  if(xORo == 0){
    xORo = userA
    await tChannel.send(`${message.author} is starting as :x: !`);
  } else {
    xORo = userB
    await tChannel.send(`${tArgs[1]} is starting as :o: !`);
  }
  tChannel.fetchMessage(boardID).then(async emsg => {
    await emsg.edit("test");
  })
  var fin = 0;
  while(fin == 0){

    const msgs = await tChannel.awaitMessages(msg => msg.author.id == xORo, {maxMatches: 1});
    tChannel.send("works");
    console.log(xORo);
    var awaitR = `${msgs.map(msg => msg.content)}`
  }
  }


  module.exports.help = {
    name: "ttt"
  }
/*
  :white_large_square: :white_large_square: :white_large_square:
  :white_large_square: :white_large_square: :white_large_square:
  :white_large_square: :white_large_square: :white_large_square:
  :x: :o:

*/
