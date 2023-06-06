function preload() {
    // Load in the sprite here!
    this.load.image("surviv", "/img/loot-shirt-outfitRed.svg")
  }
  
  function create() {
    // Create a sprite game object here!
    this.add.sprite(60, 80, 'surviv');
}
  
  
  const config = {
      type: Phaser.AUTO,
      width: 450,
      height: 600,
      backgroundColor: "#5f2a55",
      scene: {
      create,
      preload
      }
  }
  
  const game = new Phaser.Game(config)