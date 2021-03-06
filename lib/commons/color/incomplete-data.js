/* global color */

/**
 * API for handling incomplete color data
 */
color.incompleteData = (function() {
	var data = {};
	return {
		/**
		 * Store incomplete data by key with a string value
		 * @param {String} key 						Identifier for missing data point (fgColor, bgColor, etc.)
		 * @param {String} reason 				Missing data reason to match message template
		 */
		set: function(key, reason) {
			if (typeof key !== 'string') {
				throw new Error('Incomplete data: key must be a string');
			}
			if (reason){
				data[key] = reason;
			}
		},
		/**
		 * Get incomplete data by key
		 * @param {String} key 	Identifier for missing data point (fgColor, bgColor, etc.)
		 * @return {String} String for reason we couldn't tell
		 */
		get: function(key) {
			return data[key];
		},
		/**
		 * Clear incomplete data on demand
		 */
		clear: function() {
			data = {};
		}
	};
})();
