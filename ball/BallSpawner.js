// Add balls to parent on touch
var BallSpawner = entity.extend({
	name: "BallSpawner",
	touch: function(x, y) {
		this.getParent().spawnChild(BigBall, x, y, PS.random(3)-2, PS.random(3)-2);
	},
});
