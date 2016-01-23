(function () {
  // private static variable
  var ANIMATION = {
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

  // sprite class constructor
  wrizzard_kick.Player = function (game, id, name) {
    this.game = game;
    this.id   = id;
    this.name = name ? name : 'Player ' + (id + 1);
    this.facing; //direction that player is facing, state update this

    // super constructor
    //
    Phaser.Sprite.call(this, game, 0, 0, wrizzard_kick.ASSETS.SPRITESHEET.PLAYER.name);

      // set animation
    this.animations.add(ANIMATION.IDLE.name, ANIMATION.IDLE.frames);

    // play animation
    this.animations.play(ANIMATION.IDLE.name, ANIMATION.IDLE.fps, true);
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
  }

  //is invoked on every frame
  wrizzard_kick.Player.prototype.update = function() {

    //update facing
    this.scale.x = FACING_FACTOR[ this.facing ];
  }
})();