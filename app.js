const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'sale') {
    msg.channel.send('p***!');
  }
  if (msg.content === 'wsh') {
    msg.reply('mon sauce!');
  }
  if(msg.content === 'jouer'){
    msg.channel.send(msg.member.nickname + ' est en train de jouer');
    //let game = new game(msg.member.nickname);
    //game.showPlayer;
  }
});


client.login('token');