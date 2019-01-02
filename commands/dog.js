const Discord = require("discord.js");
const snekfetch = require("snekfetch");
const api = "https://random.dog/woof.json"

module.exports.run = async (Bot, message, args) => {
  snekfetch.get(api).then(r => {
    let dogbody = r.body

    message.channel.send("**Doggo** ***:3***");
    message.channel.send(dogbody);
  })
}

module.exports.help = {
  name: "doggo"
}
