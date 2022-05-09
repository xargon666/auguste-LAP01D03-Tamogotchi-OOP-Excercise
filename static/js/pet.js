class Pet {
    constructor(_strName, _happiness, _hunger) {
      (this._strName = _strName),
        (this._happiness = _happiness),
        (this._hunger = _hunger),
        (this._alive = true),
        (this._sick = false);
    }
  // ******************************* Name *******************************
    get strName() {
      if (!this._strName) {
        return "Tamogotchi has not been given a name!";
      }
      if (this._strName) {
        return `The Tamogotchi is called ${this._strName}`;
      }
    }
    
    set strName(val) {
      if (!isNaN(parseInt(val))) {
        throw new Error(`${val} is not a valid name!`);
      }
      switch (true) {
        case !this._strName && val != "":
          this._strName = val;
          console.log(`Tamogotchi has been named ${val}`);
          return;
        case this._strName && val != "":
          this._strName = val;
          console.log(`Tamogotchi has been renamed ${val}`);
          return;
        default:
          console.log("Leaving name blank...");
          break;
      }
    }
  // *************************** Happiness ******************************
    get happiness() {
      if (!this._strName) {
        switch (this._happiness) {
          case this._happiness > 9:
            return `
  the unnamned tamogotchi is super happy!
  Happiness rating: ${this._happiness}`;
          case this._happiness > 5:
            return `
            the unnamned tamogotchi is happy! 
  Happiness rating: ${this._happiness}`;
          default:
            return `
  the unnamned tamogotchi is dangerously unhappy! 
  Happiness rating: ${this._happiness}
  Consider naming your pet...`;
        }
      }
      if (this._strName) {
        switch (this._happiness) {
          case this._happiness > 9:
  return `
  ${this._strName} is super happy!
  Happiness rating: ${this._happiness}`;
          case this._happiness > 5:
  return `
  ${this._strName} is happy!
  Happiness rating: ${this._happiness}`;
          default:
  return `
  ${this._strName} is dangerously unhappy!
  Happiness rating: ${this._happiness}`;
        }
      }
    }
  // ******************************* Hunger *********************************
    get hunger() {
      return `${this._strName}'s hunger level: ${this._hunger}`;
    }
    set hunger(val) {
      switch (val) {
        case !val:
          return `${val} is not a valid number`;
        case val > this._hunger:
          this._hunger = 0;
          return `${this._strName} is completely full!`;
        default:
          this._hunger -= val;
          return this.hunger;
      }
    }
    // ******************************** Feed **********************************
    feed(food) {
      let result = ""
      let fVal = 0;
      result += `You fed ${this._strName} some ${food[0].toUpperCase() + food.slice(1)}!\n`;
      switch (food) { // define food value
        case "pizza":
          fVal = 2;
          break;
        case "potato":
          fVal = 1;
          break;
        default:
          throw new Error("Unknown Food!")
        }
      this.hunger = fVal; // feed the beast!
      switch (true) {
        case this._hunger < 10:
          result += `Yum! Hunger level: ${this._hunger}`;
          break;
        case this._hunger < 3:
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
      return result
    }
    // *************************** Play ***************************************
    play() {
      console.log("Playing with Tamogotchi...");
      result = "";
      switch (true) {
        case this._happiness < 1:
          this._happiness += 3;
          result = `${this._strName} is much happier!`;
          break;
        case this._happiness < 3:
          this._happiness += 2;
          result = `${this._strName} is very happy!`;
          break;
        case this._happiness < 10:
          this._happiness++;
          result = `${this._strName} is SUPER happy!`;
          break;
        default:
          result = `${this._strName} is as happy as it can be! You are a good owner!`;
          break;
      }
    }
  
    updateStats(){
      
    }
  } // end of Pet class
module.exports = Pet
