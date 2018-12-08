# never-give-up [![npm version](https://badge.fury.io/js/never-give-up.svg)](https://badge.fury.io/js/never-give-up) [![Dependency Status](https://david-dm.org/rrudol/never-give-up.svg)](https://david-dm.org/rrudol/never-give-up) [![devDependency Status](https://david-dm.org/rrudol/never-give-up/dev-status.svg)](https://david-dm.org/rrudol/never-give-up#info=devDependencies) [![Build Status](https://travis-ci.org/rrudol/never-give-up.svg?branch=master)](https://travis-ci.org/rrudol/never-give-up)

A module which force async functions to return value, by repeating them infinite number of times, ignoring undefined values and exceptions.

Could be useful while using crappy systems, but in fact **you shouldn't use this package**.

## Instalation

```sh
npm install never-give-up --save
```

## Usage

```javascript
const { neverGiveUp } = require("never-give-up");

async function russianRoulette() {
  if (Math.floor(Math.random() * 100) === 5) {
    return true;
  }
}

function veryImportantCalculations() {
  // const value = await russianRoulette(); <- but why to take such risk?
  const value = await neverGiveUp(russianRoulette);

  if (value === 5) {
    console.log('You\'re lucky!');
  } else {
    console.log('You fired!'); // It will never run, how cool is that?
  }
}
```

## License

[MIT](http://vjpr.mit-license.org)
