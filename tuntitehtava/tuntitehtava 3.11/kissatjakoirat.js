'use strict';

//1. Korjaa linkki JavaScriptillä: 
// Koira-linkin pitää viedä oikealle Wikipedia-sivulle.
let koiralinkki = document.querySelector("#koiralinkki");

koiralinkki.setAttribute("href", "https://fi.wikipedia.org/wiki/Koira")


//2. Tässä yritetään lisätä kissalistaan uusi elementti.
// Korjaa toimivaksi.

let ol = document.querySelector("#kissalista");
let kissalisays = document.createElement('li');
ol.appendChild(kissalisays);
kissalisays.innerText = 'Kissat pärjäävät mainiosti yksinäänkin.';


//3. Tässä yritetään lisätä koiralistaan uusi elementti. 
// Korjaa toimivaksi.

const koiralista = document.querySelector('#koiralista');
const koiralisays = document.createElement('li');
koiralisays.innerText = "Monet koirat palvovat omistajaansa.";
koiralista.appendChild(koiralisays);


//Event-esimerkki, sama kuin materiaalissa. Toimiiko?
const button = document.querySelector('button');
button.addEventListener('click', function(evt){
  alert('Elementtiä ' + evt.currentTarget.tagName + ' klikattiin');
});



//tuntitehtävä 3, esimerkki
addEventListener("keydown", function(evt){
    console.log(evt.key);
    if (evt.key === "k") {
        alert("Painoit salaista nappia!");
    }
});

addEventListener("copy", function(evt){
        alert(`kopioit seuraavan tekstin: ${window.getSelection().toString()}`);

});


