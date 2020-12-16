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

  showPlayer(){
    console.log('joueur qui a utilisé la commande : ' +this.player);
    return this.player;
  }

};
