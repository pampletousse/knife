var config = {
    width: 400,
    height: 490,
    scene: [BootGame, PlayGame, PauseGame, EndGame],
    parent: 'jeu',
    backgroundColor: '#FFFF99',
    parent: 'jeu',
    physics: {
        default: 'arcade',
        debug: true,
        gravity: {
            y: 0,
        },
    },
};

// Variables globales
var gamee = new Phaser.Game(config);
var score;
var persoSprite;
var obstacle;
var survive;