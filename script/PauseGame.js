class PauseGame extends Phaser.Scene {
    constructor() {
        super("pauseGame");
    }

    create() {
        this.add.text(280, 20, "PAUSE", {
            font: "30px Arial",
            fill: "#FFFF99",
            backgroundColor: "#000"
        });
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC))) {
            this.scene.stop();
            this.scene.resume('playGame');
        }
    }
}