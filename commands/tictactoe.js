const Discord = require("discord.js");

module.exports.run = async (Bot, message, args) => {

  var tBoard = ["    |    |", "__|__|__", "    |    |", "__|__|__", "    |    |"];

  var tUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(! tUser) return message.channel.send("Can't find user!");
  var tArgs = message.content.trim().split(" ");
  var userA = message.author.id;
  var user2B = tArgs[1]
  var userB = user2B.slice(3,tArgs[1].length-1);
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
  |    |
  __|__|__
  |    |
  __|__|__
  |    |
*/
