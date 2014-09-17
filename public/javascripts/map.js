var bg = {
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


var house = { 
	x: 100,
	y: 100,
	w: 130,
	h: 150,
	sprite: "http://th01.deviantart.net/fs70/150/f/2012/111/7/b/house_sprite_by_chasz_manequin-d4x2gm4.png",
	loaded: false,
	collidable: true,
	controllable: false,
	oncollition: function(target) {
			
	},
	draw: function(ctx) {
		ctx.drawImage(this.sprite,this.x,this.y,this.w,this.h);
	}
};

player.x =50;
player.y =50;

/*var music = new Audio;
music.src = "sounds/zeldamaintheme.mp3";
music.play();*/

game.setCanvasSize(512,480);
game.loadElement(bg);
game.loadElement(house);
game.loadElement(player);
game.loadElement(monster_vertical);

var monster_vertical_2 = game.cloneElement(monster_vertical);
monster_vertical_2.x = 200;
monster_vertical_2.y = 50;
game.loadElement(monster_vertical_2);

game.addToScene(bg);
game.addToScene(monster_vertical);
game.addToScene(monster_vertical_2);
game.addToScene(house);
game.addToScene(player);
game.start();
