// Fades a grid area back to a default value
var GridFader = entity.extend({
	name: "GridFader",
	create: function(x, y, w, h, color) {
		var self = entity.create.call(this);
		self.x = x;
		self.y = y;
		self.w = w;
		self.h = h;
		self.baseColor = color;
		self.baseColorRGB = {};
		self.blendRate = 0.12;
		PS.unmakeRGB(self.baseColor, self.baseColorRGB);
		return self;
	},

	// Linear interpolation
	lerp: function(a, b, t) {
		return (a + (b-a) * t);
	},

	blend: function(ac, bc, t) {
		var c = {};
		c.r = this.lerp(ac.r, bc.r, t);
		c.g = this.lerp(ac.g, bc.g, t);
		c.b = this.lerp(ac.b, bc.b, t);
		return c;
	},

	render: function() {
		var ac = {};
		var bc = this.baseColorRGB;
		var c = {};
		for(var x = this.x; x < this.x+this.w; ++x) {
			for(var y = this.y; y < this.y+this.h; ++y) {
				PS.unmakeRGB(PS.borderColor(x, y), ac);
				c = this.blend(ac, bc, this.blendRate);
				PS.borderColor(x, y, c);
			}
		}
	},
});
