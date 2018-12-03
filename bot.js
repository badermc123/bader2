
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

  client.on('ready', async () => {

      let ReBeL = ["Hiiiiبدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر iiiiiii","Looooبدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر ooool","frieenبدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر ds","badeeeeبدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر er","Kiiiiiiبدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر بدر iing","xDDDDDDDD"]

  setInterval(() => {

client.channels.get("491690814951522305").send(`${ReBeL[Math.floor(Math.random() *ReBeL.length)]}`);//لا تنسى تحط أيدي الروم

},40000);

});

const lol =
[
'**Wellcome To Urgent:notes::notes:...**',
'**Wellcome To Urgent:notes::notes:...**',
'**welcome to Urgent SERVER.. :wilted_rose::black_heart:**',
'**welcome to Urgent SERVER.. :wilted_rose::black_heart:**',
'**Bienvenue à Urgent :zzz::musical_keyboard:**',
'**Bienvenue à Urgent :zzz::musical_keyboard:**',
'**Welcome To Urgent  :heart:**',
'**Welcome To Urgent  :heart:**',
'**Welcome To Urgent...:frowning: :heart: **',
'**Welcome To Urgent...:frowning: :heart: **',
'**welcome to Urgent SERVER.. :wilted_rose::black_heart:**',
'***Wellcome To Urgent:notes::notes:...**',
'**Welcome To Urgent  :heart:**',
'**welcome to Urgent SERVER.. :wilted_rose::black_heart:**'
]
client.on('guildMemberAdd', member => {
const codes = member.guild.channels.get("51779061177699530");
if(!codes) return;
if(codes) {
    setTimeout(() => codes.send(`${lol[Math.floor(Math.random() * lol.length)]} ${member}`), 3000)       
}
});


client.login(process.env.BOT_TOKEN);
