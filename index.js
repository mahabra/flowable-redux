function resolveReducerResult(reducer, data, action) {
	var result = reducer(data, action);
	if ("object"===typeof result) {
		for (var prop in result) {
			if (result.hasOwnProperty(prop)) {
				if ("function"===typeof result[prop]) result[prop] = result[prop](data[prop], action);
			}
		}
	}
	return result;
}

module.exports = function reduxReagent(reducers) {
	return function(data, resolve, reject) {
		var getState = this.read.bind(this);
		var dispatch = function(action) {
			if ("function"===typeof action) {
				action(dispatch, getState);
			} else {
				
				resolve(resolveReducerResult(reducers, data, action));
			}
		}
		resolve(data);
		this.dispatch = dispatch;
		this.getState = getState;
	}
}