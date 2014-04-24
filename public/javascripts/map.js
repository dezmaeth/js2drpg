bg = {
	x: 0,
	y: 0,
	w: 512,
	h: 480,
	sprite: "images/background.png",
	loaded: false,
	collidable: false,
	controllable: false
};



game.setCanvasSize(512,480);
game.loadElement(bg);
game.loadElement(player);
game.loadElement(monster);
game.addToScene(bg);
game.addToScene(monster);
game.addToScene(player);
game.start();