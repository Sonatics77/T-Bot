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
  Bot.user.setActivity("Jungkook ♥ ♥ ♥", {type: "LISTENING"});
});

Bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  if(!prefixes[message.guild.id]) {
    prefixes[message.guild.id] = {
      prefixes: config.prefix
    };
  }

  let prefic = prefixes[message.guild.id].prefixes;
  //let prefix = "t.";
  if(message.content.slice(0,prefix.length).trim() == prefix){
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(2);


  let commandfile = Bot.commands.get(cmd.slice(prefix.length));
  console.log(commandfile);
  if(commandfile) commandfile.run(Bot,message,args);
}
});



//integrate with ubb: when item is bought give user a permissions role named: activate item then get them to activate the item by typing t.use "item"
//and tBot checks if they have role activate item and if they do give them the role they bought and remove the role activate item from them





Bot.login(Token);
