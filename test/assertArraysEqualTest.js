const assertArraysEqual = require('../assertArraysEqual')
const eqArrays = require('../eqArrays')

eqArrays(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]));