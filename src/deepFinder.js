'use strict';

/*
 * deepFinder
 *
 * Takes an input and a test function and returns any values
 * in the input *recursively* that pass the test.
 *
 * Eg:
 *
 *   input: [ 'ant', 'baby', [ 'apple', 'banana', 'carrot' ], { foo: 'aardvark' }, 'allegory' ]
 *   test: value => /^a/i.test( value )
 *   returns: [ 'ant', 'apple', 'aardvark', 'allegory' ]
 *
 */

module.exports = (input, test) => {
  if (input == null)
    throw "input cannot be null";
  if (test == null)
    throw "test cannot be null";
    
  var result = [];
  // Recursively traverse the input for data type string, array, object
  // push the element into result if the test callback passes
  function search(inputObject) {
    for (var property in inputObject) {
      var element = inputObject[property];
      if (typeof element === 'string' && test(element))
        result.push(element);
      if (element !== null && typeof element === 'object')
        search(element);
    }
  }
  search(input);
  return result;
};
