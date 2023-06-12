const config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 800,
    backgroundColor: "rgb(25,25,112)",
    scene: [Start, Puzzle1, Puzzle2, endGame]
}

const game = new Phaser.Game(config);
let borderUISize = game.config.height/15;
let borderPadding = borderUISize/3;
let centerX = game.config.width/2;
let widthSpacer = game.config.width/5;
let halfHeight = game.config.height/2;
let cursors = null;
let keyENTER, keyR;
let over1 = false;
let over2 = false;
let over3 = false;
let over4 = false;
let over5 = false;
let gameWin = false;
let gameMoves;
let moves = null;
let music = null;
