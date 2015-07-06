// Bouncing Ball
var Ball = sprite.extend({
	name: "Ball",
	create: function (x, y, dx, dy) {
		var self = sprite.create.call(this, x, y, 1, 1);
		self.dx = dx;
		self.dy = dy;
		self.color = PS.random(0xFFFFFF);
		self.borderColor = PS.random(0xFFFFFF);
		return self;
	},

	update: function() {
		this.x += this.dx;
		this.y += this.dy;
		this.checkBounce();
		sprite.update.call(this);
	},

	awake: function() {
		PS.audioPlay("fx_pop", {volume:0.25});
	},

	sleep: function() {
		PS.audioPlay("fx_squish");
	},

	render: function() {
		PS.color(this.x, this.y, this.color);
		PS.borderColor(this.x, this.y, this.borderColor);
		PS.border(this.x, this.y, 2);
		PS.scale(this.x, this.y, 90);
		PS.radius(this.x, this.y, 50);
	},

	collide: function(other, dir) {
		this.destroy();
	},

	checkBounce: function() {
		var p = this.getParent();
		if(this.x < 0) {
			this.x = 0;
			this.dx *= -1;
			this.x += this.dx;
		}
		if(this.y < 0) {
			this.y = 0;
			this.dy *= -1;
			this.y += this.dy;
		}
		if(this.x + this.w > p.w) {
			this.x = p.w-1;
			this.dx *= -1;
			this.x += this.dx;
		}
		if(this.y + this.h > p.h) {
			this.y = p.h-1;
			this.dy *= -1;
			this.y += this.dy;
		}

		this.randomDirection();
	},

	randomDirection: function() {
		if (PS.random(100) === 1) {
			this.dx = PS.random(3) - 2;
			this.dy = PS.random(3) - 2;
		}
	},
});
