const Discord = require("discord.js");

module.exports.run = async (Bot, message, args) => {
  setTimeout(function(){
    let embedText = message.content.slice(7);
    let responseEmbed = new Discord.RichEmbed()
    .setDescription(embedText)
    .setColor("#42f4b3");
  }, ms(60000));


  return message.channel.send(responseEmbed);

}


module.exports.help = {
  name: "embed"
}

//splits args by " ", first arg is colour (match to hexa) join other args with " "
