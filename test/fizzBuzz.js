'use strict';

const fpt = require( '../index.js' );
const test = require( 'tape' );

test( 'FIZZBUZZ: exports fizzBuzz method', t => {
    t.ok( fpt.fizzBuzz, 'has fizzBuzz export' );
    t.equal( typeof fpt.fizzBuzz, 'function', 'fizzBuzz is a function' );
    t.end();
} );

test( 'FIZZBUZZ: returns a proper array based on input length', t => {
    const result = fpt.fizzBuzz( 10 );

    t.ok( result, 'generated a result' );
    t.deepEqual( result, [ 1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz' ], 'result is correct' );
    t.end();
} );

test( 'FIZZBUZZ: returns a empty array based on 0 length', t => {
    const result = fpt.fizzBuzz( 0 );

    t.ok( result, 'generated a result' );
    t.deepEqual( result, [], 'result is correct' );
    t.end();
} );


test( 'FIZZBUZZ: returns a proper array based on input length < 3', t => {
    const result = fpt.fizzBuzz( 2 );

    t.ok( result, 'generated a result' );
    t.notDeepEqual( result, [ 1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz' ], 'result is correct' );
    t.end();
} );
