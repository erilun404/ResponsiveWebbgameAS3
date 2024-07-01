let button1 = document.getElementById('button1')
let choiceButtonScissor = document.getElementById('choice-btn-scissor')
let choiceButtonLadder = document.getElementById('choice-btn-ladder')
let inventory = []
const randomItem = ["nail scissor", "spade", "lader"]
// button1.setAttribute('onclick', 'infoGame()')
//let button1;

const infoGame = () => {
    let gameInfo = document.querySelector('.introduction')
    gameInfo.classList.remove('hidden');
    button1.setAttribute('onclick', 'showPrologue()')
}
infoGame(); 

const showPrologue = () => {
    let gameInfo = document.querySelector('.introduction')
    gameInfo.classList.add('hidden')
    let prologue = document.querySelector('.prologue');
    prologue.classList.remove('hidden');
    button1.innerText = "Go to museum";
    button1.setAttribute('onclick', 'museum()');
}

const museum = () => {
    let prologue = document.querySelector('.prologue');
    prologue.classList.add('hidden')
    let theMuseum = document.querySelector('.the-museum')
    theMuseum.classList.remove('hidden')
    button1.innerText = "go to hospital" 
    button1.setAttribute('onclick', 'goHospital()') 
}
const goHospital = () => {
    console.log("goHospital called")
    let theMuseum = document.querySelector('.the-museum')
    theMuseum.classList.add('hidden')
    let worried = document.querySelector('.worried')
    worried.classList.remove('hidden');
    button1.innerText = "next";
    button1.setAttribute('onclick', 'info()')
}

const info = () => {
    let worried = document.querySelector('.worried')
    worried.classList.add('hidden');
    let insideInfo = document.querySelector('.inside-info')
    insideInfo.classList.remove('hidden');
    console.log("info called")
    button1.innerText = "new text";
    button1.setAttribute('onclick', 'garage()')
}


const garage = () => {
    console.log("garage called")
    let insideInfo = document.querySelector('.inside-info');
    insideInfo.classList.add('hidden');
    let insideGarage = document.querySelector('.garage');
    insideGarage.classList.remove('hidden');
    button1.classList.add('hidden');
    let choice = document.querySelector('.btn-choices')
    choice.classList.remove('hidden')
}
//garage();

let selectedItem;
const getItem = item => {
    selectedItem = item;
    console.log(item)
    handleChoice();
}
//getItem();
choiceButtonScissor.addEventListener("click", (e) => getItem("SScissors"))
choiceButtonLadder.addEventListener("click", (e) => getItem("ladder"))

const handleChoice = () => {
    let insideGarage = document.querySelector('.garage');
    insideGarage.classList.add('hidden');
    let choice = document.querySelector('.choice-button');
    console.log(choice)
    choice.textContent = `you choose ${selectedItem}`;
    button1.innerText = "go to window";
    button1.classList.remove('hidden');
}
//handleChoice();

//sätt en value på button som sparas i selecteditem
//getrandomItems()


const sneakWindow = () => {

}
//sneakWindow(diceRandom);

const toHouse = () => {}
toHouse();

const goUpStairs = () => {}
//goUpStairs(diceRandom)

const basement = () => {}
//basement(diceRandom);






const diceRandom = () => {
    const rolls = document.querySelectorAll('.rollDice');
    rolls.forEach(roll => {
    roll.addEventListener('click', () => {
        const result = Math.floor(Math.random() * 20) +1;
        document.querySelector('.result').textContent = result;
        //skicka in i en ny fuktion (result) i den funktionen gör if för att kolla högre/lägre

    })
})
}
//diceRandom();


// failGame
// sanityDown
// tribute
// garage

// succsessWindow
// fail-window

// basement
// fail-tank
// fail-jars

// go-upstairs
// fail-upstairs
// succsess-upstairs