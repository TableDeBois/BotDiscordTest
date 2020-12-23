const move = require('./game/monstres/moveSet/moves/move.js');
module.exports = class moveSet{

  /**
   * 
   * @param {move} move1 
   * @param {move} move2 
   * @param {move} move3 
   * @param {move} move4 
   */
  constructor(move1,move2,move3,move4){
    this.set=new Array(move1,move2,move3,move4);
  }

  giveSet(){
    return this.set;
  }

  /**
   * 
   * @param {number} indice 
   */
  getMoveByI(indice){
    return set[indice];
  }

}