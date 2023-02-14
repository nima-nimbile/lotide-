const tail = require('../head')
const assertEqual = require('../assertEqual')


assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);