const Discord = require("discord.js");

module.exports.run = async (Bot, message, args, prefix)=> {
  //t.addrole @name Role
  let arUser = message.member
  if(! message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("You think you can fool me, you don't have permission to do that, nothing goes over my head, my reflexes are too fast, I would catch it");
  let rMember = message.guild.member(message.mentions.users.first() || message.guild.member.get(args[0]));
  if(! rMember) return message.reply("Couldn't find that user");
  let rrole = args.join(" ").slice(22);
  console.log(rrole);
  if(! rrole) return message.reply("Specify a role you silly nonce");
  let gRole = message.guild.roles.find(role => role.name === rrole);
  if(! gRole) return message.reply("Couldn't find that role");

  if(rMember.roles.has(gRole.id)) return message.reply("They already have that role you silly nonce");
  await(rMember.addRole(gRole.id));

  try{
    await rMember.send(`I don't know why ${arUser} gave you the role ${gRole.name}, but here it is` )
  }catch(e){
   message.channel.send(`Hey <@${rMember.id}>, keep your Dms open next time. I don't know why ${arUser} gave you the role: ${gRole.name}, but here it is`)
  }
}

module.exports.help = {
  name: "addrole"
}
