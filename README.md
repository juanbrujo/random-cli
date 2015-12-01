# random CLI

*NodeJS Command Line Interface to select randomly from given list or range*

[![npm version](https://badge.fury.io/js/%40juanbrujo%2Frandom-cli.svg)](https://badge.fury.io/js/%40juanbrujo%2Frandom-cli)

## Commands:

```
-r, --range <int>..<int>            // outputs random integer between 2 integers
-l, --list <elem1>,<elem2>,<elemN>   // outputs random from list of elements
-p, --password <length (int)>       // outputs a random string from a map of characters
```

## Use:

```
$ node bin/random-cli.js -r 12..20          // ✔ Random from range: 15
$ node bin/random-cli.js -l uno,dos,tres    // ✔ Random from list: "tres"
$ node bin/random-cli.js -p 8               // ✔ Random password: "bM8bkJjk"
```

## Installation:

### Locally: 

Clone this repo and use it through node:

```
$ git clone https://github.com/juanbrujo/random-cli
$ cd random-cli
$ node bin/random-cli.js <option>
```

### Globally 👍 (recommended)

```
$ sudo npm install @juanbrujo/random-cli -g
$ random <option>
```

### TO-DO:
- <s>global npm installation</s>
- multiple results (more than one)

