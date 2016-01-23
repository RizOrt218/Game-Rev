(function () {
  // private static variable
  var ANIMATION = {
    IDLE: {
      name: 'idle',
      frames: [0,1,2,3],
      fps: 5
    }
  };

  // sprite class constructor

  wrizzard_kick.Player = function (game, id, name) {
    this.game = game;
    this.id   = id;
    this.name = name ? name : 'Player ' + (id + 1);

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

})();