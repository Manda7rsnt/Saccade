// Destroy on update with a chance
var RandomDestroy = component.extend({
	name: "RandomDestroy",
	create: function (parent, chance) {
		var self = component.create.call(this, parent);
		self.chance = chance;
		return self;
	},
	update: function() {
		if (PS.random(this.chance) === 1) {
			this.getParent().destroy();
		}
	},
});
