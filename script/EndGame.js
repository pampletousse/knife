class EndGame extends Phaser.Scene {
    constructor() {
        super("endGame");
    }
    init(data) {
        console.log(data)
        score = data.score;
    }
    preload() {
        this.load.spritesheet('score', '/assets/images/end_score.png', {
            frameWidth: 64,
            frameHeight: 64
        });
        this.load.spritesheet('restart', '/assets/images/end_restart.png', {
            frameWidth: 64,
            frameHeight: 64
        });
        this.load.spritesheet('enter', '/assets/images/boot_enter.png', {
            frameWidth: 64,
            frameHeight: 64
        });
    }
    create() {
        this.add.text(165, 20, "END", {
            font: "40px Arial",
            fill: "#FFFF99",
            backgroundColor: "#000"
        });

        this.anims.create({
            key: 'score',
            frames: this.anims.generateFrameNumbers('score'),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'restart',
            frames: this.anims.generateFrameNumbers('restart'),
            frameRate: 5,
            repeat: -1
        });
        this.anims.create({
            key: 'enter',
            frames: this.anims.generateFrameNumbers('enter'),
            frameRate: 5,
            repeat: -1
        });

        this.add.sprite(200, 150, 'score').play('score');
        this.add.sprite(200, 320, 'restart').play('restart');
        this.add.sprite(200, 400, 'enter').play('enter');

        this.add.text(190, 200, score, {
            font: "30px Arial",
            fill: "#000",
        });
    }
    update() {
        if (Phaser.Input.Keyboard.JustDown(this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER))) {
            console.log("resume");
            this.scene.stop();
            this.scene.start('playGame');
        }
    }
}