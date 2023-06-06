const gameState ={
    onColor: 0xaaffaa,
    offColor: 0xffaaaa
}

function create() {
    gameState.cicle1 = this.add.circle(50,50,40,gameState.onColor);
    gameState.cicle2 = this.add.circle(50,400,40,gameState.offColor);


gameState.cicle2.setInteractive();

gameState.cicle2.on('pointerup', function(){
    gameState.cicle1.fillColor = gameState.offColor;
    gameState.cicle2.fillColor = gameState.onColor;

})}

const config = {
    type : Phaser.AUTO,
    width : 1000,
    heigth : 600,
    backgroundColor : "#80af49",

    scene :{
        create
    }
}

const game = new Phaser.Game(config)

// const gameState = {
//     onColor: 0xaaffaa,
//     offColor: 0xffaaaa
//   }
  
//   function create() {
//     gameState.rect1 = this.add.rectangle(200, 100, 100, 100, gameState.onColor);
//     gameState.rect2 = this.add.rectangle(200, 300, 100, 100, gameState.offColor);
    
//     // set gameState.rect2 as interactive here
//     gameState.rect2.setInteractive();
//     // create the pointerup listener for rect2 here
//     gameState.rect2.on('pointerup', function(){
//       gameState.rect1.fillColor = gameState.offColor;
//       gameState.rect2.fillColor = gameState.onColor
//     })
//   }
  
//   const config = {
//     type: Phaser.AUTO,
//     width: 400,
//     height: 450,
//     backgroundColor: 0x333333,
//     scene: {
//       create
//     }
//   }
  
//   const game = new Phaser.Game(config)