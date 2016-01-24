(function () {
  // private static variable
  var ANIMATIONS = {
    IDLE: {
      name: 'idle',
      frames: [0,1,2,3],
      fps: 5
    }
  };

  var FACING_FACTOR = {
    LEFT : -1,
    RIGHT : 1
  };

  function select_sprite_row(player_id){
    return function(frame_id){
      return frame_id + player_id*wrizzard_kick.ASSETS.SPRITESHEET.PLAYER.frames_per_row;
    };
  }

  // sprite class constructor
  wrizzard_kick.Player = function (game, id, name) {
    this.game = game;
    this.id   = id;
    this.name = name ? name : 'Player ' + (id + 1);
    this.facing; //direction that player is facing, state update this

    // super constructor call
    Phaser.Sprite.call(this, game, 0, 0, wrizzard_kick.ASSETS.SPRITESHEET.PLAYER.name);

    //set center registration point
    this.anchor = { x : 0.5, y : 0.5 };

    // set animation
    this.animations.add(ANIMATIONS.IDLE.name, ANIMATIONS.IDLE.frames.map(select_sprite_row(this.id)));

    // play animation
    this.animations.play(ANIMATIONS.IDLE.name, ANIMATIONS.IDLE.fps, true);
  };

  wrizzard_kick.Player.prototype = Object.create(Phaser.Sprite.prototype, {
    constructor: {
      value: wrizzard_kick.Player
    }
  });

  //public static variable
  wrizzard_kick.Player.FACING = {
    LEFT : 'LEFT',
    RIGHT : 'RIGHT'
  };

  //is invoked on every frame
  wrizzard_kick.Player.prototype.update = function() {
    //update facing
    this.scale.x = FACING_FACTOR[ this.facing ];
  };

  wrizzard_kick.Player.prototype.jump = function(){

  };

  wrizzard_kick.Player.prototype.dive = function(){

  };

  wrizzard_kick.Player.prototype.dive_stop = function(){

  };

  wrizzard_kick.Player.prototype.step_left = function(){
    console.log( 'stepping left' );
  };

  wrizzard_kick.Player.prototype.step_right = function(){

  };

  wrizzard_kick.Player.prototype.stop = function(){

  };

})();