'use strict';

const fpt = require( '../index.js' );
const test = require( 'tape' );

test( 'BALANCED PARENTHESES: exports balancedParentheses method', t => {
    t.ok( fpt.balancedParentheses, 'has balancedParentheses export' );
    t.equal( typeof fpt.balancedParentheses, 'function', 'balancedParentheses is a function' );
    t.end();
} );

test( 'BALANCED PARENTHESES: returns true for balanced string', t => {
    const input = '(x + y)';
    const result = fpt.balancedParentheses( input );

    t.equal( typeof result, 'boolean', 'generated a boolean result' );
    t.equal( result, true, 'result is correct' );
    t.end();
} );

test( 'BALANCED PARENTHESES: returns true for balanced string with reverse paranthesis', t => {
    const input = ')x+y(';
    const result = fpt.balancedParentheses( input );

    t.equal( typeof result, 'boolean', 'generated a boolean result' );
    t.equal( result, true, 'result is correct' );
    t.end();
} );

test( 'BALANCED PARENTHESES: returns false for unbalanced string with reverse paranthesis', t => {
    const input = ')x+y()';
    const result = fpt.balancedParentheses( input );

    t.equal( typeof result, 'boolean', 'generated a boolean result' );
    t.equal( result, false, 'result is correct' );
    t.end();
} );

test( 'BALANCED PARENTHESES: returns false for string without paranthesis', t => {
    const input = 'amazing float';
    const result = fpt.balancedParentheses( input );

    t.equal( typeof result, 'boolean', 'generated a boolean result' );
    t.equal( result, false, 'result is correct' );
    t.end();
} );

test( 'BALANCED PARENTHESES: returns false for empty string', t => {
    const input = '';
    const result = fpt.balancedParentheses( input );

    t.equal( typeof result, 'boolean', 'generated a boolean result' );
    t.equal( result, false, 'result is correct' );
    t.end();
} );

test( 'BALANCED PARENTHESES: returns false for non-string', t => {
    const input = [];
    const result = fpt.balancedParentheses( input );

    t.equal( typeof result, 'boolean', 'generated a boolean result' );
    t.equal( result, false, 'result is correct' );
    t.end();
} );

test( 'BALANCED PARENTHESES: returns false for null', t => {
    const input = [];
    const result = fpt.balancedParentheses( input );

    t.equal( typeof result, 'boolean', 'generated a boolean result' );
    t.equal( result, false, 'result is correct' );
    t.end();
} );
