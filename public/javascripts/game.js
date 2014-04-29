var game = function() {
	var gameInterval, now, then, scene, canvas, ctx, keysDown, paused,moveIntent;
	var gameSpeed = 120;

	var setKeysListeners = function() {
		addEventListener("keydown", function (e) {
			//console.log("key", e.keyCode);
			keysDown[e.keyCode] = true;
		}, false);

		addEventListener("keyup", function (e) {
			delete keysDown[e.keyCode];
		}, false);
	}



	var render = function() {
		ctx.clearRect(0,0,canvas.width,canvas.height);
		if (scene.length > 0) {		
			for (var i in scene) {
				var item = scene[i];
				if (item.loaded) {
					item.draw(ctx);
				}
			}
		}
	}


	var moveItem = function(item)
	{
		if (item.controllable) {

			if (moveIntent.up) {
				item.y -= item.speed;
			}
			if (moveIntent.down) {
				item.y += item.speed;
			}
			if (moveIntent.left) {
				item.x -= item.speed;
			}
			if (moveIntent.right) {
				item.x += item.speed;
			}

			if (moveIntent.action) {
				item.action()
			}
		}
	}

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
					if (item.x <= (next.x + item.w)
						&& next.x <= (item.x + next.w)
						&& item.y <= (next.y + item.h)
						&& next.y <= (item.y + next.h))
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
	}

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
	}


	var gameLoop = function() {
	 	now = Date.now();
		then = now;
		var delta = now - then;
		loop(delta / 1000);
	}

	var renderLoop = function() {
		render();
		if (!paused)
			requestAnimationFrame(renderLoop);
	}


	var __init__ = function() {
		scene = new Array();
		keysDown = new Array();

		canvas = document.createElement("canvas");
		ctx = canvas.getContext("2d");
		document.body.appendChild(canvas);

		setKeysListeners();
	}


	this.sendBackItem = function(item)
	{
		if (moveIntent.up) {
			item.y += item.h;
		}
		if (moveIntent.down) {
			item.y -= item.h;
		}
		if (moveIntent.left) {
			item.x += item.w;
		}
		if (moveIntent.right) {
			item.x -= item.w;
		}
	}

	//this.stage = { w: canvas.width, h: canvas.height };

	this.setCanvasSize = function(w,h)
	{
		canvas.width = w;
		canvas.height = h;
	}
	
	this.addToScene = function(el) {
		scene.push(el);
	}

	this.cloneElement = function(el) {
		var target = {};
		for (var i in el) {
			if (el.hasOwnProperty(i)) {
		 		target[i] = el[i];
			}
		}
		return target;
	}

	this.loadElement = function(el) {
		var sprt = new Image();
		sprt.onload = function() {
			el.loaded = true;
			el.sprite = this;
		}
		sprt.src = el.sprite;
	}

	this.stop = function() {
		paused = true;
		clearInterval(gameInterval);
	}
	this.start = function () {
		paused = false;
		renderLoop();
		gameInterval = setInterval(gameLoop, 1000/ gameSpeed);
	}

	__init__();
};

game = new game();