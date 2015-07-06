// Add balls to parent on touch
var RectBorder = component.extend({
	name: "RectBorder",
	type: ComponentType,

	create: function(parent, width) {
		var self = component.create.call(this, parent);
		self.width = width;
		return self;
	},

	render: function(x, y) {
		var p = this.getParent();
		var l = p.x;
		var t = p.y;
		var r = l + p.w-1;
		var b = t + p.h-1;
		// Borders
		for (var x = l; x <= r; ++x) {
			PS.border(x, t, {top:this.width});
			PS.border(x, b, {bottom:this.width});
		}
		for (var y = t; y <= b; ++y) {
			PS.border(l, y, {left:this.width});
			PS.border(r, y, {right:this.width});
		}
	},
});
