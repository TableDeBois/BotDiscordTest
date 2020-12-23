module.exports =class game{
  
  #ennemi;

  /**
   * @param {String} player 
   */
  constructor(player){
    this.player = player;
  }

  startGame(){
    //todo...
  }

  endGame(){
    //todo...
  }

  testCommand(client){
    client.on('message',msg =>{
      if(msg.content === '!test'){
        msg.channel.send(msg.member.nickname + ' a utilisé la commande test');
      }
    })
  }

  showPlayer(){
    console.log('joueur qui a utilisé la commande : ' +this.player);
    return this.player;
  }

};
