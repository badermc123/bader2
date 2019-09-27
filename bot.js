const Discord = require('discord.js');
const client = new Discord.Client();
let timer;
console.log("BOT ONLINE");
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
client.on('guildMemberAdd', member = {
const codes = member.guild.channels.get(621423241608822804);
if(!codes) return;
if(codes) {
    setTimeout(() = codes.send(`${lol[Math.floor(Math.random()  lol.length)]} ${member}`), 3000)       
}
});

client.login(process.env.BOT_TOKEN);
