/****Menu burger */
const menu = document.querySelector(".items");
const ouvr = document.querySelector(".open");
const ferm = document.querySelector(".close")
let mq = window.matchMedia("(min-width: 660px)");

ferm.style.display = 'none';

mq.addListener (WidthChange);
WidthChange (mq);


function openToggle(){
    console.log("clic");
    menu.style.display = 'block';
    ferm.style.display = 'block';
    ferm.style.opacity = '0.5'
    ouvr.style.display = 'none';
}
function closeToggle(){
    menu.style.display = 'none';
    ferm.style.display = 'none';
    ouvr.style.display = 'block';
}

function WidthChange(mq){
    if (mq.matches){
        menu.style.display = 'block';
        
    
    }else{
        console.log("petit ecran");
        menu.style.display = 'none';
    }
}
