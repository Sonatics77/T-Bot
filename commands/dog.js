const Discord = require("discord.js");
const snekfetch = require("snekfetch");
const api = "https://random.dog/woof.json"

module.exports.run = async (Bot, message, args) => {
  snekfetch.get(api).then(r => {
    let dogbody = r.body
    let fulldog = ["**Doggo** ***:3***", dogbody];

    message.channel.send(fulldog);
  })
}

module.exports.help = {
  name: "doggo"
}
