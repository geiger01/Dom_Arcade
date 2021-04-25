const gameDivs = document.querySelectorAll(".game");

gameDivs.forEach((div) => {
        div.addEventListener("mouseover",(e) => scale(e) );
})
gameDivs.forEach((div) => {
        div.addEventListener("mouseout",(e) => scaleDown(e) );
})

function scale(e){
        const currentDiv= e.target;
        currentDiv.classList.add("active");
}

function scaleDown(e){
        const currentDiv= e.target;
        currentDiv.classList.remove("active");
}
