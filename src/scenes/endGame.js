class endGame extends Phaser.Scene{
    constructor(){
        super('endGame');
    }
    create(){
        //menu text configuration
        let menuConfig = {
            fontFamily: 'Courier', 
            fontSize: '28px', 
            backgroundColor: '#F3B141', 
            color: '#843605', 
            align: 'right', 
            padding: {top: 5, bottom: 5,}, 
            fixedWidth: 0
            
        }
        //show menu text
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - 
        borderPadding, "YOU WIN\nThanks for Playing!", menuConfig).setOrigin(0.5);
        this.restart = this.time.delayedCall(5000, ()=> {
            this.scene.start('Start');
        })
    }
    update(){

    }
}