function create() {
    // Change "Codey's Adventures\n  in Code World" to the name of your game
    this.add.text(50, 100, "surviv.io", { font: "40px Times New Roman", fill: "#00000"});
  
    // Change "by Codecademy" to your name!
    this.add.text(130, 300, "santiago 8888", { font: "20px Times New Roman", fill: "#ffa0d0"});
  }
  
  const config = {
      type: Phaser.AUTO,
      width: 1350,
      height: 650,
      backgroundColor: "#80af49",
      scene: {
      create
      }
  };
  
  const game = new Phaser.Game(config);