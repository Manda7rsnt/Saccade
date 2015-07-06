// Scene for games
var scene = entity.extend({
	create: function (w, h, title) {
		var self = entity.create.call(this);
		self.w = w;
		self.h = h;
		self.title = title;
		self.color = 0xDDEEFF;
		self.speed = 1;
		return self;
	},

	awake: function () {
		PS.gridSize(this.w, this.h);
		PS.statusText(this.title);

		PS.border(PS.ALL, PS.ALL, 0);
		PS.gridColor(this.color);

		// Start everything
		PS.timerStart(this.speed, this.tick.bind(this));
	},

	tick: function() {
		this.clear();
		this.onPhysics();
		this.onUpdate();
		this.onRender();
	},

	clear: function() {
		PS.data(PS.ALL, PS.ALL, 0);
	},

	render: function() {
		PS.color(PS.ALL, PS.ALL, this.color);
	},

});
