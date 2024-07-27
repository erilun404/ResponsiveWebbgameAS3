//Get references to the buttons and other elements
const gameButton = document.getElementById('gameButton');
const choiceButtonScissor = document.getElementById('choice-btn-scissor');
const choiceButtonLadder = document.getElementById('choice-btn-ladder');
// const choiceBasement = document.getElementById('choice-basement');
// const choiceUpstairs = document.getElementById('choice-upstairs');
const gameChoiseBtn = document.getElementById('gameChoiseBtn');
const hitElement = document.getElementById('hit');

let selectedItem;

//function to change text in dice roll
const changeTextByHit = (newText) => {
    hitElement.textContent = newText;
}

// Function to show and hide elements
const showElement = (selector) => {
    document.querySelector(selector).classList.remove('hidden');
};

const hideElement = (selector) => {
    document.querySelector(selector).classList.add('hidden');
};


//function to take care of hiding all elements of the class hidden-when hideAll is called, sellects all element with class hide-all, Iterates over each of these elements, adds the class hidden, to each elements.
const hideAll = () => {
    document.querySelectorAll('.hide-all').forEach(e => {e.classList.add('hidden')});
}

const choiceBtn = (text, clickHandler) => {
    showElement('.game-choice-btn');
    gameChoiseBtn.innerText = text;
    gameChoiseBtn.onclick = clickHandler;
};

// Function to update button text and click event
const updateButton = (text, clickHandler) => {
    showElement('.btnstart')
    gameButton.innerText = text;
    gameButton.onclick = clickHandler;
};

// Game logic functions
const infoGame = () => {
    hideAll();
    showElement('.introduction');
    updateButton('Show Prologue', showPrologue);
    //updateButton('testbutton', toHouse);     //TEST BUTTON
};

const showPrologue = () => {
    //hideElement('.introduction');
    hideAll();
    showElement('.game-play')
    showElement('.prologue');
    updateButton('Go to Museum', museum);
};

const museum = () => {
    hideAll();
    showElement('.the-museum');
    updateButton('Go to Hospital', goHospital);
};

const goHospital = () => {
    hideAll();
    showElement('.worried');
    updateButton('Next', info);
};

const info = () => {
    hideAll();
    showElement('.inside-info');
    updateButton('New Text', garage);
};

const garage = () => {
    hideAll();
    showElement('.garage');
    gameButton.classList.add('hidden');
    showElement('.btn-choices');
};

const getItem = (item) => {
    selectedItem = item;
    handleChoice();
};

const handleChoice = () => {
    hideElement('.btn-choices');
    const choice = document.querySelector('.choice');
    choice.textContent = `You choose ${selectedItem}`;
    gameButton.classList.remove('hidden');
    updateButton('Go to Window', goToWindow);
};

const goToWindow = () => {  //Image?? FIX FROM HERE
    hideElement('.garage')
    showElement('.window');
    const windowElement = document.querySelector('.window');
    windowElement.textContent = `You go outside with your ${selectedItem} and start to work. You see a window, and start to sneak up to it.`;
   
    updateButton('Go!', sneakWindow);
};

const sneakWindow = () => {
    const succes = () => {
        hideElement('.window')
        showElement('.sneakWindow'), 
        showElement('.succsess-window'), 
        updateButton('Go', toHouse)
    }
    const failure = () => {
        showElement('.sneakWindow'), 
        showElement('.fail-window'), 
        hideElement('.window'),
        hideElement('.choice'),
        updateButton('You did not make it', end)
    }
    showDice(succes, failure)
}

const toHouse = () => {
    hideAll();
    showElement('.go-to-house')
    showElement('.game-choice-btn')
    updateButton('Go upstairs', goUpStairs)
    choiceBtn('Go down to basement', goBasement)
}


const goUpStairs = () => {
    hideAll();
    updateButton('Go left', goLeft)
    choiceBtn('Go right', goRight)
    showElement('.go-upstairs') 

 }

 const goLeft = () => {
    hideAll();
    showElement('.fail-upstairs-left')
    updateButton('Start over', end)
}

const goRight = () => {
    hideAll();    
    showElement('.elise')
    const succes = () => {
        hideAll();
        showElement('.dice')
        showElement('.succsess-upstairs-right')
        showElement('.btnstart')
        updateButton('Go', tribute)
    }
    const failure = () => { 
        showElement('.fail-upstairs-right')
        hideElement('.go-upstairs')
        showElement('.btnstart')  
        updateButton('Ok', end)
    }
    showDice(succes, failure)
}

const goBasement = () => {
    hideAll();
    showElement('.basement')
    showElement('.game-choice-btn')
    choiceBtn('Tank', tank)
    updateButton('Jars', jars)
}

const jars = () => {
    hideAll();
    showElement('.jars')
    updateButton('Ok!', sanityDown)
}

const tank = () => {
    hideAll();
    showElement('.tank')
    updateButton('Ok!', sanityDown)
}

const end = () => {
    hideAll();
    showElement('.failGame')
    showElement('.tribute')
    updateButton('Start over', infoGame)
}
const sanityDown = () => {
    hideAll();
    showElement('.sanityDown')
    updateButton('Start over', infoGame)
}

const tribute = () => { //FIx this one
    hideAll();
    showElement('.madeIt')
    showElement('.tribute')
    updateButton('start over', infoGame)
}



const showDice = (succes, failure) => {
    hideElement('.btnstart')
    showElement('.dice')
   changeTextByHit('Will you make it! Roll higher then 15 for succes')
   document.querySelector('.result').textContent = "";
        roll = document.querySelector('.rollDice')
        roll.replaceWith(roll.cloneNode(true))
        roll = document.querySelector('.rollDice')
        roll.classList.add('enabled')
        roll.addEventListener('click', () => {
           if(roll.classList.contains('enabled')) {
                roll.classList.remove('enabled')
                diceRandom((result) => {
                console.log(result)
                    if(result < 19) {
                        changeTextByHit('Succsessfull roll!');
                        succes();
                    }else{
                        console.log("two");
                        changeTextByHit('To bad you failed');
                        failure();
                    }
                })
            }
        }) 
    //})
};

const diceRandom = (callback) => {
    const result = Math.floor(Math.random() * 20) +1;
    document.querySelector('.result').textContent = result;
    callback(result);
};

// Event listeners for choice buttons
choiceButtonScissor.addEventListener('click', () => getItem('scissors'));
choiceButtonLadder.addEventListener('click', () => getItem('ladder'));


// Initialize the game
infoGame();