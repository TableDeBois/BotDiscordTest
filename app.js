const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});
const game = require('./game/game.js');


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
    let jeu = new game(msg.member.nickname);
    msg.channel.send(`Le joueur est bien :  ${jeu.showPlayer()}`);
  }

  if(msg.content === '!jeu'){
    msg.channel.send(msg.member.nickname + ' est en train de jouer');
    let jeu = new game(msg.member.nickname);
    msg.channel.send(`test de la commande : test of msg in class game`);
    jeu.testCommand(client)
  }

});


client.login('token');
