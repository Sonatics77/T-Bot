const Discord = require("discord.js");

module.exports.run = async (Bot, message, args) => {
    let colourName = ["red", "orange", "yellow", "green", "blue", "purple", "black", "white"];
    let colourHex = ["#ff0000", "#ff6100", "#ffdd00", "#19ff00", "#0087ff", "#9400ff", "#000000", "#ffffff"];
    let embedText = message.content.slice(7).split(" ");
    let embedColour = embedText.splice(0,2);
    let asfgs = embedColour.substring(2, embedColour.length - 1);
    let colourPos = colourName.indexOf(asfgs.join());
    let embedHex = colourHex[colourPos];

    let responseEmbed = new Discord.RichEmbed()
    .setDescription(embedText)
    .setColor(embedHex);

    message.channel.send(embedColour);
    message.channel.send(colourPos);
    message.channel.send(asfgs.join());
    message.channel.send(embedText);


  return message.channel.send(embedHex);

}


module.exports.help = {
  name: "embed"
}

//splits args by " ", first arg is colour (match to hexa) join other args with " "
