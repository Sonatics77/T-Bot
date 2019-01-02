const Discord = require("discord.js");
const snekfetch = require("snekfetch");
const api = "http://aws.random.cat/meow"

module.exports.run = async (Bot, message, args) => {
  snekfetch.get(api).then(r => {
    let catbody = r.body
    
    message.channel.send("**Cat** ***uwu***");
    message.channel.send(catbody);
  })
}

module.exports.help = {
  name: "cat"
}
