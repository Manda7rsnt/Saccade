// Scene for games
var MovementScene = scene.extend({
	name: "MovementScene",
	create: function () {
		var self = scene.create.call(this, 14, 14, "Player Movement");
		self.color = 0x336699;
		self.speed = 5;
		self.spawnComponent(DebugTouch);
		return self;
	},

	awake: function () {
		scene.awake.call(this);

		// Grid border
		PS.border(PS.ALL, PS.ALL, 0);

		// Scene objects
		this.spawnChild(Player, 4, 4);
		this.spawnChild(Wall, 0, 0, this.w, 1);
		this.spawnChild(Wall, 0, this.h-1, this.w, 1);
		this.spawnChild(Wall, 0, 1, 1, this.h-2);
		this.spawnChild(Wall, this.w-1, 1, 1, this.h-2);
	},

	render: function() {
		scene.render.call(this);
		PS.border(PS.ALL, PS.ALL, 0);
		PS.glyph(PS.ALL, PS.ALL, 0);
	},
});
