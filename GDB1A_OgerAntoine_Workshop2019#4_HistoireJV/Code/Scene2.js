class Scene2 extends Phaser.Scene {
    constructor() {
        super("Scene_2");
    }

    init(data){
    	
	}

   preload() {

	}

	create() { 
		this.text = this.add.text(200,300,'Scene 2 - Changer de scene dans phaser');
		

		this.cursors = this.input.keyboard.createCursorKeys(); 
	}

	update() {

		if(this.cursors.up.isDown)
		{
			this.scene.start('Scene_0');
		}
	}

}