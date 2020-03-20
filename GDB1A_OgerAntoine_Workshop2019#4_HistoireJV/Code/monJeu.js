 var config = {
	type: Phaser.AUTO,
	width: 1024,
	height: 768,
	scene: [Scene0, Scene2, Scene1],
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 300 }, 			
			debug: true
		}
	}
};

var game = new Phaser.Game(config);
