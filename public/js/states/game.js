//class constructor
(function () {

  var GRAVITY = 1945;

  var INITIAL_POSITION = [
    //player 1
    { x: 100, y: 100 },
    //payer 2
    { x: 600, y: 100 }
  ];

  var FLASH_MESSAGE_STYLE = {
      font: "65px Arial",
      fill: "#ff0044",
      align: "center"
    };

  var DEFAULT_FLASH_TIME = 3000; // ms

  var MATCH = {
      PRE : "PRE",
      IN_PROGRESS : "IN_PROGRESS",
      RESOLVED : "RESOLVED"
    };

  wrizzard_kick.Game = function(){

    this.player_1;
    this.player_2;
    this.input;
    this.match_state;

  };

  wrizzard_kick.Game.FLOOR_Y = 400;

  wrizzard_kick.Game.prototype.create = function(){

    this.match_state = MATCH.IN_PROGRESS;
    this.game.add.tileSprite(0,0,wrizzard_kick.ASSETS.IMAGE.BG.width,wrizzard_kick.ASSETS.IMAGE.BG.height, wrizzard_kick.ASSETS.IMAGE.BG.name);

    this.player_1 = new wrizzard_kick.Player( this.game, 0 );
    this.player_2 = new wrizzard_kick.Player( this.game, 1 );
    this.game.add.existing(this.player_1);
    this.game.add.existing(this.player_2);

    this.player_1.x = INITIAL_POSITION[0].x;
    this.player_1.y = INITIAL_POSITION[0].y;
    this.player_2.x = INITIAL_POSITION[1].x;
    this.player_2.y = INITIAL_POSITION[1].y;

    // initialize input handler
     this.input = new wrizzard_kick.GameInput(this);
  };

  wrizzard_kick.Game.prototype.update = function(){

    if( this.player_1.x < this.player_2.x ){
      //player 1 is on the left side
      this.player_1.facing = wrizzard_kick.Player.FACING.RIGHT;
      this.player_2.facing = wrizzard_kick.Player.FACING.LEFT;
    } else {
      //player 1 is on right side
      this.player_1.facing = wrizzard_kick.Player.FACING.LEFT;
      this.player_2.facing = wrizzard_kick.Player.FACING.RIGHT;
    }

    // for both players
    [this.player_1, this.player_2].forEach(function(player){

     // touching land or falling
     if(player.body.y > wrizzard_kick.Game.FLOOR_Y){
       player.body.y = wrizzard_kick.Game.FLOOR_Y;
       player.body.velocity.y = 0;
       player.body.acceleration.y = 0;
     }else{
       player.body.acceleration.y = GRAVITY;
     }

   });

   // update physics
    this.game.physics.arcade.collide(this.player_1, this.player_2, players_collide, should_players_collide, this);

    };

  function players_collide(player_1, player_2){
     // check if both are diving
     if(player_1.is_diving && player_2.is_diving){
       // higher player wins
       if( player_1.body.y < player_2.body.y ){
         this.resolve_match(player_1, player_2);
         player_1.victory();
         player_2.defeat();
       }else{
         this.resolve_match(player_2, player_1);
         player_1.defeat();
         player_2.victory();
       }
     } else { // only one player is diving
       // the player diving wins
       if(player_1.is_diving){
         this.resolve_match(player_1, player_2);
       } else { // player 2 is diving
         this.resolve_match(player_2, player_1);
       }
     }

   }

   function should_players_collide(player_1, player_2){
     return this.match_state == MATCH.IN_PROGRESS &&
       [player_1, player_2].some(function(player){
         return player.is_diving;
       });
   }

   wrizzard_kick.Game.prototype.resolve_match = function(victor, loser){
     victor.victory();
     loser.defeat();
     this.match_state = MATCH.RESOLVED;

    this.flash(victor.name + ' wins!!!', this.enable_restart_game.bind(this));
   };

   wrizzard_kick.Game.prototype.flash = function(message, cb){

      var text = this.game.add.text(0, 0, message, FLASH_MESSAGE_STYLE);
      text.x = this.game.world.centerX - text.width/2;

      setTimeout(function(){
        text.destroy();
        if(cb) cb();
      }, DEFAULT_FLASH_TIME);
    };

    wrizzard_kick.Game.prototype.enable_restart_game = function(){
      this.flash('press [enter] to play again');

    };

  wrizzard_kick.Game.prototype.shutdown = function(){

  };

  wrizzard_kick.Game.prototype.continue = function(){

  };
}());