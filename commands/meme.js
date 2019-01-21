const Discord = require("discord.js");
const snekfetch = require("snekfetch");
const api = "https://api.imgflip.com/get_memes";

module.exports.run = async (Bot, message, args, prefix) => {
  snekfetch.get(api).then(r => {
    var mbody = r.body.find(post => post.id == "1");
    console.log(mbody);

    //message.channel.send("**Cat** ***uwu***");
    message.channel.send(mbody);
  })
}

module.exports.help = {
  name: "meme"
}
