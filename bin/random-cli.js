#!/usr/bin/env node

/*!
* random-cli
* node.js Command Line Interface to select randomly from given list or range
* https://github.com/juanbrujo/random-cli
* 2015 Jorge Epuñan | @csslab
* License: MIT
*/

var program = require('commander');
var path    = require('path');
var pkg     = require(path.join(__dirname, '../package.json'));
var howMany = 1;
var values  = { range: null, list: null, password: null };

function range(val) {
  var firstNum  = parseInt( val.split('..')[0] );
  var lastNum   = parseInt( val.split('..')[1] );
  var numbers   = [];
  var results   = [];

  for (var i = firstNum; i <= lastNum; i++) {
    numbers.push(i);
  }

  if (howMany > numbers.length) howMany = numbers.length;

  for (var i = 0; i < howMany; i++) {
    var index = Math.floor(Math.random() * numbers.length);
    results.push(numbers.splice(index, 1)[0]);
  }

  return results.join(', ');
}

function list(val) {
  var newList = [];
  var values = val.split(',');
  var results = [];

  values.forEach(function(l) {
    newList.push(l);
  });

  if (howMany > newList.length) howMany = newList.length;

  for (var i = 0; i < howMany; i++) {
    var index = Math.floor(Math.random() * newList.length);
    results.push(newList.splice(index, 1)[0]);
  }

  return results.join(', ');
}

function quantity(val) {
  howMany = val;
}

function password(val) {
  var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOP1234567890';
  var result = '';
  var results = [];

  for (var i = 0; i < howMany; i++) {
    for (var x = 0; x < val; x++) {
      var i = Math.floor( Math.random() * chars.length );
      result += chars.charAt(i);
    }
    results.push(result);
  }

  return results.join(', ');
}

program
  .version( pkg.version )
  .usage( '[options] <file ...>' )
  .option( '-r, --range <from>..<to>', 'A range')
  .option( '-l, --list <item1>,<item2>,<itemN>', 'A list comma separated')
  .option( '-p, --password <length>', 'Length')
  .option( '-q, --quantity <quantity>', 'Number items to output', quantity);

program.parse( process.argv );

if( program.range ) values.range = range(program.range);
if( program.list ) values.list = list(program.list);
if( program.password ) values.password = password(program.password);

if( Boolean(values.range) ) {
  console.log(' ✔  Random from range: %j', values.range);
}

if( Boolean(values.list) ) {
  console.log(' ✔  Random from list: %j', values.list);
}

if( Boolean(values.password) ) {
  console.log(' ✔  Random passwords: %j', values.password);
}
