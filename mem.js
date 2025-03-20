
const cardArray =[
    {
        name: 'fries',
        img: 'imgst/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'imgst/cheeseburger (1).png'
    },
    {
        name: 'hotdog',
        img: 'imgst/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'imgst/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'imgst/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'imgst/pizza.png'
    },
    {
        name: 'fries',
        img: 'imgst/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'imgst/cheeseburger (1).png'
    },
    {
        name: 'hotdog',
        img: 'imgst/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'imgst/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'imgst/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'imgst/pizza.png'
    }
]
cardArray.sort(() => 0.5 - Math.random())
console.log(cardArray)
const gridDisplay =document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
const card = document.createElement('img')
card.setAttribute('src', 'imgst/blank.png')
card.setAttribute('data-id', i)
card.addEventListener('click', flipCard)
gridDisplay.appendChild(card)

    }
    }
    createBoard()

    function checkMatch(){
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenIds[0]
        const optionTwoId = cardsChosenIds[1]
 if (optionOneId === optionTwoId) {
    alert('You have clicked the same image')
 }
        console.log('check for match')
        if(cardsChosen[0] === cardsChosen[1]){
            alert('you found a match')
                cards[optionOneId].setAttribute('src', 'imgst/white.png')
                cards[optionTwoId].setAttribute('src', 'imgst/white.png')

                cards[optionOneId].removeEventListener('click', flipCard);
                cards[optionTwoId].removeEventListener('click', flipCard);
         cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'imgst/blank.png')
            cards[optionTwoId].setAttribute('src', 'imgst/blank.png')
alert('sorry try again!')
        }
        resultDisplay.textContent = cardsWon.length
cardsChosen = []
cardsChosenIds = []
if (cardsWon.length === cardArray.length/2){
    resultDisplay.textContent = 'congratulations! you found them all'
}
    }

    function flipCard() {
      const cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenIds.push(cardId)
      console.log(cardsChosen)
      console.log(cardsChosenIds)

this.setAttribute('src', cardArray[cardId].img)
        if(cardsChosen.length === 2){
            setTimeout( checkMatch, 500)
        } 
}



