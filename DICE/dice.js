const showrulesBtn = document.getElementById('rulesBtn');
const rules = document.getElementById('rules');
const rollBtn = document.getElementById('rollBtn');
const keepBtn = document.getElementById('keepBtn');
const diceBox = document.querySelectorAll(".die");
const rollCount = document.getElementById('rolls');
const roundCount = document.getElementById('round');
const listSpan = document.querySelectorAll(".list-span")
const radioList = document.querySelectorAll(".radio-list")
const scoreText = document.getElementById("total-score")
const hist = document.getElementById('hist')
const optionsBtn = document.getElementById('options-buttons')
const container = document.getElementById('container');
let highestCount = 1;
const rollsround = document.getElementById('rolls-round')
let sumscore = 0


const diceArr = []
let rolls = 0
let round = 1;
let ruleValue = false;
let score = 0;
let historyscore = 0;

showrulesBtn.addEventListener('click', ()=>{
    ruleValue = !ruleValue;
    if(ruleValue){
        rules.style.display = "block"
        showrulesBtn.textContent = "Hiderules"
    }
    else{
        rules.style.display = "none"
        showrulesBtn.textContent = "Showrules"
    }

})
// const arrai =[1,2,3,4,9]
// let x = -1
function randomNumber(){
    return Math.floor(Math.random() * 6) + 1;
    // x++
    // return arrai[x]
}
rollBtn.addEventListener('click', ()=>{
roll()    
})
function roll(){
    if(rolls === 3 && round < 5){
     
        container.classList.add('shake');

        // Remove the shake class after the animation ends
        setTimeout(function() {
            container.classList.remove('shake');
        }, 500); // Duration matches the shake ani
        rollsround.style.backgroundColor = 'rgb(237, 224, 204)';
    
        // Revert background color back after 1 second (1000ms)
        setTimeout(function() {
            rollsround.style.backgroundColor = ''; // Resets to the default style
        }, 200);
        rolls = 0;
        rollCount.textContent = rolls;
        round++
        roundCount.textContent = round;
        for(let i = 0; i < 5; i++){
            diceArr[i] = 0;
            diceBox[i].textContent = ''
        }
        radioReset()
        hist.innerHTML += `<p>Score = ${scorenow * sumscore}</p>`

        return
    } 
    else if(round === 5 && rolls ===3){
        newRound()
    }
    
    else{
    rolls++
    rollCount.textContent = rolls
    for(let i = 0; i < 5; i++){
        diceArr[i] = randomNumber();
        diceBox[i].textContent = diceArr[i];
    }
    //RADIO BUTTONS DISABLE
    
   
    radioList[0].disabled = true;
    radioList[1].disabled = true;
    radioList[2].disabled = true;
    radioList[3].disabled = true;
    radioList[4].disabled = true;
    radioList[5].disabled = false;

    //RADIO checked
    radioList[0].checked = false;
    radioList[1].checked = false;
    radioList[2].checked = false;
    radioList[3].checked = false;
    radioList[4].checked = false;
    radioList[5].checked = false;

    
    //RADIO BUTTONS TEXT
    listSpan[0].textContent = '';
    listSpan[1].textContent = '';
    listSpan[2].textContent = '';
    listSpan[3].textContent = '';
    listSpan[4].textContent = '';

    

    highestCountz();
    listSpan[5].textContent =`, score = ${sumscore}`

    container.classList.add('shake');

    // Remove the shake class after the animation ends
    setTimeout(function() {
        container.classList.remove('shake');
    }, 500); // Duration matches the shake ani
    rollsround.style.backgroundColor = 'rgb(237, 224, 204)';

    // Revert background color back after 1 second (1000ms)
    setTimeout(function() {
        rollsround.style.backgroundColor = ''; // Resets to the default style
    }, 200);
    }
}

function radioReset(){

    radioList[0].disabled = true;
    radioList[1].disabled = true;
    radioList[2].disabled = true;
    radioList[3].disabled = true;
    radioList[4].disabled = true;
    radioList[5].disabled = true;

    //RADIO BUTTONS TEXT
    listSpan[0].textContent = '';
    listSpan[1].textContent = '';
    listSpan[2].textContent = '';
    listSpan[3].textContent = '';
    listSpan[4].textContent = '';
    listSpan[5].textContent = '';

    radioList[0].checked = false;
    radioList[1].checked = false;
    radioList[2].checked = false;
    radioList[3].checked = false;
    radioList[4].checked = false;
    radioList[5].checked = false;
}

function newRound(){
    if(round === 5){
    
        radioReset()
        hist.innerHTML += `<p>Score = ${scorenow * sumscore}</p>`
        optionsBtn.innerHTML = `<button id="reset" onclick ="restart()">Press Reset Game</button>`
    }

    else{
    rolls = 0;
    rollCount.textContent = rolls;
    round++
    roundCount.textContent = round;
    for(let i = 0; i < 5; i++){
        diceArr[i] = 0;
        diceBox[i].textContent = ''
    }
    hist.innerHTML += `<p>Score = ${scorenow * sumscore}</p>`
    radioReset()
}


}

function restart() {
        radioReset()
        rolls = 0;
        rollCount.textContent = rolls;
        round = 1;
        roundCount.textContent = round;
        scoreText.textContent = '0';
        for(let i = 0; i < 5; i++){
            diceArr[i] = 0;
            diceBox[i].textContent = ''
        }
        hist.innerHTML = ''
        historyscore = 0
        optionsBtn.innerHTML = `
        <button id="keepBtn" onclick ="keep()">Keep the Selected One</button>
        <button id="rollBtn" onclick = "roll()" >Roll the Dice</button>
        `
        alert('New Game Started. ENJOY !')
    

}

keepBtn.addEventListener('click', () => {
keep()
})
function keep() {

    

    if(rolls === 0){
        return
    }
    else{
    fungsiScore()
    newRound()
    rollsround.style.backgroundColor = 'rgb(237, 224, 204)';

    // Revert background color back after 1 second (1000ms)
    setTimeout(function() {
        rollsround.style.backgroundColor = ''; // Resets to the default style
    }, 200);
    }
}

let scorenow = 0;


const fungsiScore = () => {
    scorenow = 0;
for(const num of radioList){
    if(num.checked){
        scorenow  =  parseInt(num.getAttribute("data-score")) 
        break;
    }
    else{
        scorenow = 0

    }
}

historyscore += sumscore * scorenow ;
scoreText.textContent = historyscore;


}


function highestCountz() {
    const nilai = {}

    for(const num of diceArr){
        if(nilai[num]){
            nilai[num]++
        }
        else{
            nilai[num] = 1
    }
    }
    highestCount = 1;

    for(const num of diceArr){
    if(nilai[num] === 3){
        highestCount = 3
    }
    else if(nilai[num] === 4){
        highestCount = 4
    }
    else if(nilai[num] === 5){
        highestCount = 5
    }
    }

    //STRAIGHTS
    let straight = 0
    let urut = diceArr.sort((a,b) =>  a - b)
    let loop = 0
    while (loop < 4){
    if(urut[loop] + 1 === urut[loop + 1]){
    straight++
    }
    loop++
    }

    if(straight === 3){
        highestCount = 10;
    }
    else if(straight === 4){
        highestCount = 20;
    }

    sumscore = 0

    for(const num of diceArr){
        sumscore += num 
    }
    if(highestCount === 3){
        radioList[0].disabled = false
        listSpan[0].textContent =`, score = ${sumscore * 3}`
    }
    else if(highestCount === 4){
        radioList[0].disabled = false
        radioList[1].disabled = false
        listSpan[0].textContent =`, score = ${sumscore * 3}`
        listSpan[1].textContent =`, score = ${sumscore * 4}`
    }
    else if(highestCount === 5){
        radioList[0].disabled = false
        radioList[1].disabled = false
        radioList[2].disabled = false
        listSpan[0].textContent=`, score = ${sumscore}`
        listSpan[1].textContent =`, score = ${sumscore * 4}`
        listSpan[2].textContent =`, score = ${sumscore * 6}`
    }
    else if(highestCount === 10){
        radioList[3].disabled = false
        listSpan[3].textContent =`, score = ${sumscore * 10}`
    }
    else if(highestCount === 20){
        radioList[4].disabled = false
        listSpan[4].textContent =`, score = ${sumscore * 20}`
    }
}