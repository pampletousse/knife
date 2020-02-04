class PlayGame extends Phaser.Scene {
    constructor() {
        super("playGame");
    }
    preload() {
        this.load.spritesheet('ps', '/assets/images/sprite1.png', {
            frameWidth: 50,
            frameHeight: 50
        });
        this.load.spritesheet('survive', '/assets/images/play_survive.png', {
            frameWidth: 64,
            frameHeight: 64
        });
        this.load.image('obstacle', '/assets/images/knife.png');
    }
    create() {
        var esc = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
        var scoreText;
        this.cursorKeys = this.input.keyboard.createCursorKeys();

        //ANNIMATION SPRITE
        this.anims.create({
            key: 'move',
            frames: this.anims.generateFrameNumbers('ps'),
            frameRate: 15,
            repeat: -1
        });
        this.anims.create({
            key: 'survive',
            frames: this.anims.generateFrameNumbers('survive'),
            frameRate: 5,
            repeat: -1
        });
        survive = this.add.sprite(200, 40, 'survive').play('survive');
        persoSprite = this.physics.add.sprite(200, 250, 'ms').setScale(1);
        persoSprite.play('move');
        persoSprite.setCollideWorldBounds(true);

        // Init score
        let scoreStyle = {
            font: '20px Arial',
            fill: '#000'
        };
        this.score = 0;
        this.scoreText = this.add.text(20, 20, score, scoreStyle);

        // Generation obstacle
        this.time.addEvent({
            delay: 1000,
            callback: nouvelObjet,
            callbackScope: this,
            loop: true,
        });
        // Clean instruction départ
        this.time.addEvent({
            delay: 2000,
            callback: cleanScreen,
            callbackScope: this,
            loop: true,
        });

    }
    update() {
        this.physics.add.collider(persoSprite, obstacle, collision, null, this);
        // Déplacement
        if (Phaser.Input.Keyboard.JustDown(this.cursorKeys.left) && persoSprite.x > 80) {
            persoSprite.x -= 60;
        }
        if (Phaser.Input.Keyboard.JustDown(this.cursorKeys.right) && persoSprite.x < 320) {
            persoSprite.x += 60;
        }
        // Pause
        if (Phaser.Input.Keyboard.JustDown(this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC))) {
            console.log("pause");
            this.scene.pause("playGame");
            this.scene.launch('pauseGame');
        }
    }
}

function collision() {
    // gestion de la collision
    this.scene.stop("playGame");
    this.scene.start("endGame", {
        score: this.score
    });
}

function cleanScreen() {
    survive.setVisible(false);
}

function nouvelObjet() {
    // génération des knives

    // variables aléatoires pour espace libre
    var trou = Phaser.Math.Between(1, 5);
    var trou2 = Phaser.Math.Between(1, 5);
    obstacle = this.physics.add.group();

    for (var i = 1; i < 6; i++) {
        if (this.score > 20) {
            if (i != trou) {
                var hauteur = Phaser.Math.Between(480, 600);
                obstacle.create((20 + (60 * i)), hauteur, 'obstacle');
            }
        } else {
            if (i != trou && i != trou2) {
                var hauteur = Phaser.Math.Between(480, 520);
                obstacle.create((20 + (60 * i)), hauteur, 'obstacle');
            }
        }
    }

    var vitesse = 250 + this.score;
    obstacle.setVelocityY(-vitesse);
    // affichage du score
    this.score += 1;
    this.scoreText.setText(this.score);
}