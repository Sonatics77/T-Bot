const Discord = require("discord.js");

module.exports.run = async (Bot, message, args) => {

  let tArgs = message.content.trim().split(" ");
  let userA = message.author;
  let userB = tArgs[1];
  console.log(userA);
  console.log(userB);
  
  }


  module.exports.help = {
    name: "ttt"
  }
