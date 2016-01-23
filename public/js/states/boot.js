//responsible for preloading assets
//and switching to the game state

//class constructor

wrizzard_kick.Boot = function(){

}

wrizzard_kick.Boot.prototype.preload = function(){

}

wrizzard_kick.Boot.prototype.create = function(){
  //switch to game state
  this.state.start( wrizzard_kick.STATES.GAME );

}

