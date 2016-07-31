module.exports = function reduxBoiler(reducers) {
	return function(data, resolve, reject) {
		var getState = this.read.bind(this);
		var dispatch = function(action) {
			if ("function"===typeof action) {
				action(dispatch, getState);
			} else {
				resolve(reducers(data, action));
			}
		}
		resolve(data);
		this.dispatch = dispatch;
		this.getState = getState;
	}
}