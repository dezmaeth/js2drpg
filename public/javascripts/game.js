var game = function() {
	var gameInterval, now, then, scene, keysDown, paused,moveIntent,canvas;
	this.ctx;
	this.animation = true;
	this.gameSpeed = 30;

	var setKeysListeners = function() {
		addEventListener("keydown", function (e) {
			//console.log("key", e.keyCode);
			keysDown[e.keyCode] = true;
		}, false);

		addEventListener("keyup", function (e) {
			delete keysDown[e.keyCode];
		}, false);
	};

	var render = function() {
		this.ctx.clearRect(0,0,canvas.width,canvas.height);
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


	var __init__ = function() {
		scene = [];
		keysDown = [];

		canvas = document.createElement("canvas");
		this.ctx = canvas.getContext("2d");
		document.body.appendChild(canvas);

		setKeysListeners();
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
	//not good enough , fix this!
	var getTileCoords = function(tileNum,image,tileW, tileH) { 
	   totalX = image.width / tileW; 
	   totalY = image.height / tileH;
	   num = totalX / tileNum;
	   row = 1;
	   while (num < 1) { 
	       row++;
	       num = (totalX * row) / tileNum;
	   }

	   column = tileNum - (totalX * row) + totalX;
	   return { row : row , column : column }
	}


	this.drawTileMap = function(mapdata,layer,tileW,tileH) { 
		var layer = (layer !== undefined)? layer : 0;
		tileImage = new Image;
		tileImage.src = mapdata.tilesets[layer].image;
		tileImage.onload = function() { 
			var currentX = 0;
			var currentY = 0;
			var currentTile = 0;
			for (var i in mapdata.layers[layer].data) {
				var coord = getTileCoords(mapdata.layers[layer].data[i],tileImage,tileW,tileH);
				if (currentTile >= 20) {
					currentX = 0;
					currentY += tileH;
					currentTile = 0;
				}

				ctx.drawImage(	tileImage,
							(coord.column * tileW),
							coord.row * tileH,
							tileW,
							tileH,
							currentX,
							currentY,
							tileW,
							tileH);
				
				console.log("num",currentTile,"x:",currentX,"y:",currentY);

				currentTile++;
				currentX += tileW;
			}
		}
	}

	this.stop = function() {
		paused = true;
		clearInterval(gameInterval);
	};
	this.start = function () {
		paused = false;
		renderLoop();
		gameInterval = setInterval(gameLoop, 1000/ this.gameSpeed);
	};

	__init__();
};

game = new game();
