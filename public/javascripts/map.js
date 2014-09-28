window.onload = function() {
	game.loadMap("map");
	game.setCanvasSize(TileMaps["map"].width * TileMaps["map"].tilewidth,TileMaps["map"].height * TileMaps["map"].tilewidth);
	game.loadElement(player);
	game.loadElement(monster_vertical);
	game.addToScene(monster_vertical);
	game.addToScene(player);
	game.start();
};