// ============================
// Typing text effect
// ============================

const text = "AI Student • Future AI Engineer";

let i = 0;

function typing(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);

i++;

setTimeout(typing,60);

}

}

typing();


// ============================
// Music player
// ============================

let player = document.getElementById("player")

let playlist = [

"iedDN-fXLRA",
"jfKfPfyJRdk",
"DWcJFNfaw9c"

]

let current = 0

function playMusic(){

player.src =
"https://www.youtube.com/embed/" + playlist[current] + "?autoplay=1"

}

function pauseMusic(){

player.src = ""

}

function nextMusic(){

current++

if(current >= playlist.length){

current = 0

}

playMusic()

}
