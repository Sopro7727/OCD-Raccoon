class Example extends Phaser.Scene
{
    constructor()
    {
        super();
    }

    preload ()
    {
        this.load.path = './assets/';        
        this.load.image('box', 'Cardboard_Box_Puzzle_Grid.png');
    }

    create ()
    {
        this.add.image(400, 300, 'bg');


        //  Create some 'drop zones'
        this.add.image(640, 192, 'target').setOrigin(0, 0);
        this.add.image(640, 320, 'target').setOrigin(0, 0);
        this.add.image(640, 448, 'target').setOrigin(0, 0);
        this.add.image(200,50, 'box').setOrigin(0,0);

        //  The blocks we can drag
        const block1 = this.add.sprite(64, 192, 1).setOrigin(0, 0);
        const block2 = this.add.sprite(64, 320, 1).setOrigin(0, 0);
        const block3 = this.add.sprite(64, 448, 1).setOrigin(0, 0);
        const block4 = this.add.sprite(64,576, 1).setOrigin(0,0);

        block1.setInteractive({ draggable: true });
        block2.setInteractive({ draggable: true });
        block3.setInteractive({ draggable: true });
        block4.setInteractive({ draggable: true });

        let over1 = false;
        let over2 = false;
        let over3 = false;
        let over4 = false;

        this.input.on('drag', (pointer, gameObject, dragX, dragY) => {

            //  This will snap our drag to a 64x64 grid

            dragX = Phaser.Math.Snap.To(dragX, 10);
            dragY = Phaser.Math.Snap.To(dragY, 10);

            gameObject.setPosition(dragX, dragY);

        });

        //  The following code just checks to see if the gameObject is over
        //  a zone when the drag ends and if so, we change frame and disable it

        this.input.on('dragend', (pointer, gameObject) => {

            const x = gameObject.x;
            const y = gameObject.y;
            console.log(`X: ${gameObject.x}\nY: ${gameObject.y}`);

            if (x === 640 && y === 192 && !over1)
            {
                over1 = true;
                gameObject.setFrame(0);
                gameObject.disableInteractive();
            }
            else if (x === 640 && y === 320 && !over2)
            {
                over2 = true;
                gameObject.setFrame(0);
                gameObject.disableInteractive();
            }
            else if (x === 640 && y === 448 && !over3)
            {
                over3 = true;
                gameObject.setFrame(0);
                gameObject.disableInteractive();
            }

        });
    }
}


