const Discord = require("discord.js");

module.exports.run = async (Bot, message, args, prefix) => {
  //var fChannel = message.guild.channels.find(channel => channel.id == message.channel.id);
  var fUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(! fUser) return fChannel.send("Can't find that user");
  var fTurnRand = Math.floor(Math.random() * 1);
  var p1Icon = message.author.displayAvatarURL
  var p2Icon = fUser.displayAvatarURL
  var p1Stat = ["100", "0"];
  var p1DiStat = [`Health: ${p1Stat[1]}`, `Shield: ${p1Stat[2]}`];
  var p2Stat = ["100", "0"];
  var p2DiStat = [`Health: ${p2Stat[1]}`, `Shield: ${p2Stat[2]}`];
  //stats board
  console.log("works");
  console.log(fUser);
  //console.log(fChannel);
  message.channel.send("test");
  var p1Board = new Discord.RichEmbed() //player1 embed
  .setTitle(`${message.author} vs ${fUser}`)
  .setColor(`#ef452b`)
  .setThumbnail(p1Icon)
  .addField(`${message.author}`, p1DiStat);
  var p2Board = new Discord.RichEmbed() //player2 embed
  .setTitle(`${message.author} vs ${fUser}`)
  .setColor(`#ef452b`)
  .setThumbnail(p2Icon)
  .addField(`${fUser}`, p2DiStat);
  fChannel.send(p1Board);
  fChannel.send(p2Board);

  var fin = 0;
  while (fin == 0) {
    getTurn();

  }
  function getTurn(rand) {
    if(rand == "0"){
      var fTurn = message.author;
    } else {
      var fTurn = fUser;
    }
  }
}

module.exports.help = {
  name:"fight"

}
