// total 7
const warna =   ["black", "white", "red", "blue", "green", 
"yellow", "purple", "orange", "pink", "brown", 
"gray", "cyan", "magenta", "lime", "maroon", 
"navy", "olive", "teal", "aqua", "silver" ]

const btn = document.querySelector("#btn");

const body = document.querySelector("body");
const warnaTulis = document.querySelector("#colorcode");



function randomindex(){
    const indek = Math.floor(warna.length * Math.random());
    return indek;
}

function randombackground(){
    let background = warna[randomindex()];
    if(background === "red"){

        warnaTulis.innerText = "AMOGUS";
        body.style.backgroundColor = background;
    
    }
    else{

    warnaTulis.innerText = background;
    body.style.backgroundColor = background;
    }
}

btn.onclick = randombackground;




