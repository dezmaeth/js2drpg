var player = {
	w : 32,
	h : 32,
	x : 20,
	y : 30,
	animationSpeed: 0.2,
	animationFrames: 3,
	animationEnd: false,
	life: 100,
	currentFrame: 0,
	offsetX:0,
	offsetY:0,
	lt: (new Date().getTime() / 1000),
	money: 0,
	speed: 5,
	sprite: "images/player.png",
	name: "@hero",
	collidable: true,
	controllable: true,
	loaded : false,
	action : function()
	{
		console.error("ACTION!1");
	},
	draw: function(ctx) {
		var time = (new Date().getTime() / 1000);
		if ((this.lt + this.animationSpeed < time) && game.animation) {
			if (this.currentFrame >= this.animationFrames) {
				this.currentFrame = 0;
			}

			this.offsetX = this.w * this.currentFrame;
			this.currentFrame++;
			this.lt = time;
		}

		ctx.drawImage(	this.sprite,
						this.offsetX,
						this.offsetY,
						this.w,
						this.h,
						this.x,
						this.y,
						this.w,
						this.h);

		ctx.beginPath();
		ctx.strokeStyle="blue";
		ctx.rect(this.x,this.y,this.w,this.h);
		ctx.stroke();
	},
	animations : {
		right: function() {
			player.animationFrames =3;
			player.offsetY = 64;
		},
		left: function() {
			player.animationFrames =3;
			player.offsetY = 32;
		},
		up: function() {
			player.animationFrames =3;
			player.offsetY = 96;
		},
		down: function() {
			player.animationFrames =3;
			player.offsetY = 0;
		},
		hit: function() {
			player.animationFrames = 3;
			player.animationSpeed = 0.1;
			player.offsetY = 160;
		}
	}
};
