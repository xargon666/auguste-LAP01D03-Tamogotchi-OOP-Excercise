class Pet {
    constructor(name) {
        this.name = name;
        this.happiness = 5;
        this.hunger = 5;
    }
    play() { this.happiness += 1 };
    feed() { this .hunger += 1 };
    get healthCheck(){
        return `\n\n ${this.name} has a happiness of ${this.happiness} and a hunger of ${this.hunger}`;
    }
}
console.log('\n\n\n Hello! Welcome to Tamagotchi, let\'s meet your new friend!')
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('\n\n What will you name your pet? \t', function (name) {
    let pet1 = new Pet(name)
    console.log(`\n\n ${name} is your new Pet!`);
    question();
    function question() {rl.question(`\n What will you do with ${name}? You can "feed", "play", "check" or "leave"! \t`, function (userInput) {
        // userInput = userIn;
        if (userInput === 'play') {
            pet1.play()
            console.log(`\n\n You have just played with ${name}!`)
            question();
        }
        else if (userInput === 'feed') {
            pet1.feed();
            console.log(`\n\n You have just fed ${name}!`)
            question();
        }
        else if (userInput === 'check') {
            console.log(pet1.healthCheck);
            question();
        }
        else if (userInput === 'leave'){
            rl.close();
        }
        else {
            console.log('\n\n That isn\'t something you can do, try again!');
            question();
        }
    });
    }
    rl.on('close', function () {
      console.log(`\n\n Bye Bye ${name} !!! \n`);
      process.exit(0);
    });
})