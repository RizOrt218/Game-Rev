/*
 * each asset is organized by type
 * each asset has struct
 *   {
 *     name : String
 *     path : String
 *     width : Integer @optional
 *     height : Integer @optional
 *     frames : Integer @optional
 *   }
 */

 wrizzard_kick.ASSETS = {

  SPRITESHEET : {
      PLAYER : {
      name : 'player',
      path : 'assets/graphics/players_100x96.png',
      width : 100,
      height : 96,
      frames : 18,
      frames_per_row : 9 //split spritesheet by player/row
    }
  }
 };