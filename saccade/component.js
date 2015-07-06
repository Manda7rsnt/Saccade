// Component part which automatically sets the parent reference
var component = entity.extend({
	name: "Component",
	type: ComponentType,
	create: function (parent) {
		var self = entity.create.call(this);
		self.setParent(parent);
		return self;
	},
});
