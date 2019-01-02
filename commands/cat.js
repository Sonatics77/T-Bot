const Discord = require("discord.js");
const snekfetch = require("snekfetch");
const api = "http://aws.random.cat/meow"

module.exports.run = async (Bot, message, args) => {
  snekfetch.get(api).then(r => {
    let body = r.body

    message.channel.send(body);
  })
}

module.exports.help = {
  name: "cat"
}
