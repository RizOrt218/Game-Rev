//responsible for preloading assets
//and switching to the game state

//class constructor

wrizzard_kick.Boot = function(){

}
//auto load each assets by type
wrizzard_kick.Boot.prototype.preload = function(){
  Object.keys( wrizzard_kick.ASSETS ).forEach(function(type){
    for( var asset in wrizzard_kick.ASSETS[type] ){
      wrizzard_kick.game.load[ type.toLowerCase() ](
        wrizzard_kick.ASSETS[type][ asset ].name,
        wrizzard_kick.ASSETS[type][ asset ].path,
        wrizzard_kick.ASSETS[type][ asset ].width,
        wrizzard_kick.ASSETS[type][ asset ].height,
        wrizzard_kick.ASSETS[type][ asset ].frames
      );
    }
  });
}

wrizzard_kick.Boot.prototype.create = function(){
  //switch to game state
  this.state.start( wrizzard_kick.STATES.GAME );

}

