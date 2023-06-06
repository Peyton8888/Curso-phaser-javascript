let player = {};
function create() {
    player.one = this.add.circle(30,30,20,0x00E030);
    player.two = this.add.circle(40,40,30,0x98E000)
}

function update() {
    //player 1
    player.one.x += 1;
    player.one.y += 2;
    //player 2
    player.two.y += 1;
    player.two.x += 1;
}

const config = {
    type : Phaser.AUTO,
    width : 1000,
    heigth :700,
    backgoundColor:"#fff",
    scene:{
        create, update
    }
 
}
const game = new Phaser.Game(config) 
