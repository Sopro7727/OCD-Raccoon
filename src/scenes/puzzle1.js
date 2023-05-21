class Puzzle1 extends Phaser.Scene
{
    constructor()
    {
        super("Puzzle1");
    }

    preload ()
    {
        this.load.image('box', './assets/Cardboard_Box_Puzzle_Grid.png');
        this.load.image('book', './assets/puzzleBook.png');
        this.load.image('flour', './assets/puzzleFlour.png');
        this.load.image('pillow', './assets/puzzlePillow.png');
        this.load.image('shirt', './assets/puzzleShirt.png');
        this.load.image('bulb', './assets/puzzleLightbulb.png');
    }

    create ()
    {   
        console.log(over1)
        over1 = false;
        gameMoves = 20;
        //  Create some 'drop zones'
        this.add.image(200,50, 'box').setOrigin(0,0);

        //  The blocks we can drag
        const block1 = this.add.sprite(64, 192, 'book').setOrigin(0, 0);
        const block2 = this.add.sprite(64, 320, 'pillow').setOrigin(0, 0);
        const block3 = this.add.sprite(64, 448, 'flour').setOrigin(0, 0);
        const block4 = this.add.sprite(64,576, 'shirt').setOrigin(0,0);
        const block5 = this.add.sprite(200, 70, 'bulb').setOrigin(0,0);

        block1.setInteractive({ draggable: true });
        block2.setInteractive({ draggable: true });
        block3.setInteractive({ draggable: true });
        block4.setInteractive({ draggable: true });
        block5.setInteractive({ draggable: true});
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

            //  This will snap our drag to a 64x64 grid

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
            if (x === 580 && y === 480 && !over1 && gameObject == block1)
            {
                over1 = true;
                gameObject.disableInteractive();
            }
            else if (x === 380 && y === 430 && !over2 && gameObject == block2)
            {
                over2 = true;
                gameObject.disableInteractive();
            }
            else if (x === 580 && y === 230 && !over3 && gameObject == block3)
            {
                over3 = true;
                gameObject.disableInteractive();
            }
            else if(x === 380 && y === 230 && !over4 && gameObject == block4){
                over4 = true;
                gameObject.disableInteractive();
            }
            else if(x === 530 && y === 380 && !over5 && gameObject == block5){
                over5 = true;
                gameObject.disableInteractive();
            }
        });
    }
    update(){
        moves.setText(`Moves Left: ${gameMoves}`)
        //console.log(`${over1}\n${this.over2}\n${this.over3}\n${this.over4}\n${this.over5}`)
        if(over1 && over2 && over3 && over4 && over5){
            this.gameWin = true;
            console.log('You won, congrats');
            this.gameWin = false;
            over1 = false;
            over1 = false;
            over1 = false;
            over1 = false;
            over1 = false;
            this.scene.start('Start')
        }
        if(gameMoves <= 0 && !gameWin){
            over1 = false;
            over1 = false;
            over1 = false;
            over1 = false;
            over1 = false;
            this.gameWin = false;
            console.log('You\'re out of moves. \nGame Over');
            this.scene.start('Start')
        }
    }
}   
