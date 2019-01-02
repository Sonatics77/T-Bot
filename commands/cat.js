const Discord = require("discord.js");
const snekfetch = require("snekfetch");
const api = "http://aws.random.cat/meow"

module.exports.run = async (Bot, message, args) => {
  snekfetch.get(api).then(r => {
    let catbody = r.body
    let fullcat = ["**Cat** ***uwu***", catbody];

    message.channel.send(fullcat);
  })
}

module.exports.help = {
  name: "cat"
}
