
const Discord = require('discord.js');
const client = new Discord.Client();
const adminprefix = "B+";
const developers = ['476130473681092608'];

console.log("Paaaaartly");

client.on('ready', () => {
    console.log(`Logged as ${client.user.tag}`)
})


client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send(`**تم تغيير البلاينق الى   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**تَم تغيير الواتشينق الى   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**تَم تغيير الليسينينق الى   ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/paaaaaartly");
      message.channel.send(`تم تغييرك حالتك بالتويتش الى   **${argresult}**`)
  }
  if (message.content.startsWith(adminprefix + 'sn')) {
  client.user.setUsername(argresult).then
      message.channel.send(`جاري تغيير الأسم لـ ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'sa')) {
  client.user.setAvatar(argresult);
    message.channel.send(`**جاري تغيير الأفتار... :** `);
}
});

console.log("BOT ONLINE");

});
client.on('ready', () => {
    console.log(`Logged as ${client.user.tag}`)
})
const lol =
[
'**Wellcome To Viólin:notes::notes:...**',
'**Wellcome To Viólin:notes::notes:...**',
'**welcome to Viólin SERVER.. :wilted_rose::black_heart:**',
'**welcome to Viólin SERVER.. :wilted_rose::black_heart:**',
'**Bienvenue à Viólin :zzz::musical_keyboard:**',
'**Bienvenue à Viólin :zzz::musical_keyboard:**',
'**Welcome To Viólin  :heart:**',
'**Welcome To Viólin  :heart:**',
'**Welcome To Viólin...:frowning: :heart: **',
'**Welcome To Viólin...:frowning: :heart: **',
'**welcome to Viólin SERVER.. :wilted_rose::black_heart:**',
'***Wellcome To Viólin:notes::notes:...**',
'**Welcome To Viólin  :heart:**',
'**welcome to Viólin SERVER.. :wilted_rose::black_heart:**'
]
client.on('guildMemberAdd', member => {
const codes = member.guild.channels.get("621423241608822804");
if(!codes) return;
if(codes) {
    setTimeout(() => codes.send(`${lol[Math.floor(Math.random() * lol.length)]} ${member}`), 3000)       
}
});

client.login(process.env.BOT_TOKEN);
