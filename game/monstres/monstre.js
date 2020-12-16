const moveSet = require ('./game/monstres/movesSet/moveSet.js');

module.exports = class monstre{

  /**
   * 
   * @param {Number} hp 
   * @param {Number} att 
   * @param {Number} attSpe 
   * @param {Number} def 
   * @param {Number} defspe 
   * @param {Number} speed 
   * @param {String} type 
   */
  constructor(hp,att,attSpe,def,defspe,speed,type,name){
    if(this.constructor === monstre){
      throw new TypeError('Abstract class "Monstre" cannot be instantiated directly');
    }
    this.hp=hp;
    this.att=att;
    this.attSpe=attSpe;
    this.def=def;
    this.defspe=defspe;
    this.speed=speed;
    this.type=type;
    this.name=name;
    this.IsDead=false;
  }

  gethp(){
    return this.hp;
  }

  /**
   * @param {Number} dommages 
   */
  removeHp(dommages){
    this.hp = this.hp-dommages;
  }

  getName(){
    return this.name
  }

}