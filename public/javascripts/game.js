var game = function() {
	var gameInterval,currentMap, now, then, scene, keysDown, paused,moveIntent,canvas,ctx;
	this.animation = true;
	this.gameSpeed = 30;
	this.ctx = null;
	this.loadMap = function(map) {
		currentMap = map;
	};

	var setKeysListeners = function() {
		addEventListener("keydown", function (e) {
			keysDown[e.keyCode] = true;
		}, false);

		addEventListener("keyup", function (e) {
			delete keysDown[e.keyCode];
		}, false);
	};

	var render = function() {
		//this.ctx.clearRect(0,0,canvas.width,canvas.height);
		drawTiles();
		if (scene.length > 0) {

			for (var i in scene) {
				var item = scene[i];
				if (item.loaded) {
					item.draw(this.ctx);
				}
			}

		}
	};


	var moveItem = function(item)
	{
		if (item.controllable) {

			if (moveIntent.up) {
				if ((item.y - item.speed) > 0)
					item.y -= item.speed;
				item.animations.up();
			}
			if (moveIntent.down) {
				if ((item.y + item.speed + item.h) < canvas.height)
					item.y += item.speed;
				item.animations.down();
			}
			if (moveIntent.left) {
				if ((item.x - item.speed) > 0)
					item.x -= item.speed;
				item.animations.left();
			}
			if (moveIntent.right) {
				if ((item.x + item.speed + item.w) < canvas.width)
					item.x += item.speed;
				item.animations.right();
			}

			if (moveIntent.action) {
				item.action();
			}
		}
	};

	var moveAll = function()
	{
		//ALL GAME LOGIC GOES HERE
		for (var i in scene)
		{
			var item = scene[i];
			// IF COLLITION IS POSIBLE AND WITH NEXT ITEM
			var collition = false;
			for (var n in scene) {
				var next = scene[n];
				if (item.collidable && next.collidable && item != next) {
					if (item.x <= (next.x + item.w)	&& next.x <= (item.x + next.w) && item.y <= (next.y + item.h) && next.y <= (item.y + next.h))
					{
						if (item.oncollition)
							item.oncollition(next);
						if (next.oncollition)
							next.oncollition(item);
						moveItem(item);
					} else {
					
						moveItem(item);
					}
				} else {
					// NOTHING CAN HAPPEN, LETS DO THIS!
					moveItem(item);
				}

			}


			if (item.refresh !== undefined) item.refresh();
			
		}
	};

	var loop = function(mod) {
		var move = {
			up: false,
			down: false,
			left: false,
			right: false
		};

		if (38 in keysDown) {
			move.up = true;
		}

		if (40 in keysDown) {
			move.down = true;
		}

		if (37 in keysDown) {
			move.left = true;
		}

		if (39 in keysDown) {
			move.right = true;
		}

		if (32 in keysDown) {
			move.action = true;
		}

		moveIntent = move;
		moveAll();
	};


	var gameLoop = function() {
		now = Date.now();
		then = now;
		var delta = now - then;
		loop(delta / 1000);
	};

	var renderLoop = function() {
		render();
		if (!paused)
			requestAnimationFrame(renderLoop);
	};


	this.sendBackItem = function(item)
	{
		if (moveIntent.up) {
			item.y += item.h/2;
		}
		if (moveIntent.down) {
			item.y -= item.h/2;
		}
		if (moveIntent.left) {
			item.x += item.w/2;
		}
		if (moveIntent.right) {
			item.x -= item.w/2;
		}
	};

	this.setCanvasSize = function(w,h)
	{
		canvas.width = w;
		canvas.height = h;
	};
	
	this.addToScene = function(el) {
		scene.push(el);
	};

	this.cloneElement = function(el) {
		var target = {};
		for (var i in el) {
			if (el.hasOwnProperty(i)) {
				target[i] = el[i];
			}
		}
		return target;
	};

	this.loadElement = function(el) {
		var sprt = new Image();
		sprt.onload = function() {
			el.loaded = true;
			el.sprite = this;
		};
		sprt.src = el.sprite;
	};


	var getTilePosition = function (tileGid,image,tileW,tileH) {
		var totalY = image.height / tileH;
		var totalX = image.width / tileW;

		var y = Math.ceil(tileGid/totalX)-1;
		var x = tileGid - (totalX * y) - 1;

		return {x: x, y: y};
	};

	var drawTiles = function() {
		var layersImages = [];
		var layer = 0;
		//for (var layer in TileMaps[currentMap].layers) {
			layersImages[layer] = new Image();
			layersImages[layer].src = TileMaps[currentMap].tilesets[layer].image;
			layersImages[layer].onload = function() {
				var currentX = 0;
				var currentY = 0;
				var currentTile = 0;
				var tilewidth = TileMaps[currentMap].tilesets[layer].tilewidth;
				var tileheight = TileMaps[currentMap].tilesets[layer].tileheight;
				for (var gid in TileMaps[currentMap].layers[layer].data) {
					var coord = getTilePosition(TileMaps[currentMap].layers[layer].data[gid],layersImages[layer],tilewidth,tileheight);
					if (currentTile >= TileMaps[currentMap].layers[layer].width) {
						currentX = 0;
						currentY += tileheight;
						currentTile = 0;
					}

					ctx.drawImage(layersImages[layer],
								(coord.x * tilewidth),
								coord.y * tileheight,
								tilewidth,
								tileheight,
								currentX,
								currentY,
								tilewidth,
								tileheight);
					currentTile++;
					currentX += tilewidth;
				}
			};
		//}
	};

	this.stop = function() {
		paused = true;
		clearInterval(gameInterval);
	};
	this.start = function () {
		paused = false;
		
		renderLoop();
		gameInterval = setInterval(gameLoop, 1000/ this.gameSpeed);
	};

	var __init__ = function() {
		scene = [];
		keysDown = [];

		canvas = document.createElement("canvas");
		ctx = canvas.getContext("2d");
		this.ctx = ctx;
		document.body.appendChild(canvas);

		setKeysListeners();
	};
	
	__init__();
};

game = new game();
