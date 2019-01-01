const Discord = require("discord.js");

module.exports.run = async (Bot, message, args) => {
    let colourName = ["red", "orange", "yellow", "green", "blue", "purple", "black", "white"];
    let colourHex = ["#ff0000", "#ff6100", "#ffdd00", "#19ff00", "#0087ff", "#9400ff", "#000000", "#ffffff"];
    let eText = message.content.slice(7).split(" ");
    let emColour = `${eText.splice(0,2)}`;
    let eColour = `${emColour.slice(1)}`;
    let colourPos = colourName.indexOf(eColour);
    var eHex = 0
    if (colourPos == -1) {
      eHex = eColour;
    } else {
      eHex = colourHex[colourPos];
    };


    let responseEmbed = new Discord.RichEmbed()
    .setDescription(eText)
    .setColor(eHex);

  return message.channel.send(responseEmbed);

}


module.exports.help = {
  name: "embed"
}

//splits args by " ", first arg is colour (match to hexa) join other args with " "
