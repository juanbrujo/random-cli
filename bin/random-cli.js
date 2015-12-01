#!/usr/bin/env node

/*!
* random-cli
* node.js Command Line Interface to select randomly from given list or range
* https://github.com/juanbrujo/random-cli
* 2015 Jorge Epuñan | @csslab
* License: MIT
*/

var program = require('commander');
var crypto  = require("crypto");
var path    = require('path');
var pkg     = require(path.join(__dirname, '../package.json'));
var howMany = 1;
var values  = { range: [], list: [], password: [] };

function range(val) {
  var firstNum  = parseInt( val.split('..')[0] );
  var lastNum   = parseInt( val.split('..')[1] );

  return Math.floor( Math.random() * ( lastNum - firstNum + 1 ) + firstNum );
}

function list(val) {
  var newList = [];
  var values = val.split(',');

  values.forEach(function(l){
    newList.push(l);
  });

  return newList[ Math.floor( Math.random() * newList.length ) ];
}

function quantity(val) {
  howMany = val;
}

function password(val) {
  var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOP1234567890';
  var result = '';

  for (var x = 0; x < val; x++) {
    var i = Math.floor( Math.random() * chars.length );
    result += chars.charAt(i);
  }

  return result;
}

program
  .version( pkg.version )
  .usage( '[options] <file ...>' )
  .option( '-r, --range <from>..<to>', 'A range', range )
  .option( '-l, --list <item1>,<item2>,<itemN>', 'A list comma separated', list )
  .option( '-p, --password <length>', 'Length', password )
  .option( '-q, --quantity <quantity>', 'Number items to output', quantity );

for( var i = 1; i <= howMany; i++ ) {
  program.parse( process.argv );

  if( program.range ) values.range.push( program.range );
  if( program.list ) values.list.push( program.list );
  if( program.password ) values.password.push( program.password );
}

if( Boolean(values.range.length) ) {
  console.log(' ✔  Random from range: %j', values.range);
}

if( Boolean(values.list.length) ) {
  console.log(' ✔  Random from list: %j', values.list);
}

if( Boolean(values.password.length) ) {
  console.log(' ✔  Random passwords: %j', values.password);
}
