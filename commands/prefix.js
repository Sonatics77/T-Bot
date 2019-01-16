const Discord = require("discord.js");
const Fs = require("fs");

module.exports.run = async (Bot, message, args, prefix) => {
  var pArgs = message.content.split(" ");

  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You do not have the permissions to use this command");
  if(!pArgs[1]) return message.channel.send("Provide a new prefix")

  let prefixes = JSON.parse(Fs.readFileSync("./prefixes.json", "utf8"));

  prefixes[message.guild.id] = {
    prefixes: pArgs[1]
  };

  Fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

  return message.channel.send(`The new prefix for TaskieBot has been set to: ${pArgs[1]}`);

}


module.exports.help = {
  name: "prefix"
}
