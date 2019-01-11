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
  var uxORo = "";
  var tUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(! tUser) return message.channel.send("Can't find user!");
  var tArgs = message.content.trim().split(" ");
  var userA = message.author.id;
  var user2B = tArgs[1].split("!");
  var userB = user2B[1].slice(0,user2B[1].length-1);//user2B.slice(2,tArgs[1].length-1);
  console.log(userA);
  console.log(userB);
  var tChannel= message.guild.channels.find(channel => channel.id == message.channel.id);
  //console.log(boardID);
  await tChannel.send(`Waiting for ${tArgs[1]} to reply with \"yes\"...`);
  const msgs = await tChannel.awaitMessages(msg => msg.author.id == userB, {maxMatches: 1});
  tChannel.send("Starting tic tac toe game...");
  /*if(xORo == 1){
    uxORo = userA
    await tChannel.send(`${message.author} is starting as :x: !`);
  } else {
    uxORo = userB
    await tChannel.send(`${tArgs[1]} is starting as :o: !`);
  }*/
  await tChannel.send(tBoard);
  var boardID = tChannel.lastMessageID; //boardID

  //tChannel.fetchMessage(boardID).then(async emsg => {
  //  await emsg.edit("test");
  //;})
  var fin = 0;
  console.log(xORo);
  while(fin == 0){
    xORo = (xORo+1)-(xORo*2);//switches user
    if(xORo == 0){
      await tChannel.send(`${message.author}'s turn'`);
      var tdel = tChannel.lastMessageID;
    } else {
      await tChannel.send(`${tArgs[1]}'s turn`);
      var tdel = tChannel.lastMessageID;
    }//displays whose turn
    console.log(tdel);

    console.log(xORo);
    getuId();
    console.log(uxORo);
    const msgs = await tChannel.awaitMessages(msg => msg.author.id == uxORo, {maxMatches: 1});
    //tChannel.send("works");
    //console.log(xORo);
    var rdel = tChannel.lastMessageID;
    console.log(rdel);
    tChannel.fetchMessage(rdel).then(async rmsg => {
      await rmsg.delete();
    })
    var awaitR = `${msgs.map(msg => msg.content)}`
    var rLetter = awaitR.slice(0,1);
    var rNumber = awaitR.slice(1,2);
    if (xORo == 1) {
      tic("o");
    } else {
        tic("x");
    }
    //console.log(rLetter);
    //console.log(rNumber);
    updateBoard();
    tChannel.fetchMessage(boardID).then(async emsg => {
      await emsg.edit(tBoard);
    ;})
    tChannel.fetchMessage(tdel).then(async (tmsg) => {
      tmsg.delete();
    })

    }
    function tic(symbol) {
      if (rNumber == "1"){
        if (rLetter == "a" || rLetter == "A"){
          if (row1[1] == ":white_large_square:") {
            row1[1] = `:${symbol}:`;
          } else {
            return tChannel.send("Invalid input, game ended");
          }
        }
      }
      if (rNumber == "1"){
        if (rLetter == "b" || rLetter == "B"){
          if (row1[2] == ":white_large_square:") {
            row1[2] = `:${symbol}:`;
          } else {
            return tChannel.send("Invalid input, game ended");
          }
        }
      }
      if (rNumber == "1"){
        if (rLetter == "c" || rLetter == "C"){
          if (row1[3] == ":white_large_square:") {
            row1[3] = `:${symbol}:`;
          } else {
            return tChannel.send("Invalid input, game ended");
          }
        }
      }
      if (rNumber == "2"){
        if (rLetter == "a" || rLetter == "A"){
          if (row2[1] == ":white_large_square:") {
            row2[1] = `:${symbol}:`;
          } else {
            return tChannel.send("Invalid input, game ended");
          }
        }
      }
      if (rNumber == "2"){
        if (rLetter == "b" || rLetter == "B"){
          if (row2[2] == ":white_large_square:") {
            row2[2] = `:${symbol}:`;
          } else {
            return tChannel.send("Invalid input, game ended");
          }
        }
      }
      if (rNumber == "2"){
        if (rLetter == "c" || rLetter == "C"){
          if (row2[3] == ":white_large_square:") {
            row2[3] = `:${symbol}:`;
          } else {
            return tChannel.send("Invalid input, game ended");
          }
        }
      }
      if (rNumber == "3"){
        if (rLetter == "a" || rLetter == "A"){
          if (row3[1] == ":white_large_square:") {
            row3[1] = `:${symbol}:`;
          } else {
            return tChannel.send("Invalid input, game ended");
          }
        }
      }
      if (rNumber == "3"){
        if (rLetter == "b" || rLetter == "B"){
          if (row3[2] == ":white_large_square:") {
            row3[2] = `:${symbol}:`;
          } else {
            return tChannel.send("Invalid input, game ended");
          }
        }
      }
      if (rNumber == "3"){
        if (rLetter == "c" || rLetter == "C"){
          if (row3[3] == ":white_large_square:") {
            row3[3] = `:${symbol}:`;
          } else {
            return tChannel.send("Invalid input, game ended");
          }
        }
      }
    }
    function updateBoard() {
      bRow3 = row3.join(" ");
      bRow2 = row2.join(" ");
      bRow1 = row1.join(" ");
      tBoard = [bRow3,bRow2,bRow1,":black_large_square: :regional_indicator_a: :regional_indicator_b: :regional_indicator_c:"];
    }
    function getuId() {
      if(xORo == 0){
        uxORo = userA
      } else {
        uxORo = userB
      }
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
