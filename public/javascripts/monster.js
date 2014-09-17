var monster_vertical = {
	w : 35,
	h : 35,
	x : 250,
	y : 300,
	life: 100,
	name: "@monster",
	damage: 5,
	speed: 2,
	sprite: "images/monster.png",
	collidable: true,
	controllable: false,
	oncollition: function(target) {
		if (target.name == "@hero") {
			target.life -= 5;
			game.sendBackItem(target);
			target.animations.hit();
		//	target.refresh();
		}
	},
	refresh: function() {
		
	},
	draw: function(ctx) {

		ctx.drawImage(this.sprite,this.x,this.y,this.w,this.h);
		ctx.beginPath();
		ctx.strokeStyle="red";
		ctx.rect(this.x,this.y,this.w,this.h);
		ctx.stroke();
	},
	pickable: false,
	loaded : false
};
