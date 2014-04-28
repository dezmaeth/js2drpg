var monster_vertical = {
	w : 35,
	h : 35,
	x : 250,
	y : 300,
	life: 100,
	enemy: true,
	damage: 5,
	speed: 2,
	sprite: "images/monster.png",
	collidable: true,
	controllable: false,
	direction: "up",
	oncollition: function(item) {
		if (!item.enemy) {
			item.life -= 5;
			game.sendBackItem(item);
			item.refresh();
		}
	},
	refresh: function() {
		switch(this.direction)
		{
			case "up":
				if (this.y > 100)
					this.y -= this.speed;
				else 
					this.direction = "down";
			break;

			case "down":
				if (this.y < 300)
					this.y += this.speed;
				else 
					this.direction = "up";
			break;

			case "left":

			break;

			case "right":

			break;
		}

		/*
		if (this.y > 100) {
			this.y -= this.speed;
		}

		if (this.y < 100) {
			this.y += this.speed;
		}*/
	},
	draw: function(ctx) {
		ctx.drawImage(this.sprite,this.x,this.y,this.w,this.h);
	},
	pickable: false,
	loaded : false
};