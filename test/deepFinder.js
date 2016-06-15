'use strict';

const fpt = require( '../index.js' );
const test = require( 'tape' );

test( 'DEEPFINDER: exports deepFinder method', t => {
    t.ok( fpt.deepFinder, 'has deepFinder export' );
    t.equal( typeof fpt.deepFinder, 'function', 'deepFinder is a function' );
    t.end();
} );

test( 'DEEPFINDER: finds strings that start with a', t => {
    const input = [ 'ant', 'baby', [ 'apple', 'banana', 'carrot' ], {
        foo: 'aardvark'
    }, 'allegory' ];
    const result = fpt.deepFinder( input, value => /^a/i.test( value ) );

    t.ok( result, 'generated a result' );
    t.deepEqual( result, [ 'ant', 'apple', 'aardvark', 'allegory' ], 'result is correct' );
    t.end();
} );

test( 'DEEPFINDER: returns empty array if input is empty', t => {
    const input = [];
    const result = fpt.deepFinder( input, value => /^a/i.test( value ) );

    t.ok( result, 'generated a result' );
    t.deepEqual( result, [], 'result is correct' );
    t.end();
} );

test( 'DEEPFINDER: finds strings that start with a (nested array)', t => {
    const input = [ 'ant', 'baby', [ 'apple', 'banana', 'carrot',['apple', 'banana', 'carrot' ]], {
        foo: 'aardvark'
    }, 'allegory' ];
    const result = fpt.deepFinder( input, value => /^a/i.test( value ) );

    t.ok( result, 'generated a result' );
    t.deepEqual( result, [ 'ant', 'apple', 'apple','aardvark', 'allegory' ], 'result is correct' );
    t.end();
} );

test( 'DEEPFINDER: finds strings that start with a (nested array in object)', t => {
    const input = [ 'ant', 'baby', [ 'apple', 'banana', 'carrot',['apple', 'banana', 'carrot' ]], {
        foo: 'aardvark',bar : ['all','big']
    }, 'allegory' ];
    const result = fpt.deepFinder( input, value => /^a/i.test( value ) );

    t.ok( result, 'generated a result' );
    t.deepEqual( result, [ 'ant', 'apple', 'apple','aardvark','all', 'allegory' ], 'result is correct' );
    t.end();
} );
