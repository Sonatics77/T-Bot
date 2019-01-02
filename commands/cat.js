const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (Bot, message, args) => {
  let {body} = await superagent
  .get(`http://aws.random.cat/meow`);

  var randomColour = Math.floor(Math.random()*16777215).toString(16);

  let catembed = new Discord.RichEmbed()
  .setColour(randomColour)
  .setTitle("Cat uwu")
  .setImage(body.url);

  message.channel.send(catembed);

}

module.exports.help = {
  name: "cat"
}
