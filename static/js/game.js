const Pet = require("./pet");
const ui = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

class TamogotchiGame {
  run() {
    console.clear();
    console.log(`Welcome to the Tamogotchi game!\n`);
    this.question1();
  }

  question1() {
    ui.question("What is your new Tamogotchi called?\n", (input) => {
      try {
        tamogotchi.strName = input;
        this.contine();
      } catch (err) {
        this.error(err);
        this.question1();
      }
    });
  }
  options() {
    ui.question(
      `Choose from the following options:

    1. Check your Tamogotchi's vital stats.
    2. Feed Tamogotchi.
    3. Play with Tamogotchi
    4. Give Tamogotchi medicine.
    5. Give your Tamogotchi to your mum to look after while you go to school.
    
    Option: `,
      (input) => {
        try {
          switch (parseInt(input)) {
            case 1: // Check your Tamogotchi's vital stats.
              console.log(
                `${tamogotchi.strName}
${tamogotchi.happiness}
${tamogotchi.hunger}
`
              );
              // add get/set sickness to Pet class
              break;
            case 2: // Feed Tamogotchi.
              console.clear();
              this.feed()
              break;
            case 3: // Play with Tamogotchi
              break;
            case 4: // Give Tamogotchi medicine.
              break;
            case 5: // Give your Tamogotchi to your mum
              break;
            default:
              throw new Error(`${input} was an invalid choice`);
              break;
          }
        } catch (err) {
          this.error(err);
        }
      }
    ); // close question
  } // end options

  feed() {
    ui.question(
      `What do you want to feed the Tamogotchi?
      
          1. Pizza
          2. Potato
      
          Option: `,
      (input) => {
        try {
          switch (parseInt(input)) {
            case 1:
              console.clear();
              console.log(tamogotchi.feed("pizza"));
              this.contine();
              break;
            case 2:
              console.clear();
              console.log(tamogotchi.feed("potato"));
              this.contine();
              break;
            default:
              throw new Error(`${input} was an invalid choice`);
              break;
          }
        } catch (err) {
          // end case 2 try
          this.error(err);
        }
      }
    ); // close case 2 question
  }

  

  contine() {
    console.log(`
    
    Press any key to continue...

    `);

    process.stdin.once("data", () => {
      console.clear();
      this.options();
    });
  }

  error(err) {
    console.log(`
    ERROR:
    ${err.name}: ${err.message}
    ${err.stack}
    `);
  }
  errorAndClose(err) {
    console.log(`
    MAJOR ERROR:
    ${err.message}
    
    Goodbye!`);
    ui.close();
  }
} // end of startGame class

const tamogotchi = new Pet("", 3, 10);

module.exports = { TamogotchiGame };
