let dieContainer = document.createElement('div');
dieContainer.id =  'dieContainer';
document.body.appendChild(dieContainer);
let linebreak = document.createElement('br');
linebreak.id = 'linebreak';
document.body.appendChild(linebreak);
let btn = document.getElementById('genDie');
let rollBtn = document.getElementById('rollDie');
let allDie = [];
diceAmount.addEventListener('click', () => sumDice());  
btn.addEventListener('click', () => makeDice());

class Die {
    constructor() {
        this.die = document.createElement('div');
        dieContainer.appendChild(this.die);
        this.die.className = 'randomDie';
        this.die.textContent = this.value;
        this.value = 0;
        this.index = allDie.length
        this.roll();
        rollBtn.addEventListener('click', () => this.roll());
        this.die.addEventListener('dblclick', () => this.removeDie())
        this.die.addEventListener('click', () => this.roll())
    }

    roll() {
        this.value = randomVal();
        this.die.textContent = this.value;
    }

    removeDie() {
        allDie = allDie.filter(die => die.index != this.index)
        this.die.remove();
    }
}

function makeDice() {
    let eachDie = new Die();
    allDie.push(eachDie);
}

function sumDice() {
    let dieSum = 0;
    allDie.forEach(randomDie => dieSum += randomDie.value);
    alert(dieSum)
}

function randomVal() {
    return Math.floor(Math.random() * (7 - 1)) + 1;
}


