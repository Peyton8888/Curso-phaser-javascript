var surviv;
function preload() {
    this.load.image('surviv','/img/loot-shirt-outfitRed.svg');
}

function create() {
    surviv = this.add.sprite(10,20,'surviv');
}

function update() {
    surviv.x += 1;
    surviv.y += 1;
}

const config = {
    type : Phaser.AUTO,
    width : 1300,
    heigth : 700,
    backgroundColor: "#80af49",

    scene:{
        preload,create,update
    }
}

const game = new Phaser.Game(config)