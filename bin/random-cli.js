#!/usr/bin/env node

/*!
 * random-cli
 * node.js Command Line Interface to select randomly from given list or range
 * https://github.com/juanbrujo/random-cli
 * 2015 Jorge Epuñan | @csslab
 * License: MIT
 */

var program = require('commander');
var crypto 	= require("crypto");
var path    = require('path');
var pkg     = require(path.join(__dirname, '../package.json'));
 
function range(val) {
  var firstNum = parseInt(val.split('..')[0]);
  var lastNum = parseInt(val.split('..')[1]);
  
  return Math.floor( Math.random() * ( lastNum - firstNum + 1 ) + firstNum ); 
}
 
function list(val) {
  var newList = [];
  var values = val.split(',');

  values.forEach(function(l){
  	newList.push(l);
  });

  return newList[Math.floor(Math.random() * newList.length)]
}

function password(val) {
	var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOP1234567890";
  var result = "";
  for (var x = 0; x < val; x++) {
      var i = Math.floor(Math.random() * chars.length);
      result += chars.charAt(i);
  }

  return result;
}
 
program
  .version(pkg.version)
  .usage('[options] <file ...>')
  .option('-r, --range <a>..<b>', 'A range', range)
  .option('-l, --list <items>', 'A list', list)
  .option('-p, --password <length>', 'Length', password)
  .parse(process.argv);

if(program.range) {
	console.log(' ✔  Random from range: %j', program.range);
}

if(program.list) {
	console.log(' ✔  Random from list: %j', program.list);
}

if(program.password) {
	console.log(' ✔  Random password: %j', program.password);
}


