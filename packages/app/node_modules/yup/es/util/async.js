export function asCallback(promise, callback) {
  promise.then(function (result) {
    return callback(null, result);
  }, callback);
}
export var once = function once(cb) {
  var fired = false;
  return function () {
    if (fired) return;
    fired = true;
    cb.apply(void 0, arguments);
  };
};
export function parallel(fns, cb) {
  var callback = once(cb);
  var count = fns.length;

  if (count === 0) {
    return void callback(null, []);
  }

  var results = new Array(count);

  var _loop = function _loop(i) {
    var idx = i;
    var fn = fns[i];
    fn(function (err, value) {
      if (err) return callback(err);
      results[idx] = value;
      if (--count <= 0) callback(null, results);
    });
  };

  for (var i = 0; i < fns.length; i++) {
    _loop(i);
  }
}
export function settled(fns, cb) {
  var callback = once(cb);
  var count = fns.length;

  if (count === 0) {
    return void callback(null, []);
  }

  var results = new Array(fns.length);

  var _loop2 = function _loop2(i) {
    var idx = i;
    var fn = fns[i];
    fn(function (err, value) {
      results[idx] = err ? {
        fulfilled: false,
        value: err
      } : {
        fulfilled: true,
        value: value
      };
      if (--count <= 0) callback(null, results);
    });
  };

  for (var i = 0; i < fns.length; i++) {
    _loop2(i);
  }
}