// OLD CODE
// let timerstart = 1;
// let hitter
// let scoreval = 0 
// let selectedItem 


// function bubblemaker(){
// let clutter = ""
// for(let i=0 ; i<=143 ; i++ ){
//     clutter += `<div class="bubble">${Math.round(Math.random()*10)}</div>`
//     let bubble = document.querySelector(".panelBottom");
//     bubble.innerHTML = clutter

// }
// }

// function timer(){
//     let interval = setInterval(()=>{
//         if(timerstart>0){
//         timerstart--
//         document.querySelector("#timer").textContent = timerstart
//     }
//     else{
//         // clearInterval(interval)
//         // document.querySelector(".panelBottom").innerHTML = `<div class=""finishScore"><h2>Game Over</h2><h3>Your Score ${scoreval}</h3></div>`
//
//     }
//     },1000)


// }

// function hit(){
//     hitter = Math.round(Math.random()*10)
//     document.querySelector("#hitVal").textContent = hitter

// }

// function score(){
//     scoreval += 10
//     document.querySelector("#scoreVal").textContent = scoreval
//     console.log(scoreval)
// }

// // now we will use bubble event
// document.querySelector(".panelBottom").addEventListener("click" , (event)=>{
//      selectedItem = (Number(event.target.textContent))
//      if(selectedItem == hitter){
//         score()
//         bubblemaker();
//         hit()
        
//     }
// })






// hit()
// timer()
// bubblemaker();


let timerstart = 60;
let hitter;
let scoreval = 0;
let selectedItem;

function bubblemaker() {
    let clutter = "";
    for (let i = 0; i <= 143; i++) {
        clutter += `<div class="bubble">${Math.round(Math.random() * 10)}</div>`;
    }

    // Clear the previous content and append the new bubbles
    let bubbleContainer = document.querySelector(".panelBottom");
    bubbleContainer.innerHTML = clutter;
}

function timer() {
    let interval = setInterval(() => {
        if (timerstart > 0) {
            timerstart--;
            document.querySelector("#timer").textContent = timerstart;
        } else {
            clearInterval(interval);

            // Create elements for the "Game Over" message and "Play Again" button
            let gameOverMessage = document.createElement("div");
            gameOverMessage.classList.add("finishScore");
            gameOverMessage.innerHTML = `<h2>Game Over</h2><h3>Your Score ${scoreval}</h3>`;

            let playAgainButton = document.createElement("button");
            playAgainButton.textContent = "Play Again";
            playAgainButton.addEventListener("click", playAgain);

            // Clear the previous content and append the new elements
            let bubbleContainer = document.querySelector(".panelBottom");
            bubbleContainer.innerHTML = "";
            bubbleContainer.appendChild(gameOverMessage);
            bubbleContainer.appendChild(playAgainButton);
        }
    }, 1000);
}

function hit() {
    hitter = Math.round(Math.random() * 10);
    document.querySelector("#hitVal").textContent = hitter;
}

function score() {
    scoreval += 10;
    document.querySelector("#scoreVal").textContent = scoreval;
}

//  now we will use bubble event
 document.querySelector(".panelBottom").addEventListener("click" , (event)=>{
      selectedItem = (Number(event.target.textContent))
      if(selectedItem == hitter){
         score()
         bubblemaker();
         hit()
        
     }
 })

function playAgain() {
    // Reset necessary variables and start a new game
    timerstart = 60;
    scoreval = 0;
    document.querySelector("#scoreVal").textContent = scoreval;
    document.querySelector("#timer").textContent = timerstart;

    // Clear the previous content and append new bubbles
    bubblemaker();
    hit()
    // Restart the timer
    timer();
}

// Initial setup
hit();
timer();
bubblemaker();

// Optional: Add an event listener for starting a new game if needed
// document.querySelector("#startAgain").addEventListener("click", playAgain);
