class Puzzle3 extends Phaser.Scene
{
    constructor()
    {
        super("puzzle3");
    }

    preload ()
    {
        this.load.image('toyGun', './assets/toy_gun.png');
        this.load.image('doll', './assets/baby_doll.png');
        this.load.image('pbottle', './assets/bottle.png');
        this.load.image('buttons', './assets/buttons.png');
        this.load.image('floss', './assets/floss.png');
        this.load.image('hanger', './assets/hanger.png');
        this.load.image('phone', './assets/phone.png');
        this.load.image('bag', './assets/plastic_bag.png');

        this.load.image('BLOCKED1', './assets/blackout_1.png');
        this.load.image('BLOCKED2', './assets/blackout_2.png');
        this.load.audio('sfx_correctspot', './assets/correct.wav');
    }

    create ()
    {   
        console.log(over1)
        over1 = false;
        gameMoves = 20;
        //  Create some 'drop zones'
        this.add.image(205,55, 'box').setOrigin(0,0);

        //  The blocks we can drag
        const blocked1 = this.add.sprite(380, 440, 'BLOCKED1').setOrigin(0,0);
        const blocked2 = this.add.sprite(580, 330, 'BLOCKED2').setOrigin(0,0);
        const block1 = this.add.sprite(64, 192, 'toyGun').setOrigin(0, 0);
        const block2 = this.add.sprite(64, 320, 'doll').setOrigin(0, 0);
        const block3 = this.add.sprite(64, 448, 'pbottle').setOrigin(0, 0);
        const block4 = this.add.sprite(64,576, 'buttons').setOrigin(0,0);
        const block5 = this.add.sprite(200, 70, 'floss').setOrigin(0,0);
        const block6 = this.add.sprite(200, 140, 'hanger').setOrigin(0,0)
        const block7 = this.add.sprite(200, 210, 'phone').setOrigin(0,0);
        const block8 = this.add.sprite(200, 280, 'bag').setOrigin(0,0);

        //debugging purposes
        blocked1.setInteractive({draggable: true});
        blocked2.setInteractive({draggable: true});

        block1.setInteractive({ draggable: true });
        block2.setInteractive({ draggable: true });
        block3.setInteractive({ draggable: true });
        block4.setInteractive({ draggable: true });
        block5.setInteractive({ draggable: true });
        block6.setInteractive({ draggable: true });
        block7.setInteractive({ draggable: true });
        block8.setInteractive({ draggable: true });

        let scoreConfig = {fontFamily: 'Courier', 
            fontSize: '18px', 
            backgroundColor: '#F3B141', 
            color: '#843605', 
            align: 'right', 
            padding: {top: 5, bottom: 5,}, 
            fixedWidth: 0}
        moves = this.add.text(830, 10, `Moves Left: ${gameMoves}`, scoreConfig);
        keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);

        this.input.on('drag', (pointer, gameObject, dragX, dragY) => {

            //  This will snap our drag to a 10x10 grid

            dragX = Phaser.Math.Snap.To(dragX, 10);
            dragY = Phaser.Math.Snap.To(dragY, 10);
            gameObject.setPosition(dragX, dragY);

        });

        //  The following code just checks to see if the gameObject is over
        //  a zone when the drag ends and if so, we change frame and disable it
        this.input.on('dragend', (pointer, gameObject) => {
            gameMoves -= 1;
            const x = gameObject.x;
            const y = gameObject.y;
            //for debugging purposes
            console.log(`X: ${gameObject.x}\nY: ${gameObject.y}\nMoves Left: ${gameMoves}\nPieces locked in place:\nBook: ${over1}\nPillow: ${over2}\nFlour: ${over3}\nShirt: ${over4}\nBulb: ${over5}`);
            if (x === 580 && y === 230 && !over1 && gameObject == block1)
            {
                over1 = true;
                this.sound.play('sfx_correctspot');
                gameObject.disableInteractive();
            }
            else if (x === 430 && y === 430 && !over2 && gameObject == block2)
            {
                over2 = true;
                gameObject.disableInteractive();
                this.sound.play('sfx_correctspot');
            }
            else if (x === 480 && y === 230 && !over3 && gameObject == block3)
            {
                over3 = true;
                gameObject.disableInteractive();
                this.sound.play('sfx_correctspot');
            }
            else if(x === 380 && y === 490 && !over4 && gameObject == block4){
                over4 = true;
                gameObject.disableInteractive();
                this.sound.play('sfx_correctspot');
            }
            else if(x === 380 && y === 380 && !over5 && gameObject == block5){
                over5 = true;
                gameObject.disableInteractive();
                this.sound.play('sfx_correctspot');
            }
            else if(x == 530 && y == 440 && !over6 && gameObject == block6){
                over6 = true;
                gameObject.disableInteractive();
                this.sound.play('sfx_correctspot');
            }
            else if(x == 630 && y == 280 && !over7 && gameObject == block7){
                over7 = true;
                gameObject.disableInteractive();
                this.sound.play('sfx_correctspot');
            }
            else if(x == 380 && y == 230 && !over8 && gameObject == block8){
                over8 = true;
                gameObject.disableInteractive();
                this.sound.play('sfx_correctspot');
            }
        });
    }
    update(){
        if(!music.isPlaying){
            music.play();
        }
        moves.setText(`Moves Left: ${gameMoves}`)
        //console.log(`${over1}\n${this.over2}\n${this.over3}\n${this.over4}\n${this.over5}`)
        if(over1 && over2 && over3 && over4 && over5 && over6 && over7 && over8){
            this.gameWin = true;
            console.log('You won, congrats');
            this.gameWin = false;
            over1 = false;
            over2 = false;
            over3 = false;
            over4 = false;
            over5 = false;
            this.scene.start('endGame')
        }
        else if(gameMoves <= 0 && !gameWin){
            over1 = false;
            over2 = false;
            over3 = false;
            over4 = false;
            over5 = false;
            this.gameWin = false;
            console.log('You\'re out of moves. \nGame Over');
            this.scene.start('Start')
        }
    }
}   
