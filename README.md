Redux flask for usign with flowable data.
--
# Vesion
Experimental

# Getting started
First, to use it you need [flowable.js](https://github.com/morulus/flowable) library.

# Install
```terminal
npm install flowable-redux
```

# Usage
Use redux flask with boiler() method of flow. After that will be the access method dispatch().
```
var Flowable = require('flowable');
var redux = require('flowable-redux');

var store = Flowable({
	status: 'Unready'
})
.boiler(redux);

store.dispatch(actionDoReady);

store.pipe(updateView);
```

For more information about how-to-use flowable methodology, read [here](https://github.com/morulus/flowable)

# Author
Vladimir Kalmykov

# License
MIT