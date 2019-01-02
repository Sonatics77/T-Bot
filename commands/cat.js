const Discord = require("discord.js");
const snekfetch = require("snekfetch");
const api = "http://aws.random.cat/meow"

module.exports.run = async (Bot, message, args) => {
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  snekfetch.get(api).then(r => {
    let catbody = r.body

    let catembed = new Discord.RichEmbed()
    .setColor(randomColor)
    .setTitle("Cat uwu")
    .setDescription(catbody);

    message.channel.send(catembed);
  })
}

module.exports.help = {
  name: "cat"
}
