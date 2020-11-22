import ValidationError from '../ValidationError';
import { once } from './async';
export default function runTests(options, cb) {
  var endEarly = options.endEarly,
      tests = options.tests,
      args = options.args,
      value = options.value,
      errors = options.errors,
      sort = options.sort,
      path = options.path;
  var callback = once(cb);
  var count = tests.length;
  if (!count) return callback(null, value);
  var nestedErrors = [];
  errors = errors ? errors : [];

  for (var i = 0; i < tests.length; i++) {
    var test = tests[i];
    test(args, function finishTestRun(err) {
      if (err) {
        // always return early for non validation errors
        if (!ValidationError.isError(err)) {
          return callback(err);
        }

        if (endEarly) {
          err.value = value;
          return callback(err);
        }

        nestedErrors.push(err);
      }

      if (--count <= 0) {
        if (nestedErrors.length) {
          if (sort) nestedErrors.sort(sort); //show parent errors after the nested ones: name.first, name

          if (errors.length) nestedErrors.push.apply(nestedErrors, errors);
          errors = nestedErrors;
        }

        if (errors.length) {
          callback(new ValidationError(errors, value, path));
          return;
        }

        callback(null, value);
      }
    });
  }
}