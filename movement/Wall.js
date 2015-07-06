// Solid wall
var Wall = sprite.extend({
	name: "Wall",
	create: function (x, y, w, h) {
		var self = sprite.create.call(this, x, y, w, h);
		self.color = 0x444444;
		self.borderColor = 0x223322;
		self.spawnComponent(RectBorder, 4);
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
});
