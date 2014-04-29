var player = {
	w : 35,
	h : 35,
	x : 20,
	y : 30,
	life: 100,
	money: 0,
	speed: 0.5,
	sprite: "images/hero.png",
	name: "@hero",
	collidable: true,
	controllable: true,
	action : function()
	{
		console.error("ACTION!1");
	},
	oncollition: function(item,moveIntent) {
		
	},
	refresh: function() {
		
	},
	draw: function(ctx) {
		ctx.drawImage(this.sprite,this.x,this.y,this.w,this.h);
		ctx.beginPath();
		ctx.strokeStyle="blue";
		ctx.rect(this.x,this.y,this.w,this.h);
		ctx.stroke();
	},
	loaded : false
};