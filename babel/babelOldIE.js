/** https://phabricator.babeljs.io/T3041 */
(function() {
	if (!(Object.setPrototypeOf || {}.__proto__)) {
		var nativeGetPrototypeOf = Object.getPrototypeOf;

		Object.getPrototypeOf = function(object) {
			if (object.__proto__) {
				return object.__proto__;
			} else {
				return nativeGetPrototypeOf.call(Object, object);
			}
		}
	}
})();