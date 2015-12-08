# random CLI

*node.js Command Line Interface to select randomly from given list or range*

[![npm version](https://badge.fury.io/js/%40juanbrujo%2Frandom-cli.svg)](https://badge.fury.io/js/%40juanbrujo%2Frandom-cli)

## Commands:

```
-r, --range <int>..<int>            // outputs random integer between 2 integers
-l, --list <elem1>,<elem2>,<elemN>	// outputs random from list of elements
-p, --password <length (int)>       // outputs a random string from a map of characters
-q, --quantity <quantity (int)>		// [option] items to output
```

## Use:

```
$ random -r 12..20 -q 3     // ✔ Random from range: 15,17,20
$ random -l uno,dos,tres    // ✔ Random from list: "tres"
$ random -p 8               // ✔ Random password: "bM8bkJjk"
```

## Installation:

### Globally (recommended 👍)

```
$ sudo npm install @juanbrujo/random-cli -g
// use
$ random <option>
```


### Locally: 

Clone this repo and use it through node:

```
$ git clone https://github.com/juanbrujo/random-cli
$ cd random-cli
$ npm install
// use
$ node bin/random-cli.js <option>
```


### TO-DO:
- <s>global npm installation</s>
- <s>multiple results (more than one)</s> (thanks [@rotvulpix](https://github.com/rotvulpix) ⭐️)
- <s>check for different results for more than 1 output</s> (thanks [@lgaticaq](https://github.com/lgaticaq) 🍺)

