//class constructor
(function () {
  var INITIAL_POSITION = [
    //player 1
    { x: 100, y: 100 },
    //payer 2
    { x: 600, y: 100 }

  ]

  wrizzard_kick.Game = function(){

    this.player_1;
    this.player_2;

  };

  wrizzard_kick.Game.prototype.create = function(){

    this.player_1 = new wrizzard_kick.Player( this.game, 0 );
    this.player_2 = new wrizzard_kick.Player( this.game, 0 );
    this.game.add.existing(this.player_1);
    this.game.add.existing(this.player_2);

    this.player_1.x = INITIAL_POSITION[0].x;
    this.player_1.y = INITIAL_POSITION[0].y;
    this.player_2.x = INITIAL_POSITION[1].x;
    this.player_2.y = INITIAL_POSITION[1].y;

  };

  wrizzard_kick.Game.prototype.update = function(){

  };

  wrizzard_kick.Game.prototype.shutdown = function(){

  };
}());