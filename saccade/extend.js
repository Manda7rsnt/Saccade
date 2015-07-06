// Object.prototype.extend = function (extension) {
//     var hasOwnProperty = Object.hasOwnProperty;
//     var object = Object.create(this);

//     for (var property in extension)
//         if (hasOwnProperty.call(extension, property) ||
//             typeof object[property] === "undefined")
//                 object[property] = extension[property];
//     return object;
// };

Object.prototype.extend = function () {
	var hasOwnProperty = Object.hasOwnProperty;
	var object = Object.create(this);
	var length = arguments.length;
	var index = length;
	
	while (index) {
		var extension = arguments[length - (index--)];

		for (var property in extension)
			if (hasOwnProperty.call(extension, property) ||
				typeof object[property] === "undefined")
					object[property] = extension[property];
	}

	return object;
};