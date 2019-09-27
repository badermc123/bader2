  message.channel.send(`تَم تغيير الليسينينق الى   ${argresult}`)
  } else
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, httpswww.twitch.tvpaaaaaartly);
      message.channel.send(`تم تغييرك حالتك بالتويتش الى   ${argresult}`)
  }
  if (message.content.startsWith(adminprefix + 'sn')) {
  client.user.setUsername(argresult).then
      message.channel.send(`جاري تغيير الأسم لـ ..${argresult} `)
} else
if (message.content.startsWith(adminprefix + 'sa')) {
  client.user.setAvatar(argresult);
    message.channel.send(`جاري تغيير الأفتار...  `);
}
});

console.log(BOT ONLINE);

});
client.on('ready', () = {
    console.log(`Logged as ${client.user.tag}`)
})
const lol =
[
'Wellcome To Viólinnotesnotes...',
'Wellcome To Viólinnotesnotes...',
'welcome to Viólin SERVER.. wilted_roseblack_heart',
'welcome to Viólin SERVER.. wilted_roseblack_heart',
'Bienvenue à Viólin zzzmusical_keyboard',
'Bienvenue à Viólin zzzmusical_keyboard',
'Welcome To Viólin  heart',
'Welcome To Viólin  heart',
'Welcome To Viólin...frowning heart ',
'Welcome To Viólin...frowning heart ',
'welcome to Viólin SERVER.. wilted_roseblack_heart',
'Wellcome To Viólinnotesnotes...',
'Welcome To Viólin  heart',
'welcome to Viólin SERVER.. wilted_roseblack_heart'
]
client.on('guildMemberAdd', member = {
const codes = member.guild.channels.get(621423241608822804);
if(!codes) return;
if(codes) {
    setTimeout(() = codes.send(`${lol[Math.floor(Math.random()  lol.length)]} ${member}`), 3000)       
}
});

client.login(process.env.BOT_TOKEN);
