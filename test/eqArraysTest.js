const eqArrays = require('../head')
const assertEqual = require('../assertEqual')

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);