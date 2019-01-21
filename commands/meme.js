const Discord = require("discord.js");
const snekfetch = require("snekfetch");
const api = "https://api.imgflip.com/get_memes"

module.exports.run = async (Bot, message, args, prefix) => {
  snekfetch.get(api).then(r => {
    let mbody = r.body

    //message.channel.send("**Cat** ***uwu***");
    message.channel.send(mbody);
  })
}

module.exports.help = {
  name: "meme"
}
