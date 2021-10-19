const player = document.getElementById("player");
const cactus = document.getElementById("cactus");
const background = document.getElementById("background")
const buttonPlayStop = document.getElementById("buttonPlayStop");
let scoreInterval;
let score= 0;
const board = document.getElementById("board")


board.addEventListener("click", function(){
   playerJump();
} );

function playerJump(){
    player.classList.add("playerJump")
}

player.addEventListener("animationend", ()=>{
  removeJump();
});

function removeJump(){
    player.classList.remove('playerJump')
}


function pauseAnimation(){
    cactus.style.animationPlayState ='paused';
    player.style.animationPlayState ='paused';
    background.style.animationPlayState='paused';
    
}
function stopScore(){
    clearInterval(scoreInterval);
}

function pauseGame(){
    pauseAnimation();
    stopScore();
}



function resumeScore(){
    scoreInterval = setInterval(()=>{
        score++;
        document.getElementById("score").innerText =score;
    },1000)
}


function resumeAnimation(){
    cactus.style.animationPlayState ='running';
    player.style.animationPlayState ='running';
    background.style.animationPlayState='running';
   
}
function resumeGame(){
    resumeAnimation();
    resumeScore();
}


buttonPlayStop.addEventListener('click', () => {
   
    if(buttonPlayStop.classList.contains("play")){
        resumeGame();
    }else{
        pauseGame();
    }
    buttonPlayStop.classList.toggle("play");
    
})

//resumeScore();

const restartButton = document.getElementById("restartGame");
restartButton.addEventListener('click', restartGame)

function restartGame(){
    resetScore();
    removeJump();
    cactus.classList.remove("animatedCactus");
    cactus.classList.add("animatedCactus");
}




function resetScore(){
    score =0;
    document.getElementById("score").innerText =score;
}


document.addEventListener("keyup", (event)=>{
    if(event.key == 'ArrowUp'){
       playerJump();
    }
})

