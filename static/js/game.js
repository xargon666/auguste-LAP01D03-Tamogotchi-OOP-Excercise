const Pet = require('./pet.js')
const ui = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

class TamogotchiGame {
  run() {
    console.clear();
    console.log(`Welcome to the Tamogotchi game!\n\n`);
    this.question1();
  }

  question1() {
    ui.question("What is your new Tamogotchi called?\n", (input) => {
      try {
        tamogotchi.strName = input;
      } catch (err) {
        this.error(err);
        this.question1();
      }
      this.options();
    });
  }
  options() {
    ui.question(`Choose from the following options:

    1. Check your Tamogotchi's vital stats.
    2. Feed your Tamogotchi.
    3. Play with your Tamogotchi
    4. Give the Tamogotchi medicine.
    5. Give your Tamogotchi to your mum to look after while you go to school.
    
    Option: `,
      (input) => {
        try {
          switch (parseInt(input)) {
            case 1:
              console.log(`
${tamogotchi.strName}
${tamogotchi.happiness}
${tamogotchi.hunger}
              `);
              // add get/set sickness to Pet class
              break;
            case 2:
              console.clear();
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
                        break;
                      case 2:
                        console.clear();
                        console.log(tamogotchi.feed("potato"));
                        break;
                      default:
                        throw new Error(`${input} was an invalid choice`);
                        
                    } 
                  } catch (err) {
                    // end case 2 try
                    this.error(err);
                  } 
                } 
              ); // close case 2 question
              break;
            case 3:
              break;
            case 4:
              break;
            case 5:
              break;
            default:
              throw new Error(`${input} was an invalid choice`);
          } 
        } catch (err) {
          this.error(err);
        } 
        this.contine();   
      } 
    ); // close question
  } // end options

  contine(){
    console.log(`
    
    Press any key to continue...

    `)
    
    process.stdin.once('data',()=>{
      console.clear();
      this.options();
    })
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
