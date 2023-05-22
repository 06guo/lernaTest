'use strict';

const animal = require('..');
const assert = require('assert').strict;

assert.strictEqual(animal(), 'Hello from animal');
console.info('animal tests passed');
