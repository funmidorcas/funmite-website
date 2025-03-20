const cardArray = [
    { name: 'fries', img: 'imgst/fries.png' },
    { name: 'cheeseburger', img: 'imgst/cheeseburger (1).png' },
    { name: 'hotdog', img: 'imgst/hotdog.png' },
    { name: 'ice-cream', img: 'imgst/ice-cream.png' },
    { name: 'milkshake', img: 'imgst/milkshake.png' },
    { name: 'pizza', img: 'imgst/pizza.png' },
    { name: 'fries', img: 'imgst/fries.png' },
    { name: 'cheeseburger', img: 'imgst/cheeseburger (1).png' },
    { name: 'hotdog', img: 'imgst/hotdog.png' },
    { name: 'ice-cream', img: 'imgst/ice-cream.png' },
    { name: 'milkshake', img: 'imgst/milkshake.png' },
    { name: 'pizza', img: 'imgst/pizza.png' },
];

cardArray.sort(() => 0.5 - Math.random());
console.log(cardArray);

const gridDisplay = document.querySelector('#grid');
const cardsChosen = [];
const cardsChosenIds = [];

// Create the game board
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'imgst/blank.png');
        card.setAttribute('data-id', i); // Assign a unique ID based on the loop index
        card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card);
    }
}

createBoard();

// Check for matches
function checkMatch() {
    const cards = document.querySelectorAll('img');
    console.log('Check for match');
    if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match!');
        // Set matched cards to "white"
        cards[cardsChosenIds[0]].setAttribute('src', 'imgst/white.png');
       cards[cardsChosenIds[1]].setAttribute('src', 'imgst/white.png');

    } 
    
    else {
        // Flip cards back over if not matched
        cards[cardsChosenIds[0]].setAttribute('src', 'imgst/blank.png');
        cards[cardsChosenIds[1]].setAttribute('src', 'imgst/blank.png');
    }
    // Clear chosen arrays for the next turn
    cardsChosen.length = 0;
    cardsChosenIds.length = 0;
}

// Flip a card
function flipCard() {
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    console.log(cardsChosen);
    console.log(cardsChosenIds);

    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500);
    }
}




