let config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 800,
    scene: [Puzzle]
}

let game = new Phaser.game(config);

let borderUISize = game.config.height/15;
let borderPadding = borderUISize/3;
let centerX = game.config.width/2;
let widthSpacer = game.config.width/5;
let halfHeight = game.config.height/2;
let cursors = null;
let keyLEFT, keyRIGHT;