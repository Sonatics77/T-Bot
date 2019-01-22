const Token = process.env.token;
const Discord = require("discord.js");
const Config = require("./config.json");
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
  while(0==0){
  setTimeout(Jungkook,10000);
  setTimeout(Jimin,10000);
  setTimeout(V,10000);
  setTimeout(Suga,10000);
  setTimeout(RM,10000);
  setTimeout(Jin,10000);
  setTimeout(J-Hope,10000);
}

  function Jungkook () {
    Bot.user.setActivity("Jungkook ♥ ♥ ♥ ♥ ♥ ♥ ♥", {type: "LISTENING"});
  }
  function Jimin () {
    Bot.user.setActivity("Jimin ♥ ♥ ♥ ♥ ♥ ♥", {type: "LISTENING"});
  }
  function V () {
    Bot.user.setActivity("V ♥ ♥ ♥ ♥ ♥", {type: "LISTENING"});
  }
  function Suga () {
    Bot.user.setActivity("Suga ♥ ♥ ♥ ♥", {type: "LISTENING"});
  }
  function RM () {
    Bot.user.setActivity("RM ♥ ♥ ♥", {type: "LISTENING"});
  }
  function Jin () {
    Bot.user.setActivity("Jin ♥ ♥", {type: "LISTENING"});
  }
  function J-Hope () {
    Bot.user.setActivity("J-Hope ♥", {type: "LISTENING"});
  }
});

Bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefixes = JSON.parse(Fs.readFileSync("./prefixes.json", "utf8"));

  if(!prefixes[message.guild.id]) {
    prefixes[message.guild.id] = {
      prefixes: Config.prefix
    };
  }

  let prefix = prefixes[message.guild.id].prefixes;
  //console.log(prefix)
  //let prefix = "t.";
  if(message.content.slice(0,prefix.length).trim() == prefix){
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(2);


  let commandfile = Bot.commands.get(cmd.slice(prefix.length));
  console.log(commandfile);
  if(commandfile) commandfile.run(Bot,message,args, prefix);
}
});




//integrate with ubb: when item is bought give user a permissions role named: activate item then get them to activate the item by typing t.use "item"
//and tBot checks if they have role activate item and if they do give them the role they bought and remove the role activate item from them





Bot.login(Token);
