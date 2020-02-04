class BootGame extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }

    preload() {
        this.load.spritesheet('play', '/assets/images/boot_play.png', {
            frameWidth: 64,
            frameHeight: 64
        });
        this.load.spritesheet('enter', '/assets/images/boot_enter.png', {
            frameWidth: 64,
            frameHeight: 64
        });
        this.load.spritesheet('pause', '/assets/images/boot_pause.png', {
            frameWidth: 64,
            frameHeight: 64
        });
        this.load.spritesheet('back', '/assets/images/boot_back.png', {
            frameWidth: 64,
            frameHeight: 64
        });
        this.load.spritesheet('moveinstruct', '/assets/images/boot_move.png', {
            frameWidth: 128,
            frameHeight: 128
        });
        this.load.spritesheet('arrows', '/assets/images/boot_arrows.png', {
            frameWidth: 128,
            frameHeight: 128
        });
    }
    create() {
        this.add.text(140, 20, "KNIFE", {
            font: "40px Arial",
            fill: "#FFFF99",
            backgroundColor: "#000",
            boundsAlignH: "center",
        });

        this.add.text(150, 460, "made by @v_y_y_s", {
            font: "12px Arial",
            fill: "#FFFF99",
            backgroundColor: "#000",
            boundsAlignH: "center",
        });

        this.anims.create({
            key: 'play',
            frames: this.anims.generateFrameNumbers('play'),
            frameRate: 3,
            repeat: -1
        });
        this.anims.create({
            key: 'enter',
            frames: this.anims.generateFrameNumbers('enter'),
            frameRate: 3,
            repeat: -1
        });
        this.anims.create({
            key: 'pause',
            frames: this.anims.generateFrameNumbers('pause'),
            frameRate: 3,
            repeat: -1
        });
        this.anims.create({
            key: 'back',
            frames: this.anims.generateFrameNumbers('back'),
            frameRate: 3,
            repeat: -1
        });
        this.anims.create({
            key: 'moveinstruct',
            frames: this.anims.generateFrameNumbers('moveinstruct'),
            frameRate: 3,
            repeat: -1
        });
        this.anims.create({
            key: 'arrows',
            frames: this.anims.generateFrameNumbers('arrows'),
            frameRate: 3,
            repeat: -1
        });

        this.add.sprite(100, 150, 'play').play('play');
        this.add.sprite(100, 200, 'enter').play('enter');
        this.add.sprite(300, 150, 'pause').play('pause');
        this.add.sprite(300, 200, 'back').play('back');
        this.add.sprite(200, 300, 'moveinstruct').play('moveinstruct');
        this.add.sprite(200, 350, 'arrows').play('arrows');
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER))) {
            console.log("resume");
            this.scene.stop("bootGame");
            this.scene.start("playGame");
        }
    }
}