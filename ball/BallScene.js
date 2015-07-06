// Scene for games
var BallScene = scene.extend({
	name: "BallScene",
	create: function () {
		var self = scene.create.call(this, 32, 32, "Bouncing Balls");
		self.color = 0xDDEEFF;
		self.speed = 2;
		return self;
	},

	awake: function () {
		scene.awake.call(this);

		// Grid border
		PS.border(PS.ALL, PS.ALL, 0);
		//document.getElementById('grid').style.border = "thick solid black;";

		// Scene objects
		this.spawnChild(BallSpawner);
		this.spawnChild(Ball, 1, 1, 1, 1);
		this.spawnChild(GridFader, 0, 0, this.w, this.h, this.color);
	},

	update: function() {
		if (PS.random(30) === 1) {
			this.spawnChild(Ball, RandBetween(0, this.w-1), RandBetween(0, this.h-1), 1, 1);
		}
		if (PS.random(50) === 1) {
			this.spawnChild(BigBall, RandBetween(0, this.w-2), RandBetween(0, this.h-2), 1, 1);
		}
	},
});
