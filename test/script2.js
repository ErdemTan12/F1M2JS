const myTitle = document.getElementById('myTitle');
const myImage = document.getElementById('myImage');
const myInput = document.getElementById('myInput');

let directionButtons = {
    "noord": document.getElementById('knopNoord'),
    "oost": document.getElementById('knopOost'),
    "zuid": document.getElementById('knopZuid'),
    "west": document.getElementById('knopWest')
}

let current_index = 0;

let lokaties = [ // Array
    { //0 = Object
        "titel": "Ingang",
        "image": "img/0.jpg",
        "directions": {
            "noord": 1
        }
    },
    { //1 = Object
        "titel": "Oude Ingang",
        "image": "img/1.jpg",
        "directions": { // Object
            "oost": 2,
            "zuid": 0
        }
    },
    {
        "titel": "Trap naast de oude ingang",
        "image": "img/2.jpg",
        "directions": { // Object
            "zuid": 1,
            "noord": 3
        }
    },
    {
        "titel": "Gang na de vorige trap",
        "image": "img/3.jpg",
        "directions": { // Object
            "oost": 4,
            "zuid": 2
        }
    },
    {
        "titel": "Ere Gallerij",
        "image": "img/4.jpg",
        "directions": { // Object
            "noord": 5,
            "zuid": 3
        }
    },
    {
        "titel": "De Nachtwacht",
        "image": "img/5.jpg",
        "directions": { // Object
            "oost": 6,
            "zuid": 4
        }
    },
    {
        "titel": "Gallerij oost van de Nachtwacht",
        "image": "img/6.jpg",
        "directions": { // Object
            "noord": 7,
            "zuid": 5
        }
    },
    {
        "titel": "Einde van de gang",
        "image": "img/7.jpg",
        "directions": { // Object
            "noord": 8,
            "zuid": 6
        }
    },
    {
        "titel": "Na de gang",
        "image": "img/8.jpg",
        "directions": { // Object
            "west": 9,
            "zuid": 7,
            "oost": 10
        }
    },
    {
        "titel": "Grote Bieb",
        "image": "img/9.jpg",
        "directions": { // Object
            "zuid": 8,
        }
    },
    {
        "titel": "Gallerij met De Slag van Waterloo",
        "image": "img/10.jpg",
        "directions": { // Object
            "noord": 11,
            "zuid": 8
        }
    },
    {
        "titel": "Einde van de gang",
        "image": "img/11.jpg",
        "directions": { // Object
            "noord": 1,
            "zuid": 10
        }
    }
];

function show(index) {
    myTitle.innerHTML = lokaties[index].titel;
    myImage.src = lokaties[index].image;
    current_index = index;

    //Knoppen opnieuw berekenen
    updateDirections();
}

function updateDirections(){
    // Haal de mogelijke directions op voor de current_index
    let possible = lokaties[current_index].directions;

    // Zet de direction keys in een aparte variabele
    let possible_keys = Object.keys(possible);
    
    // Zet de keys van de buttons in een aparte variabele
    let button_keys = Object.keys(directionButtons);
    
    // Zet eerst alle knoppen uit
    for(const key of button_keys){
        directionButtons[key].style.visibility = "hidden";
    }

    // Zet nu de mogelijke knoppen (directions) aan
    for(const key of possible_keys){
        directionButtons[key].style.visibility = 'visible';
    }
}


function getInput() {
    show(myInput.value);
    myInput.value = "";
    myInput.focus();
}

function goDirection(richting) {
    let punt_index = lokaties[current_index].directions[richting];
    show(punt_index);
}

show(0);