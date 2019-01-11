const Token = process.env.token;
const Discord = require("discord.js");
const Fs = require("fs");
const Bot = new Discord.Client({disableEveryone: true});
Bot.commands = new Discord.Collection();



Fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    Bot.commands.set(props.help.name, props);
  });

});



Bot.on("ready", async () => {
  console.log(`${Bot.user.username} is online!`)
  Bot.user.setActivity("On Roulette", {type: "GAMBLING"});
});

Bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = "t.";
  console.log(message.content.slice(prefix.length));
  if(message.content.slice(prefix.length) == prefix){
  let messageArray = message.content.split(" ");
  console.lod(messageArray);
  let cmd = messageArray[0];
  console.lod(cmd);
  let args = messageArray.slice(2);


  let commandfile = Bot.commands.get(cmd.slice(prefix.length));
  console.log(commandfile);
  if(commandfile) commandfile.run(Bot,message,args);
}
});



//integrate with ubb: when item is bought give user a permissions role named: activate item then get them to activate the item by typing t.use "item"
//and tBot checks if they have role activate item and if they do give them the role they bought and remove the role activate item from them





Bot.login(Token);
