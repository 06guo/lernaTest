'use strict';

const dog = require('..');
const assert = require('assert').strict;

assert.strictEqual(dog(), 'Hello from dog');
console.info('dog tests passed');
