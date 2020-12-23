module.exports = class move{

  /**
   * 
   * @param {String} type 
   * @param {Number} power 
   * @param {Number} prec 
   */
  constructor(type,power,prec){
    this.type=type;
    this.power=power;
    this.prec=prec;
  }

  getType(){
    return move.type;
  }

  getPower(){
    return move.power;
  }

  getPrec(){
    return move.prec;
  }

}