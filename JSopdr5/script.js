const myTitle = document.getElementById('myTitle');
const myImage = document.getElementById('myImage');
const myInput = document.getElementById('myInput');

let lokaties = [
    {
        "titel": "positie 0",
        "image": "img/0.jpg",
    },
    {
        "titel": "positie 1",
        "image": "img/1.jpg"
    },
    {
        "titel": "positie 2",
        "image": "img/2.jpg"
    },
    {
        "titel": "positie 3",
        "image": "img/3.jpg"
    },
    {
        "titel": "positie 4",
        "image": "img/4.jpg",
    },
    {
        "titel": "positie 5",
        "image": "img/5.jpg"
    },
    {
        "titel": "positie 6",
        "image": "img/6.jpg"
    },
    {
        "titel": "positie 7",
        "image": "img/7.jpg"
    },
    {
        "titel": "positie 8",
        "image": "img/8.jpg"
    },
    {
        "titel": "positie 9",
        "image": "img/9.jpg"
    },
    {
        "titel": "positie 10",
        "image": "img/10.jpg"
    },
    {
        "titel": "positie 11",
        "image": "img/11.jpg"
    }
];


function show(index) {
    myTitle.innerHTML = lokaties[index].titel;
    myImage.src = lokaties[index].image;
}

function getInput() {
    show(myInput.value);
    myInput.value = "";
    myInput.focus();
}

show(0);