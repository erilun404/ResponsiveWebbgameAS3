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
const choiceBtn = (text, clickHandler) => {
    
    gameChoiseBtn.innerText = text;
    gameChoiseBtn.onclick = clickHandler;
};

// Function to update button text and click event
const updateButton = (text, clickHandler) => {
    gameButton.innerText = text;
    gameButton.onclick = clickHandler;
};

// Game logic functions
//hideElement('.end') start the game make init function
const infoGame = () => {
    showElement('.introduction');
    updateButton('Show Prologue', showPrologue);
    updateButton('testbutton', toHouse);     //TEST BUTTON
};

const showPrologue = () => {
    hideElement('.introduction');
    showElement('.prologue');
    updateButton('Go to Museum', museum);
};

const museum = () => {
    hideElement('.prologue');
    showElement('.the-museum');
    updateButton('Go to Hospital', goHospital);
};

const goHospital = () => {
    hideElement('.the-museum');
    showElement('.worried');
    updateButton('Next', info);
};

const info = () => {
    hideElement('.worried');
    showElement('.inside-info');
    updateButton('New Text', garage);
};

const garage = () => {
    hideElement('.inside-info');
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

const goToWindow = () => {
    hideElement('.garage')
    showElement('.window');
    const windowElement = document.querySelector('.window');
    windowElement.textContent = `You go outside with your ${selectedItem} and start to work. You see a window, and start to sneak up to it.`;
    updateButton('Go!', sneakWindow);
};

const sneakWindow = () => {
    //showDice(sneakwindowsucces, sneakwindowFail) 
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
    console.log('to house')
    //gameButton.classList.add('hidden');
    updateButton('Go upstairs', goUpStairs)
    hideElement('.sneakWindow')
    showElement('.go-to-house')
    showElement('.game-choice-btn')
    choiceBtn('Go down to basement', basement)
    //showElement('.btn-house')
}




const showDice = (succes, failure) => {
    showElement('.dice')
    console.log("Sneak window");
   
    document.querySelectorAll('.rollDice').forEach(roll => {
        roll.addEventListener('click', () => {
           if(roll.classList.contains('enabled')) {
                roll.classList.remove('enabled')
                diceRandom((result) => {
                console.log(result)
                    if(result > 1) {
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
    })
};



const diceRandom = (callback) => {
    const result = Math.floor(Math.random() * 20) +1;
    document.querySelector('.result').textContent = result;
    callback(result);
};

// Event listeners for choice buttons
choiceButtonScissor.addEventListener('click', () => getItem('scissors'));
choiceButtonLadder.addEventListener('click', () => getItem('ladder'));





const goUpStairs = () => {
    console.log("up")
    hideElement('.dice')
    updateButton('Go left', goLeft)
    choiceBtn('Go right', goRight)
    hideElement('.go-to-house')
    showElement('.go-upstairs') 

 }

 const goLeft = () => {
    console.log("left")
    hideElement('.go-upstairs')
    hideElement('.game-choice-btn')
    showElement('.fail-upstairs-left')
    updateButton('Start over', end)
}


const goRight = () => {
    hideElement('.go-upstairs') 
    hideElement('.game-choice-btn')
    hideElement('.btnstart')
    showElement('.elise')
    console.log("right")
    const succes = () => {
        hideElement('.elise')
        showElement('.succsess-upstairs-right')
        showElement('.btnstart')
        updateButton('Go', tribute)
    }
    const failure = () => {   //TEST IF WORK, NOT working fix
        showElement('.fail-upstairs-right')
        hideElement('.go-upstairs')
        showElement('.game-choice-btn')  
        updateButton('You did not make it', end)
    }
    showDice(succes, failure)
}

const end = () => {  //Fix this one!
    console.log('end')
    hideElement('.sneakWindow')
    hideElement('.fail-upstairs-right')
    hideElement('.game-choice-btn')
    hideElement('.fail-upstairs-right')
    showElement('.failGame')
    showElement('.tribute-to-game')
    
    updateButton('Start over', infoGame)
}

const tribute = () => { //FIx this one
    hideElement('.dice')
    hideElement('.succsess-upstairs-right')
    showElement('.madeIt')
}

const basement = () => {
    console.log("down")
}

// Initialize the game
infoGame();





// // failGame
// // sanityDown
// // fail-window
// // basement
// // fail-tank
// // fail-jars





