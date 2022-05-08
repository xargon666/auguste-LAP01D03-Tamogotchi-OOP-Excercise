console.log(`Welcome to the Tamogotchi game!`);
const readline = require("readline");
const rl = readline.createInterface({
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
      return `${val} is not a valid name!`;
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
    this.hunger(fVal) // Feeds the beast!
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
    result = ""
    switch (true) {
      case this._happiness < 1:
        this._happiness += 3;
        result = `${this._strName} is WAY happier!`
        break;
      case this._happiness < 3:
        this._happiness += 2;
        result = `${this._strName} is much happier!`
        break;
      case this._happiness < 10:
        this._happiness++ 
        result = `${this._strName} is happy!`
        break;
      default:
        result = `${this._strName} is as happy as it can be! You are a good owner!`
        break;
    }
  }
}
const tamogotchi = new Pet("", 1, 1);

// class Car {
//     constructor(name, year) {
//       this.name = name;
//       this.year = year;
//     }
//     age(x) {
//       return x - this.year;
//     }
//   }

//   let date = new Date();
//   let year = date.getFullYear();

//   let myCar = new Car("Ford", 2014);
//   document.getElementById("demo").innerHTML=
//   "My car is " + myCar.age(year) + " years old.";
