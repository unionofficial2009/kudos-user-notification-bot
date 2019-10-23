const Discord = require("discord.js");
const bot = new Discord.Client();
const botconfig = require("./botconfig.json");
const superagent = require("superagent");

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity("type <help for list of commands", {type: "WATCHING"});
});

//bot.on('guildMemberAdd', member => {
//   let bicon2 = bot.user.displayAvatarURL;  
//   let botembed = new Discord.RichEmbed()
//        .setDescription("Hello maam/sir welcome to UNION.")
//        .addField("Instructions", "Please proceed to **#welcome** channel in the **UNION HEADQUATERS** discord server. Kindly read and follow the rules/instructions in the **#welcome** channel to access the channels for specific game.")
//        .addField("Need Help?", "Any problem, please DM **@UNION President @UNION Vice President @UNION Officers @UNION Human Resources**.")
//        .setColor("#15f153")
//        .setTimestamp()
//        .setFooter("UNION User Notifications",bicon2);
//
//   
//   member.send(botembed);
//});


bot.on('guildMemberUpdate', (oldMember, newMember) => {
  
  let newroles = newMember.roles;
  let oldroles = oldMember.roles;
  
  let diffroles = newroles.filter(item => !oldroles.some(other => item.id === other.id));
  
  let newaddedrole = diffroles.map(r=> `${r.name}`);
  
  if(newaddedrole=="Verified"){
     let bicon2 = bot.user.displayAvatarURL;  
     let botembed = new Discord.RichEmbed()
        .setDescription("Hello maam/sir welcome to KUDOS Community.")
        .addField("Instructions", "Please proceed to <#431181931477204992> channel in the **KUDOS HEADQUARTERS** discord server. Kindly read and follow the instructions in the <#431181931477204992> channel to access the channels for specific game.")
        .addField("Need Help?", "Any problem, please DM **@KUDOS President @KUDOS Vice President @KUDOS Officers @KUDOS Human Resources @KUDOS Emissery**.")
        .setColor("#15f153")
        .setTimestamp()
        .setFooter("KUDOS User Notification BOT",bicon2);
   
   newMember.send(botembed);
  } else if(newaddedrole=="Lumia Saga Player"){
     let bicon2 = bot.user.displayAvatarURL;  
     let botembed = new Discord.RichEmbed()
        .setDescription("Hello maam/sir welcome to KUDOS Community.")
        .addField("Instructions", "Please proceed to <#636558059052859402> channel in the **KUDOS HEADQUARTERS** discord server. Kindly read and follow the instructions in the <#636558059052859402> channel to access the channels for specific game.")
        .addField("Need Help?", "Any problem, please DM ** @KUDOS President @KUDOS Vice President @KUDOS Officers @KUDOS Human Resources @KUDOS Emissery**.")
        .setColor("#15f153")
        .setTimestamp()
        .setFooter("KUDOS User Notification BOT",bicon2);
   
    newMember.send(botembed);
    
 } else if(newaddedrole=="Maple Story Player"){
    
     let bicon2 = bot.user.displayAvatarURL;  
     let botembed = new Discord.RichEmbed()
        .setDescription("Hello maam/sir welcome to KUDOS Community.")
        .addField("Instructions", "Please proceed to <#636566490023198720> channel in the **KUDOS HEADQUARTERS** discord server. Kindly read and follow the instructions in the <#636566490023198720> channel to access the channels for specific game.")
        .addField("Need Help?", "Any problem, please DM ** @KUDOS President @KUDOS Vice President @KUDOS Officers @KUDOS Human Resources @KUDOS Emissery**.")
        .setColor("#15f153")
        .setTimestamp()
        .setFooter("KUDOS User Notification BOT",bicon2);
   
    newMember.send(botembed);   
  
   } else if(newaddedrole=="TM - Player"){
    
    let bicon2 = bot.user.displayAvatarURL;  
    let botembed = new Discord.RichEmbed()
        .setDescription("Hello maam/sir welcome to UNION.")
        .addField("Instructions", "Please proceed to <#494872674036613120> channel in the **UNION HEADQUATERS** discord server. Kindly read and follow the instructions in the <#494872674036613120> channel to access the channels for **Talion**.")
        .addField("Need Help?", "Any problem, please DM **@UNION President @UNION Vice President @UNION Officers @UNION Human Resources @TM - Leader @TM - Deputy @TM - Elite**.")
        .setColor("#15f153")
        .setTimestamp()
        .setFooter("KUDOS User Notification BOT",bicon2);
   
    newMember.send(botembed);   
      
  } else if(newaddedrole=="Lumia Saga Visitor"){
    
    let bicon2 = bot.user.displayAvatarURL;  
    let botembed = new Discord.RichEmbed()
        .setDescription("Hello maam/sir welcome to KUDOS Community.")
        .addField("Instructions", "Please proceed to <#636561405641883648> channel in the **KUDOS HEADQUATERS** discord server. Kindly tag the following : **@KUDOS Officers @KUDOS Human Resources** in the <#636561405641883648>.")
        .addField("Need Help?", "Any problem, please DM **@Lumia Saga Leader @Lumia Saga ViceLeader @Lumia Saga Elites @KUDOS Human Resources @KUDOS Officers @KUDOS Emissary **.")
        .setColor("#15f153")
        .setTimestamp()
        .setFooter("KUDOS User Notification BOT",bicon2);
   
    newMember.send(botembed); 
    
     let guildChannels = newMember.guild.channels;
     guildChannels.find('name', 'kudos-visiting-area')
     .send(`Hey <@${newMember.user.id}>, Welcome to **KUDOS Visiting Area** :tada::hugging: ! <@&636556433848270848> <@&633505803340611594> <@&636556433852334100> <@&633297396897546312> <@&633298187695947796> <@&636571445765472276>`)
        .then(msg => {
            // do something else if you want
        })
        .catch(console.error)   
   
} else if(newaddedrole=="Maple Story Visitor"){
    
    let bicon2 = bot.user.displayAvatarURL;  
    let botembed = new Discord.RichEmbed()
        .setDescription("Hello maam/sir welcome to KUDOS Community.")
        .addField("Instructions", "Please proceed to <#636561405641883648> channel in the **KUDOS HEADQUATERS** discord server. Kindly tag the following : **@KUDOS Officers @KUDOS Human Resources** in the <#636561405641883648>.")
        .addField("Need Help?", "Any problem, please DM **@Maple Story Leader @Maple Story ViceLeader  @Maple Story Elites @KUDOS Officers @KUDOS Human Resources @KUDOS Emissary **.")
        .setColor("#15f153")
        .setTimestamp()
        .setFooter("KUDOS User Notification BOT",bicon2);
   
    newMember.send(botembed); 
    
     let guildChannels = newMember.guild.channels;
     guildChannels.find('name', 'kudos-visiting-area')
     .send(`Hey <@${newMember.user.id}>, Welcome to **KUDOS Visiting Area** :tada::hugging: ! <@&636556433902796810> <@&636557680009543680> <@&636562621814013982> <@&633297396897546312> <@&633298187695947796> <@&636571445765472276>`)
        .then(msg => {
            // do something else if you want
        })
        .catch(console.error)    
    
  } else if(newaddedrole=="LM - Visitor"){
    
    let bicon2 = bot.user.displayAvatarURL;  
    let botembed = new Discord.RichEmbed()
        .setDescription("Hello maam/sir welcome to UNION.")
        .addField("Instructions", "Please proceed to <#532174960211263498> channel in the **UNION HEADQUATERS** discord server. Kindly tag the following : **@LM - Leader @LM - Deputy  @LM - Elite @UNION Officers @UNION Human Resources** in the <#532174960211263498>.")
        .addField("Need Help?", "Any problem, please DM **@UNION President @UNION Vice President @UNION Officers @UNION Human Resources @LM - Leader @LM - Deputy  @LM - Elite**.")
        .setColor("#15f153")
        .setTimestamp()
        .setFooter("UNION User Notifications",bicon2);
   
    newMember.send(botembed); 
    
     let guildChannels = newMember.guild.channels;
     guildChannels.find('name', 'lm-visiting-area')
     .send(`Hey <@${newMember.user.id}>, Welcome to **UNION Laplace M Visiting Area** :tada::hugging: ! <@&636556433848270848> <@&633505803340611594> <@&636556433852334100> <@&633297396897546312> <@633298187695947796>`)
        .then(msg => {
            // do something else if you want
        })
        .catch(console.error)  
   
    
  } else if(newaddedrole=="Lumia Saga Member"){
    
    
     let guildChannels = newMember.guild.channels;
    
     guildChannels.find('name', 'lumia-saga-headquarters')
     .send(`Hey <@${newMember.user.id}>, Welcome to **KUDOS Lumia Saga Headquarters** :tada::hugging: ! <@&633505803331960862> `)
        .then(msg => {
            // do something else if you want
        })
        .catch(console.error)
 
    guildChannels.find('name', 'lumia-saga-headquarters')
     .send(`<@${newMember.user.id}> put your IGN here :arrow_right: <#636634875935457282>`)
        .then(msg => {
            // do something else if you want
        })
        .catch(console.error)
 
    guildChannels.find('name', 'lumia-saga-headquarters')
     .send(`<@${newMember.user.id}> Discord Attendance is a must, type **!present** here :arrow_right: <#636580983860232202> once a day`)
        .then(msg => {
            // do something else if you want
        })
        .catch(console.error)
 
  } else if(newaddedrole=="Maple Story Member"){
    
    
     let guildChannels = newMember.guild.channels;
    
     guildChannels.find('name', 'maple-story-headquarters')
     .send(`Hey <@${newMember.user.id}>, Welcome to **KUDOS Maple Story Headquarters** :tada::hugging: ! <@&636562622208147461> `)
        .then(msg => {
            // do something else if you want
        })
        .catch(console.error)
    
     guildChannels.find('name', 'maple-story-headquarters')
     .send(`<@${newMember.user.id}> put your IGN here :arrow_right: <#636634620787425291>`)
        .then(msg => {
            // do something else if you want
        })
        .catch(console.error)
    
    guildChannels.find('name', 'maple-story-headquarters')
     .send(`<@${newMember.user.id}> Discord Attendance is a must, type **&present** here :arrow_right: <#636585772627263508> once a day`)
        .then(msg => {
            // do something else if you want
        })
        .catch(console.error)    
    
  } else if(newaddedrole=="LM - Member"){
    
    
     let guildChannels = newMember.guild.channels;
    
     guildChannels.find('name', 'lm-headquarters')
     .send(`Hey <@${newMember.user.id}>, Welcome to **UNION Laplace M Headquarters** :tada::hugging: ! <@&532169564713254922> `)
        .then(msg => {
            // do something else if you want
        })
        .catch(console.error)
    
     guildChannels.find('name', 'lm-headquarters')
     .send(`<@${newMember.user.id}> put your IGN here :arrow_right: <#532178108250456064>`)
        .then(msg => {
            // do something else if you want
        })
        .catch(console.error)
    
    guildChannels.find('name', 'lm-headquarters')
     .send(`<@${newMember.user.id}> put your selfie here :arrow_right: <#546665178079690752>`)
        .then(msg => {
            // do something else if you want
        })
        .catch(console.error)
    
    guildChannels.find('name', 'lm-headquarters')
     .send(`<@${newMember.user.id}> Discord Attendance is a must, type ***present** here :arrow_right: <#532176620526632960> once a day`)
        .then(msg => {
            // do something else if you want
        })
        .catch(console.error)
    
  }
});  

  
bot.on("message", async message => {
  
  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args =  messageArray.slice(1); 
   
  
 if(cmd === `${prefix}help`){

   let ucommands = new Discord.RichEmbed()
   .setDescription("COMMAND LIST")
   .addField("1. Command List", "**<help**")
   .setColor("#ff9900");
   
   message.delete().catch(O_o=>{});
   message.channel.send(ucommands);
   
 }  
   
  
  
  
 
   
});   



bot.login(process.env.BOT_TOKEN);
