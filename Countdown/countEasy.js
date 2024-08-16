startButton = document.querySelector('#start');
pauseButton = document.querySelector('#pause');
resetButton = document.querySelector('#reset');
inputBox = document.querySelector('#inputBox');
time = document.querySelector('#time');
let interval;
let angka; // Use 'angka' to store the remaining time
let isPaused = false; // Variable to track if the timer is paused
let gradientIndex = 0; // To keep track of the current gradient

const gradients = [
    'gradient1',
    'gradient2',
    'gradient3',
    'gradient4',
    'gradient5',
    'gradient6',
    'gradient7',
    'gradient8'
];

function start() {
    clearInterval(interval); // Clear any previous interval
    angka = parseInt(inputBox.value); // Initialize the remaining time
    time.innerText = angka; // Display the initial time
    isPaused = false; // Set the state to running
    gradientIndex = 0; // Reset gradient index

    interval = setInterval(() => {
        if (!isPaused) {
            angka--; // Decrease the remaining time
            time.innerText = angka; // Update the display
            if (angka <= 0) {
                clearInterval(interval); // Stop the countdown when it reaches 0
                isPaused = false; // Ensure state is reset
                pauseButton.innerText = "Pause"; // Reset button text to Pause
            } else {
                // Change background gradient every tick
                document.body.className = gradients[gradientIndex];
                gradientIndex = (gradientIndex + 1) % gradients.length; // Cycle through gradients
            }
        }
    }, 1000); // Update every second

    pauseButton.innerText = "Pause"; // Ensure button text is set to Pause
}

function pause() {
    if (isPaused) {
        // Resume countdown
        isPaused = false;
        pauseButton.innerText = "Pause";
    } else {
        // Pause countdown
        isPaused = true;
        pauseButton.innerText = "Resume";
    }
}

function reset() {
    clearInterval(interval); // Stop the interval
    time.innerText = "0"; // Reset display
    angka = 0; // Reset remaining time
    inputBox.value = ""; // Clear the input box
    document.body.className = gradients[0]; // Reset background to the first gradient
    isPaused = false; // Ensure state is reset
    pauseButton.innerText = "Pause"; // Reset button text to Pause
}

startButton.addEventListener('click', start);
pauseButton.addEventListener('click', pause);
resetButton.addEventListener('click', reset);
