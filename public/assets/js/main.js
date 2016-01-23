//create a single global variable

window.wrizzard_kick = {

  ASSETS : {},

  STAGE : {
    WIDTH : 900,
    HEIGHT : 600
  },

  STAGE_ID : 'game', //the div in index..html to render this game

  STATES : {
    BOOT : 'Boot',
    GAME : 'Game'
  }

};

//load Phaser on window load
window.onload = function(){
  wrizzard_kick.game = new Phaser.Game( wrizzard_kick.STAGE.WIDTH, wrizzard_kick.STAGE.HEIGHT, Phaser.AUTO, wrizzard_kick.STAGE_ID);
  wrizzard_kick.game.state.add( wrizzard_kick.STATES.BOOT, wrizzard_kick.Boot );
  wrizzard_kick.game.state.add( wrizzard_kick.STATES.GAME, wrizzard_kick.Game );
  wrizzard_kick.game.state.start( wrizzard_kick.STATES.BOOT );
};

