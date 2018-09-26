class Die {
    constructor(value,) {
        this.value = value;
    
    }
    // roll() generates random integer 1-6, sets the property value, updates the div w/ new value
    roll() {
        //
    }
    
    
    function randomVal(min, max) {
   
        return Math.floor(Math.random() * (max - min)) + min;
    }
    
    let die1 = function() {
        let die = document.createElement('div');
        document.body.appendChild(die);
        die.className = 'randomDie';
        die.style.cssFloat = 'left';
        let dieFace1 = document.createElement('div');
        die.appendChild(dieFace1);
        dieFace1.className = 'dot1';
       
    };
    
    let die2 = function() {
        let die = document.createElement('div');
        document.body.appendChild(die);
        die.className = 'randomDie';
        die.style.cssFloat = 'left';
        let dieFace2 = document.createElement('div');
        die.appendChild(dieFace2);
        dieFace2.className = 'dot2';
        let dieFace7 = document.createElement('div');
        die.appendChild(dieFace7);
        dieFace7.className = 'dot7';
        
    };
    
    let die3 = function() {
        let die = document.createElement('div');
        document.body.appendChild(die);
        die.className = 'randomDie';
        die.style.cssFloat = 'left';
        let dieFace1 = document.createElement('div');
        die.appendChild(dieFace1);
        dieFace1.className = 'dot1';
        let dieFace2 = document.createElement('div');
        die.appendChild(dieFace2);
        dieFace2.className = 'dot2';
        let dieFace7 = document.createElement('div');
        die.appendChild(dieFace7);
        dieFace7.className = 'dot7';
        
    };
    
    let die4 = function() {
        let die = document.createElement('div');
        document.body.appendChild(die);
        die.className = 'randomDie';
        die.style.cssFloat = 'left';
        let dieFace2 = document.createElement('div');
        die.appendChild(dieFace2);
        dieFace2.className = 'dot2';
        let dieFace4 = document.createElement('div');
        dieFace4.className = 'dot4';
        die.appendChild(dieFace4);
        let dieFace5 = document.createElement('div');
        die.appendChild(dieFace5);
        dieFace5.className = 'dot5';
        let dieFace7 = document.createElement('div');
        die.appendChild(dieFace7);
        dieFace7.className = 'dot7';
        
    };
    
    let die5 = function() {
        let die = document.createElement('div');
        document.body.appendChild(die);
        die.className = 'randomDie';
        die.style.cssFloat = 'left';
        let dieFace1 = document.createElement('div');
        die.appendChild(dieFace1);
        dieFace1.className = 'dot1';
        let dieFace2 = document.createElement('div');
        die.appendChild(dieFace2);
        dieFace2.className = 'dot2';
        let dieFace4 = document.createElement('div');
        dieFace4.className = 'dot4';
        die.appendChild(dieFace4);
        let dieFace5 = document.createElement('div');
        die.appendChild(dieFace5);
        dieFace5.className = 'dot5';
        let dieFace7 = document.createElement('div');
        die.appendChild(dieFace7);
        dieFace7.className = 'dot7';
       
    };
    
    let die6 = function() {
        let die = document.createElement('div');
        document.body.appendChild(die);
        die.className = 'randomDie';
        die.style.cssFloat = 'left';
        let dieFace2 = document.createElement('div');
        die.appendChild(dieFace2);
        dieFace2.className = 'dot2';
        let dieFace3 = document.createElement('div');
        die.appendChild(dieFace3);
        dieFace3.className = 'dot3';
        let dieFace4 = document.createElement('div');
        dieFace4.className = 'dot4';
        die.appendChild(dieFace4);
        let dieFace5 = document.createElement('div');
        die.appendChild(dieFace5);
        dieFace5.className = 'dot5';
        let dieFace6 = document.createElement('div');
        die.appendChild(dieFace6);
        dieFace6.className = 'dot6';
        let dieFace7 = document.createElement('div');
        die.appendChild(dieFace7);
        dieFace7.className = 'dot7';
       
    };
    
    // create a div, call roll method, and put div on the screen
    function newDie() {
        let randomNum = randomVal(1, 7);
        console.log(randomNum)
        let dieNum = 'die' + randomNum;
        if (dieNum == 'die1') {
            return die1();
        }
        if (dieNum == 'die2') {
            return die2();
        }
        if (dieNum == 'die3') {
            return die3();
        }
        if (dieNum == 'die3') {
            return die4();
        }
        if (dieNum == 'die4') {
            return die2();
        }
        if (dieNum == 'die5') {
            return die5();
        }
        if (dieNum == 'die6') {
            return die6();
        }
        
    }




    .dot1 {
        position: absolute;
        left: 42px;
        top: 42px;
        width: 16px;
        height: 16px;
        background: black;
        -moz-border-radius: 50px;
        -webkit-border-radius: 50px;
        border-radius: 50px;
    }
    
    .dot2 {
        position: absolute;
        left: 17px;
        top: 17px;
        width: 16px;
        height: 16px;
        background: black;
        -moz-border-radius: 50px;
        -webkit-border-radius: 50px;
        border-radius: 50px;
    }
    
    .dot3 {
        position: absolute;
        left: 17px;
        top: 42px;
        width: 16px;
        height: 16px;
        background: black;
        -moz-border-radius: 50px;
        -webkit-border-radius: 50px;
        border-radius: 50px;
    }
    
    .dot4 {
        position: absolute;
        left: 17px;
        top: 67px;
        width: 16px;
        height: 16px;
        background: black;
        -moz-border-radius: 50px;
        -webkit-border-radius: 50px;
        border-radius: 50px;
    }
    
    .dot5 {
        position: absolute;
        left: 67px;
        top: 17px;
        width: 16px;
        height: 16px;
        background: black;
        -moz-border-radius: 50px;
        -webkit-border-radius: 50px;
        border-radius: 50px;
    }
    
    .dot6 {
        position: absolute;
        left: 67px;
        top: 42px;
        width: 16px;
        height: 16px;
        background: black;
        -moz-border-radius: 50px;
        -webkit-border-radius: 50px;
        border-radius: 50px;
    }
    
    .dot7 {
        position: absolute;
        left: 67px;
        top: 67px;
        width: 16px;
        height: 16px;
        background: black;
        -moz-border-radius: 50px;
        -webkit-border-radius: 50px;
        border-radius: 50px;
    }