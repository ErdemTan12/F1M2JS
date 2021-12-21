console.log("Script is geladen!");

const groentevak = document.getElementById('groente');
const fruitvak = document.getElementById('fruit');

function zetInFruitLa(fruit){
    console.log(fruit);

    const nieuwElement = document.createElement('h2');
    nieuwElement.innerHTML = fruit;
    nieuwElement.className = 'rood';
    fruitvak.appendChild(nieuwElement);
}

const zetInGroenteLa = function(groente){
    console.log('Ik zet de ' + groente + ' in de groente lade');

    const element = document.createElement('h2');
    element.className = 'groen';
    element.innerHTML = groente;
    
    groentevak.appendChild(element);

}