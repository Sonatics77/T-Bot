const Discord = require("discord.js");
const snekfetch = require("snekfetch");
const api = "https://icanhazdadjoke.com/"

module.exports.run = async (Bot, message, args) => {
  snekfetch.get(api).then(j => {
    let {body} = j.body

    message.channel.send(body);
  })
}

module.exports.help = {
  name: "joke"
}
