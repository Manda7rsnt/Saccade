// Various global utility functions

// Shim for arrays to provide the forEach method
if (typeof Array.prototype.forEach !== 'function') {
	Array.prototype.forEach = function (callback) {
		for (var i = 0; i < this.length; ++i)
			callback(this[i]);
	}
}

function SpawnObject(objectType  /*, ... */) {
	var args = Array.prototype.slice.call(arguments, 1);
	var created = objectType.create.apply(objectType, args);
	created.onAwake();
	created.onRender();
	return created;
}

function InBounds(x, y) {
	if(GAME)
		return (x >= 0 && x < GAME.w && y >= 0 && y < GAME.h);
	return true;
}

// Store and retrieve object data from grid locations
function WriteObject(x, y, object) {
	var objs = PS.data(x, y);
	if (objs === 0 || objs === undefined) {
		PS.data(x, y, [object]);
	} else if (objs instanceof Array) {
		objs.push(object);
	}
}

function GetObject(x, y) {
	if (!InBounds(x, y))
		return [];
	var objs = PS.data(x, y);
	if (objs === 0 || objs === undefined)
		return [];
	return objs;
}

function RandBetween(lo, hi) {
	return lo + Math.floor(Math.random()*(hi - lo + 1));
}

function GenerateRandomID() {
	var g = function (num) {
		var pad = "0000";
		var value = RandBetween(1, 0xFFFF).toString(16).toUpperCase();
		value = pad.slice(value.length) + value;
		return value;
	};
	return g()+g()+"-"+g()+"-"+g()+"-"+g()+"-"+g()+g()+g();
}

