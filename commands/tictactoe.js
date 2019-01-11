const Discord = require("discord.js");

module.exports.run = async (Bot, message, args) => {

  var tBoard = ["3 :white_large_square: :white_large_square: :white_large_square:", "2 :white_large_square: :white_large_square: :white_large_square:", "1 :white_large_square: :white_large_square: :white_large_square:", "      A    B    C"];

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
  await tChannel.send(`Waiting for ${tArgs[1]} to reply with \"yes\"...`);
  const msgs = await tChannel.awaitMessages(msg => msg.author.id == userB, {maxMatches: 1});
  tChannel.send("Starting tic tac toe game...");
  var fin = 0;
  while(fin == 0){
    const msgs = await tChannel.awaitMessages(msg => msg.author.id == userB, {maxMatches: 1});
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
