// Entity
var entity = {

	// Constructor
	create: function () {
		var self = Object.create(this);
		self._children = [];
		self.id = GenerateRandomID();
		return self;
	},

	// Private members
	_parent:	null,
	_children:	null,
	_alive:		true,

	name: "entity",
	type: EntityType,

	// Public members
	x: 0,
	y: 0,
	w: 0,
	h: 0,

	// Methods
	addChild: function (child) {
		this._children.push(child);
		child.setParent(this);
		return child;
	},

	// Creates an object and adds it as a child of this object
	spawnChild: function(objectType /*, ... */) {
		return this.addChild(SpawnObject.apply(this, Array.prototype.slice.call(arguments)));
	},

	// Creates a component and adds it as a child of this object
	spawnComponent: function(objectType /*, ... */) {
		var args = Array.prototype.slice.call(arguments);
		args.splice(1, 0, this);
		return this.addChild(SpawnObject.apply(this, args));
	},

	setParent: function (parent) {
		this._parent = parent;
	},

	getParent: function () {
		return this._parent;
	},

	// Call this to remove the object from its parent
	destroy: function () {
		this._alive = false;
	},

	// Events that can be overridden
	update:		function () {},
	render:		function () {},
	physics:	function () {},
	awake:		function () {},
	sleep:		function () {},

	touch:		function (x, y) {},
	release:	function (x, y) {},
	enter:		function (x, y) {},
	exit:		function (x, y) {},
	keyDown:	function (key)  {},
	keyUp:		function (key)  {},

	// Hooks
	onUpdate:		function () {
		if(this._alive) {
			this.update();
			this._children.forEach(function (child) {child.onUpdate()});
			// Remove inactive children
			for (var i = 0; i < this._children.length; ++i) {
				if (this._children[i]._alive === false) {
					this._children[i].onSleep();
					this._children.splice(i, 1);
				}
			}
		}
	},

	onPhysics:		function () {
		if(this._alive) {
			this.physics();
			this._children.forEach(function (child) {child.onPhysics()});
		}
	},

	onRender:		function () {
		if(this._alive) {
			this.render();
			this._children.forEach(function (child) {child.onRender()});
		}
	},

	onAwake:		function () {
		this._alive = true;
		this.awake();
		this._children.forEach(function (child) {child.onAwake()});
	},

	onSleep:		function () {
		this.sleep();
		this._children.forEach(function (child) {child.onSleep()});
	},

	onTouch:	function (x, y) {
		this.touch(x, y);
		this._children.forEach(function (child) {child.onTouch(x, y)});
	},

	onRelease:	function (x, y) {
		this.release(x, y);
		this._children.forEach(function (child) {child.onRelease(x, y)});
	},

	onEnter:	function (x, y) {
		this.enter(x, y);
		this._children.forEach(function (child) {child.onEnter(x, y)});
	},

	onExit:		function (x, y) {
		this.exit(x, y);
		this._children.forEach(function (child) {child.onExit(x, y)});
	},

	onKeyDown:	function (key)  {
		this.keyDown(key);
		this._children.forEach(function (child) {child.onKeyDown(key)});
	},

	onKeyUp:	function (key)  {
		this.keyUp(key);
		this._children.forEach(function (child) {child.onKeyUp(key)});
	},
};