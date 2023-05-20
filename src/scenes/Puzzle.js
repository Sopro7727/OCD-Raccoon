class Puzzle extends Phaser.Scene {
    constructor() {
        super('playScene');
    }

    preload() {
        this.load.image('box', 'C:/assets/Cardboard_Box_Puzzle_Grid_png.png')        
    }

    create() {
        this.box = this.add.tileSprite(300, 0, 1000, 700, 'box').setOrigin(300, 0);
        
        this.add.rectangle(0, 0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(0, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0, 0);
    }
}