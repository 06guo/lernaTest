'use strict';

const cat = require('..');
const assert = require('assert').strict;

assert.strictEqual(cat(), 'Hello from cat');
console.info('cat tests passed');
