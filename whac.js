const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const score = document.querySelector('#score'); // Corrected selector for score
const timeLeft = document.querySelector('#time-left');

let result = 0;
let hitPosition;
let currentTime = 60; 

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole'); // Ensure no mole is present initially
    });
    const randomSquare = squares[Math.floor(Math.random() * squares.length)]; // Ensures valid random square
    randomSquare.classList.add('mole');
    hitPosition = randomSquare.id; // Set the ID of the square containing the mole
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => { // Fixed missing comma
        if (square.id === hitPosition) {
            result++;
            score.textContent = result; // Update score display
            hitPosition = null; // Prevent double counting
        }
    });
});

function moveMole() {
    let timerId = null

timerId = setInterval(randomSquare, 500); // Mole moves every 500ms
}
moveMole()

function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime; // Update time display

    if (currentTime === 0) {
        clearInterval(countdownTimerId); // Stop mole movement
        alert(`Game Over! Your final score is ${result}`);
    }
}
let timerId = setInterval(randomSquare, 500); // Start mole movement
let countdownTimerId = setInterval(countDown, 1000); // Start countdown timer
