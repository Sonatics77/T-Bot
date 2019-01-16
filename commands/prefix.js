const Discord = require("discord.js");
const Fs = require("fs");

module.exports.run = async (Bot, message, args) => {

  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You do not have the permissions to use this command");
  if(!args[0]) return message.channel.send("Provide a new prefix")

  let prefixes = JSON.parse(Fs.readFileSync("./prefixes.json", "utf8"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  Fs.writeFile("./prefixes.json", JSON.stringify(prefixes),);

  return message.channel.send(`The new prefix for TaskieBot has been set to: ${args[0]}`);
  
}


module.exports.help = {
  name: "prefix"
}
