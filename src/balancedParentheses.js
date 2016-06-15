'use strict';

/*
 * balancedParentheses
 *
 * Takes an input string and returns true or false depending on if the string
 * has balanced parentheses.
 *
 * Eg:
 *
 *   input: '(x + y)'
 *   returns: true
 *
 *   input: '(x + y'
 *   returns: false
 *
 *   input: 'foo bar baz'
 *   returns: false
 *
 *   input: ''
 *   returns: false
 */
module.exports = (input) => {
  // 0. make necessary checks for input validity
  // 1. iterate on the input string
  // 2. check if character is either '(' or ')'
  // 3. if character ='(' then increment balanced
  // 4. if charatcer = ')' then decrement balanced
  // 5. if balanced = 0 then return true else false
  if (typeof input !== 'string' || input.length == 0 || input === undefined || input == null)
    return false;

  var balanced = 0;
  var isParenthesesExist=false;
  for (var charIndex = 0; charIndex < input.length; charIndex++) {
    if (input[charIndex] == ')') {
      balanced++;
      isParenthesesExist=true;
    }
    if (input[charIndex] == '(') {
      balanced--;
      isParenthesesExist=true;
    }
  }
  return (balanced == 0 && isParenthesesExist) ? true : false;
};
