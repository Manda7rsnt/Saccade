// Bouncing Ball
var BigBall = Ball.extend({
	name: "BigBall",
	create: function (x, y, dx, dy) {
		var self = Ball.create.call(this, x, y, dx, dy);
		self.w = 2;
		self.h = 2;
		self.spawnComponent(RectBorder, 3);
		return self;
	},

	sleep: function() {
		PS.audioPlay("fx_squish");
	},

	render: function() {
		var l = this.x;
		var t = this.y;
		var r = l + this.w-1;
		var b = t + this.h-1;
		for (var x = l; x <= r; ++x) {
			for (var y = t; y <= b; ++y) {
				if (InBounds(x, y)) {
					PS.color(x, y, this.color);
					PS.borderColor(x, y, this.borderColor);
					PS.border(x, y, 0);
					PS.scale(x, y, 100);
					PS.radius(x, y, 0);
				}
			}
		}
	},

	collide: function(other, dir) {
		this.destroy();
	},
});
