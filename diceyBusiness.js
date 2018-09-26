

let linebreak = document.createElement('br');
linebreak.id = 'linebreak';
document.body.appendChild(linebreak);
let btn = document.getElementById('genDie');
btn.addEventListener('click', newDie);
let rollBtn = document.getElementById('rollDie');
rollBtn.addEventListener('click', rollDie)

class Die {
    constructor() {
        this.die = document.createElement('div');
        document.body.appendChild(this.die);
        this.die.className = 'randomDie';
        this.die.style.cssFloat = 'left';
        this.value = 0;
        this.roll()
    }

    // roll() generates random integer 1-6, sets the property value, updates the div w/ new value
    roll() {
        this.value = Math.floor(Math.random() * (7 - 1)) + 1;
        this.die.textContent = this.value;
        
    }

    
}
function newDie() {
    let die1 = new Die();
}

function reroll() {
    let randomDie = document.getElementsByClassName('randomDie');
    let rollDie = document.getElementById('rollDie');
    rollDie.addEventListener('click', function() {
        Die.roll(randomDie)
    });
}
