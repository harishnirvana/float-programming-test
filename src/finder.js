'use strict';

/*
 * finder
 *
 * Takes an input and a test function and returns any values in
 * the input that pass the test.
 *
 * Eg:
 *
 *   input: [ 'ant', 'baby', [ 'apple', 'banana', 'carrot' ], { foo: 'aardvark' }, 'allegory' ]
 *   test: value => /^a/i.test( value )
 *   returns: [ 'ant', 'allegory' ]
 *
 */
module.exports = (input, test) => {
  if (input == null)
    throw "input cannot be null";
  if (test == null)
    throw "test cannot be null";

  var result = [];
  for (var index = 0; index < input.length; index++) {
    var element = input[index];
    if (typeof element === 'string' && test(element))
      result.push(element);
  }
  return result;
};
