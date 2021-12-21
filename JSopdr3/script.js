
const myImage = document.getElementById('myImage');
const myTitle = document.getElementById('myTitle');

let teller = 0;

let paintings = [
    "img/painting0.jpg", 
    "img/painting1.jpg", 
    "img/painting3.jpg", 
    "img/painting4.jpg", 
    "img/painting5.jpg"
];

let titles = [
    'De rode wijngaard',
    'De sterrennacht',
    'Sterrennacht boven de Rhone',
    'Zonnebloemen',
    'Boerderij in de Provence'
];

let colors = [
    '#ffcc00',
    '#880088',
    'blue',
    'red',
    'yellow'
];

function changeImage(positie) {
    myTitle.innerHTML = titles[1];
    myTitle.style.color = colors[positie];
    myImage.src = paintings[positie];
}

function showPrevious(){

}

function showNext(){
    teller = teller + 1;
    if(teller > paintings.length -1){
        teller = 0;
    }
    changeImage(teller);
}