var DebugTouch = component.extend({
	name: "DebugTouch",
	type: ComponentType,
	touch: function(x, y) {
		var objs = GetObject(x, y);
		var names = [];
		for (var i = 0; i < objs.length; ++i)
			names.push(objs[i].name);
		PS.debug("DebugTouch: [" + names.toString() + "]\n");
	},
});
