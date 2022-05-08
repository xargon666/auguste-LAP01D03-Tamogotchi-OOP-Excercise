(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],3:[function(require,module,exports){
(function (process){(function (){
/**
 * @jest-environment jsdom
 */
console.log(`Welcome to the Tamogotchi game!\n\n`);

const ui = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
class Pet {
  constructor(_strName, _happiness, _hunger) {
    (this._strName = _strName),
      (this._happiness = _happiness),
      (this._hunger = _hunger),
      (this._alive = true);
  }
  get strName() {
    if (!this._strName) {
      return "Tamogotchi has not been given a name!";
    }
    if (this._strName) {
      return `The Tamogotchi is called ${this._strName}`;
    }
  }
  set strName(val) {
    if (typeof val != "string") {
      throw new Error(`${val} is not a valid name!`);
    }
    if (!this._strName) {
      this._strName = val;
      console.log("naming...");
      return `Tamogotchi has been named ${val}`;
    }
    if (this._strName) {
      this._strName = val;
      console.log("renaming...");
      return `Tamogotchi has been renamed ${val}`;
    }
  }
  get happiness() {
    if (!this._strName) {
      switch (this._happiness) {
        case this._happiness > 9:
          return `the unnamned tamogotchi is super happy!
Happiness rating: ${this._happiness}`;
        case this._happiness > 5:
          return `the unnamned tamogotchi is happy! 
Happiness rating: ${this._happiness}`;
        default:
          return `the unnamned tamogotchi is dangerously unhappy! 
Happiness rating: ${this._happiness}
Consider naming your pet...`;
      }
    }
    if (this._strName) {
      switch (this._happiness) {
        case this._happiness > 9:
          return `${this._strName} is super happy!
Happiness rating: ${this._happiness}`;
        case this._happiness > 5:
          return `${this._strName} is happy!
Happiness rating: ${this._happiness}`;
        default:
          return `${this._strName} is dangerously unhappy!
Happiness rating: ${this._happiness}`;
      }
    }
  }
  get hunger() {
    return `${this._strName} hunger level: ${this._hunger}`;
  }
  set hunger(val) {
    switch (val) {
      case !val:
        return `${val} is not a valid number`;
      case val > this._hunger:
        this.hunger = 0;
        return `${this._strName} is completely full!`;
      default:
        this._hunger -= val;
        return this.hunger;
    }
  }
  feed(food) {
    console.log("Feeding Tamogotchi...");
    let result = "";
    let fVal = 0;
    result += `You fed ${this._strName} some ${food}.\n`;
    switch (food) {
      case food === "pizza":
        value = 2;
        break;
      case food === "potato":
        value = 1;
        break;
    }
    this.hunger(fVal); // Feeds the beast!
    switch (true) {
      case hunger < 10:
        result += `Yum! Hunger level: ${this._hunger}`;
        break;
      case hunger < 3:
        result += `${this._strName} is no longer starving!\n Hunger level: ${this._hunger}`;
        break;
      default:
        result += `Hunger level is maxed out: ${this._hunger}`;
        break;
    }

    switch (true) {
      case this._hunger < 1:
        break;
      case this._hunger < 3:
        break;
      case this._hunger < 10:
        break;
      default:
        break;
    }
  }
  play() {
    console.log("Playing with Tamogotchi...");
    result = "";
    switch (true) {
      case this._happiness < 1:
        this._happiness += 3;
        result = `${this._strName} is WAY happier!`;
        break;
      case this._happiness < 3:
        this._happiness += 2;
        result = `${this._strName} is much happier!`;
        break;
      case this._happiness < 10:
        this._happiness++;
        result = `${this._strName} is happy!`;
        break;
      default:
        result = `${this._strName} is as happy as it can be! You are a good owner!`;
        break;
    }
  }
} // end of Pet class
const tamogotchi = new Pet("", 1, 1);
class TamogotchiGame {
  run() {
    console.clear();
    this.question1();
  }

  question1() {
    ui.question("What is your new Tamogotchi called?\n", (input) => {
      console.log(typeof input)
      tamogotchi.strName = input
    });
  }

  errorAndClose() {
    console.log(`ERROR:
    ${err.message}
    `);
    ui.close();
  }
} // end of startGame class

module.exports = { TamogotchiGame, Pet };

}).call(this)}).call(this,require('_process'))
},{"_process":2,"readline":1}]},{},[3]);
