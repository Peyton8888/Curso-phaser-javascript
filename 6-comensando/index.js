//crear el tecto
function create() {
    this.add.text(90, 30, "hola mundo");
}

const config = {
    type : Phaser.AUTO,
    width : 400,
    heigth : 600,
    backgroundColor: "#80af49",

    scene:{create }
}

const game = new Phaser.Game(config)