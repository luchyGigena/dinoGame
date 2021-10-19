const player = document.getElementById("player");
const cactus = document.getElementById("cactus");
const background = document.getElementById("background")
const buttonPlayStop = document.getElementById("buttonPlayStop");
let score= 0;

document.addEventListener("click", function(){
    player.classList.add("playerJump")
} );

player.addEventListener("animationend", ()=>{
    player.classList.remove('playerJump');
    console.log("player end")
});
function stopAnimation(){
    cactus.style.animationPlayState ='paused';
    player.style.animationPlayState ='paused';
    background.style.animationPlayState='paused';

}

buttonPlayStop.addEventListener('click', () => {
    buttonPlayStop.classList.toggle("play");
    stopAnimation();
})






setInterval(()=>{
    score++;
    document.getElementById("score").innerText =score
    
},1000)
