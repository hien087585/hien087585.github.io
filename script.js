// Đợi HTML load xong
document.addEventListener("DOMContentLoaded", () => {

    // ============================
    // Typing effect
    // ============================

    const text = "AI Student • Future AI Engineer";
    let i = 0;
    const typingEl = document.getElementById("typing");

    function typing(){
        if(i < text.length){
            typingEl.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, 60);
        }
    }

    typing();


    // ============================
    // Music player
    // ============================

    const btn = document.getElementById("playBtn");
    const player = document.getElementById("youtubePlayer");

    let playing = false;

    btn.onclick = () => {
        if(!playing){
            player.src = "https://www.youtube.com/embed/iedDN-fXLRA?autoplay=1";
            btn.innerHTML = "⏸";
            playing = true;
        }else{
            player.src = "";
            btn.innerHTML = "▶";
            playing = false;
        }
    };


    // ============================
    // Petals effect
    // ============================

    const container = document.querySelector(".petals");

    for(let i=0;i<25;i++){
        let p = document.createElement("div");
        p.className="petal";
        p.style.left = Math.random()*100 + "vw";
        p.style.animationDuration = (5 + Math.random()*5) + "s";
        container.appendChild(p);
    }

});
