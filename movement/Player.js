// Moving player object
var Player = sprite.extend({
	name: "Player",
	create: function (x, y) {
		var self = entity.create.call(this);
		self.x = x;
		self.y = y;
		self.w = 1;
		self.h = 1;
		self.color = 0xAA0000;
		self.borderColor = 0x772222;
		self.glyph = 0x263A;
		self.glyphColor = 0xFFAAAA;
		return self;
	},

	sleep: function() {
		PS.audioPlay("fx_squish");
	},

	render: function() {
		PS.color(this.x, this.y, this.color);
		PS.borderColor(this.x, this.y, this.borderColor);
		PS.border(this.x, this.y, 2);
		PS.scale(this.x, this.y, 90);
		PS.glyph(this.x, this.y, this.glyph);
		PS.glyphColor(this.x, this.y, this.glyphColor);
	},

	collide: function(other, dir) {
		PS.debug("[" + dir.value +"] with " + other.name + "\n");
	},

	keyDown: function(key) {
		var nx = this.x;
		var ny = this.y;
		switch (key) {
			case PS.KEY_ARROW_LEFT:
				nx--;
				break;
			case PS.KEY_ARROW_RIGHT:
				nx++;
				break;
			case PS.KEY_ARROW_UP:
				ny--;
				break;
			case PS.KEY_ARROW_DOWN:
				ny++;
				break;
		}

		if (GetObject(nx, ny).length === 0) {
			this.x = nx;
			this.y = ny;
		}
	},
});
