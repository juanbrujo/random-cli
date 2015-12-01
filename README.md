# random CLI

*NodeJS CLI to select randomly from given list or range*

## Commands:

```
-r, --range <int>..<int>            // outputs random integer between 2 integers
-l, --list <elem1>,<elem>,<elemN>   // outputs random from list of elements
-p, --password <length (int)>       // outputs a random string from a map of characters
```

## Use:

```
$ node bin/random-cli.js -r 12..20          // ✔ Random from range: 15
$ node bin/random-cli.js -l uno,dos,tres    // ✔ Random from list: "tres"
$ node bin/random-cli.js -p 8               // ✔ Random password: "bM8bkJjk"
```

## Installation:

Clone this repo and use it locally:

```
$ git clone https://github.com/juanbrujo/random-cli
$ cd random-cli
$ node bin/random-cli.js <option>
```

### TO-DO:
- global npm installation
- multiple results (more than one)

