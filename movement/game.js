// game.js for Perlenspiel 3.1
var GAME;

PS.init = function( system, options ) {
	"use strict";
	GAME = SpawnObject(MovementScene);
};

PS.touch = function( x, y, data, options ) {
	"use strict";
	GAME.onTouch(x, y);
};

PS.release = function( x, y, data, options ) {
	"use strict";
	GAME.onRelease(x, y);
};

PS.enter = function( x, y, data, options ) {
	"use strict";
	GAME.onEnter(x, y);
};

PS.exit = function( x, y, data, options ) {
	"use strict";
	GAME.onExit(x, y);
};

PS.exitGrid = function( options ) {
	"use strict";
};

PS.keyDown = function( key, shift, ctrl, options ) {
	"use strict";
	GAME.onKeyDown(key);
};

PS.keyUp = function( key, shift, ctrl, options ) {
	"use strict";
	GAME.onKeyUp(key);
};

PS.input = function( sensors, options ) {
	"use strict";
};

