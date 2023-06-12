class Start extends Phaser.Scene{
    constructor(){
        super('Start')
    }
    preload(){
        this.load.image('bg', './assets/titleScreen.png');
        this.load.audio('bgm', './assets/backgroundMusic.wav');
    }
    create(){
        let menuConfig = {
            fontFamily: 'Courier', 
            fontSize: '28px', 
            backgroundColor: '#F3B141', 
            color: '#843605', 
            align: 'center', 
            padding: {top: 5, bottom: 5,}, 
            fixedWidth: 0
        }
        //show menu text
        music = this.sound.add('bgm', {volume: 0.25})
        music.play();
        this.add.tileSprite(0,0,1000,800,'bg').setOrigin(0,0);
        /*this.add.text(game.config.width/2, game.config.height/2 - borderUISize - 
        borderPadding, "Oscar: Critter Detective", menuConfig).setOrigin(0.5);*/
        this.add.text(game.config.width/2, game.config.height/2+200, "Drag Objects with Mouse into the box so they all fit", menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#000';
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding+80, "Press Enter to Begin", menuConfig).setOrigin(0.5);
        keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        }
    update(){
        if(Phaser.Input.Keyboard.JustDown(keyENTER)){
            this.scene.start('Puzzle1')
        }    
    }
}