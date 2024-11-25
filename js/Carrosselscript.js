const CarrosselMain = document.querySelector('.Carrossel');
const CarroItem = document.querySelectorAll('.Carro');
const ProximoBoton = document.querySelector('.NextBoton');
const AntesBoton = document.querySelector('.PrevBoton');


let carroindex = 0;
let altoscrolltime = 5;

function updatecarrossel(){
    const offset = -carroindex * CarroItem[0].offsetWidth;
    CarrosselMain.style.transform = `translateX(${offset}px)`;
}

function proximo(){
    if (carroindex > CarroItem.length-2){
        carroindex = 0;
    }else{
        carroindex++;
    }
    updatecarrossel();
}

function antes(){
    if (carroindex <= 0){
        carroindex = CarroItem.length-1;
    }else{
        carroindex--;
    }
    updatecarrossel();
}

ProximoBoton.addEventListener('click', proximo)

AntesBoton.addEventListener('click', antes)

let autoplay = setInterval(proximo, 10000);


const ceu = document.querySelector('.ceu');
const estrelas = ceu.children;

const estrelaimagens = [
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image(),
    new Image()
]

function setobjpos(obj, x, y){
    obj.style.top = `${y}%`;
    obj.style.left = `${x}%`;
}

for (let i=0; i<estrelaimagens.length; i++){
    estrelaimagens[i].src = "/imgs/Estrelas/"+(i+1)+".png";
}

for (let i=0; i<estrelas.length; i++){
    setobjpos(estrelas[i], Math.random() * 100, Math.random() * 100);
}

function MudarEstrelas(){
    for (let i = 0; i < estrelas.length; i++) {
        let indx = Math.floor(Math.random() * estrelaimagens.length)
        if (Math.random() > 0.3){
            if (Math.random() > 0.99){
                setobjpos(estrelas[i], Math.random() * 100, Math.random() * 100);
            }
            estrelas[i].style.backgroundImage = `url(${estrelaimagens[indx].src})`;
        }
    }
}
let mudarestrelasinterval = setInterval(MudarEstrelas, 500);

const body = document.querySelector('body');


function changebodycolor(){
    if(body.style.color == "black"){
        body.style.color = "white";
        body.style.backgroundColor = "black";
        for (let i=0;i<estrelas.length;i++){
            estrelas[i].style.filter = "invert(70%) brightness(100%)";
        }
    }else{
        for (let i=0;i<estrelas.length;i++){
            estrelas[i].style.filter = "invert(20%) brightness(100%)";
        }
        body.style.color = "black";
        body.style.backgroundColor = "white";
    }
}

let bodychageintrval = setInterval(changebodycolor, 15000);


