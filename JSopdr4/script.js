const myTitle = document.getElementById('myTitle');
const myImage = document.getElementById('myImage');

let seizoenen = [
    {
        "titel": "Seizoenen",
        "image": "img/seasons.jpg",
        "backGround": "black"
    },
    {
        "titel": "lente",
        "image": "img/spring.jpg",
        "backGround": "green"
    },
    {
        "titel": "zomer",
        "image": "img/summer.jpg",
        "backGround": "yellow"
    },
    {
        "titel": "herfst",
        "image": "img/autumn.jpg",
        "backGround": "maroon"
    },
    {
        "titel": "winter",
        "image": "img/winter.jpg",
        "backGround": "white"
    },
];


function show(index) {
    myTitle.innerHTML = seizoenen[index].titel;
    myImage.src = seizoenen[index].image;
    document.body.style.backgroundColor = seizoenen[index].backGround;
}