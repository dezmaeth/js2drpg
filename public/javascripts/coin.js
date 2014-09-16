var coin = {
	x:0,
	y:0,
	w:20,
	h:20,
	sprite: "images/coin.png",
	collidable: false,
	controllable: false,
	pickable: true,
	oncollition: function() {

	},
	draw: function(ctx) {
		ctx.drawImage(this.sprite,this.x,this.y,this.w,this.h);
	},
	loaded: false
}