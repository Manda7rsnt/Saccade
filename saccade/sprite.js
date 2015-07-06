// Sprite object with collisions
var sprite = entity.extend({
	name: "Sprite",
	type: SpriteType,
	create: function (x, y, w, h) {
		var self = entity.create.call(this);
		self.x = x;
		self.y = y;
		self.w = w;
		self.h = h;
		self.collisions = [];
		return self;
	},

	// Stub for sprites to handle collisions with other sprites
	collide: function(other, direction) { },

	physics: function() {
		self.collisions = [];
		var l = this.x;
		var t = this.y;
		var r = l + this.w;
		var b = t + this.h;
		for (var x = l; x < r; ++x) {
			for (var y = t; y < b; ++y) {
				if (InBounds(x, y)) {
					var others = GetObject(x, y);
					for(var i = 0; i < others.length; ++i) {
						var them = others[i];
						this.collide(them, Dir.over);
						them.collide(this, Dir.over);
					}
					WriteObject(x, y, this);
				}
			}
			
		}
	},
});
