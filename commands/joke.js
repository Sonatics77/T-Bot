const Discord = require("discord.js");
const snekfetch = require("snekfetch");
const api = "https://icanhazdadjoke.com/"

module.exports.run = async (Bot, message, args) => {
  snekfetch.get(api).then(r => {
    let jokebody = r.body

    message.channel.send(jokebody);
  })
}

module.exports.help = {
  name: "joke"
}
