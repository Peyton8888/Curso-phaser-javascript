function preload() {
    this.load.image('cielo', '/img/shared-0-50-1c2fc2dd.png')
}
function create() {
    this.add.image(40,40,'cielo');
}

const config = {
    type: Phaser.AUTO,
    width: 450,
    height: 600,
    // backgroundColor: "#5f2a55",
    scene: {
    create,
    preload
    }
}

const game = new Phaser.Game(config)