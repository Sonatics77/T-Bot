const Discord = require("discord.js");

module.exports.run = async (Bot, message, args) => {

  let tArgs = message.content.trim().split(" ");
  let userA = message.author.id;
  let userB = tArgs[1].slice(4,tArgs[1].length-1);
  console.log(userA);
  console.log(userB);
  console.log(tArgs);

  }


  module.exports.help = {
    name: "ttt"
  }
