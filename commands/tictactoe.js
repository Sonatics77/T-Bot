const Discord = require("discord.js");

module.exports.run = async (Bot, message, args) => {

  let tArgs = message.content.trim().split(" ");
  let userA = message.author.id;
  let user2B = tArgs[1]
  let userB = user2B.slice(3,tArgs[1].length-1);
  console.log(userA);
  console.log(userB);
  let tChannel= message.guild.channels.find(channel => channel.id == message.channel.id);
  await tChannel.send(`Waiting for ${tArgs[1]}`);
  const msgs = await hChannel.awaitMessages(msg => msg.author.id == userB, {maxMatches: 1});
  await tChannel.send("works");


  }


  module.exports.help = {
    name: "ttt"
  }
