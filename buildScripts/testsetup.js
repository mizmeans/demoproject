//This file will not be transpiled. Use CommonJS and ES5

//Register babel to transpile before Mocha runs
require('babel-register')();

//Disable webpack features for Mocha
require.extensions['.css']=function(){};

