window.onload = function() { 
	game.setCanvasSize(800,600);
	game.loadElement(player);
	game.loadElement(monster_vertical);

	game.addToScene(monster_vertical);
	game.addToScene(player);
	game.start();

}