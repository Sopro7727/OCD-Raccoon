class Start extends Phaser.Scene{
    constructor(){
        console.log('bruh')
        super('Start')
    }
    create(){
        console.log('bruh')
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
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - 
        borderPadding, "Oscar: Critter Detective", menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, "Place Objects into the box so they all fit\nPress R to rotate", menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#000';
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, "Press Enter to Begin", menuConfig).setOrigin(0.5);
        keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        }
    update(){
        if(Phaser.Input.Keyboard.JustDown(keyENTER)){
            this.scene.start('Puzzle1')
        }    
    }
}