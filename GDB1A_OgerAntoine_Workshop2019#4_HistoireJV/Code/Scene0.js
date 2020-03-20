class Scene0 extends Phaser.Scene {
    constructor() {
        super("Scene_0");
    }

   preload() {
	this.load.image('Bouton','assets/Suite_Scene0.png');
	}

	create() { 
		this.text = this.add.text(350,100,"Child's History", {fontSize: '32px', fill:'#FFFFFF'});
		this.text = this.add.text(100,250,"Bienvenue !\nPour poser les bases tu vas etre plonger dans l'histoire d'un petit garcon,\nTu vas evoluer avec lui en l'aidant a surmonter les epreuves de la jeunesse.\n\n\nTu vas etre amener a vivre 4 moment de la vie ce ce jeune homme a travers 4 niveau de jeu\n\nBon courage !");
		this.text = this.add.text(500,700,"Fleche de droite pour commencer");

		this.add.image(900,730,'Bouton').setScale(0.5);
		this.cursors = this.input.keyboard.createCursorKeys(); 
	}

	update() {
		if(this.cursors.right.isDown)
		{
			this.scene.start('Scene_1', {nombreVie: this.nombreVie, score: this.score});
		}
	}

}


