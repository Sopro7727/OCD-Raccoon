class Credits extends Phaser.Scene{
    constructor(){
        super('creditScene')
    }
    create(){
        //menu text configuration
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
        borderPadding, "Credits", menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, "Art: \n\nPhilip Choe\nSaja Abdoulmawla\n\nProgamming:\n\nNoah Walker\nElia Hawley", menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#000';
        this.restart = this.time.delayedCall(5000, ()=> {
            this.scene.start('Start');
        })
    }   
    update(){

    }
}