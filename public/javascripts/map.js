bg = {
	x: 0,
	y: 0,
	w: 512,
	h: 480,
	sprite: "images/background.png",
	loaded: false,
	collidable: false,
	controllable: false,
	draw: function(ctx) {
		ctx.drawImage(this.sprite,this.x,this.y,this.w,this.h);
	}
};

/*var music = new Audio;
music.src = "sounds/zeldamaintheme.mp3";
music.play();*/
game.setCanvasSize(512,480);
game.loadElement(bg);
game.loadElement(player);
game.loadElement(monster_vertical);

var monster_vertical_2 = game.cloneElement(monster_vertical);
monster_vertical_2.x = 200;
monster_vertical_2.y = 50;
game.loadElement(monster_vertical_2);

game.addToScene(bg);
game.addToScene(monster_vertical);
game.addToScene(monster_vertical_2);
game.addToScene(player);
game.start();