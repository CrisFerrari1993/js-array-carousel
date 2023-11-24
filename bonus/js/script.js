//BONUS :
/*
- generare il contenuto del carosello dinamicamente creandosi un array di riferimento tipo: [“img / nomeimmagine1.webp”,    “img / nomeimmagine2.webp”,…..];

- Aggiungere il ciclo infinito del carosello.Ovvero se è attiva la prima immagine e l’utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine del carosello e viceversa.

- Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto.Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.

*/
//array immagini container img
let carousel = ['img/01.webp',
'img/02.webp',
'img/03.webp',
'img/04.webp',
'img/05.webp'];
// arry immagini sidebar
let sidebarCarousel = ['img/01.webp',
'img/02.webp',
'img/03.webp',
'img/04.webp',
'img/05.webp'];
// array di layhover scuri
let layCarousel = ['<div class="layhover"></div>',
'<div class="layhover"></div>',
'<div class="layhover"></div>',
'<div class="layhover"></div>',
'<div class="layhover"></div>'];

// variabile dei contenitore img 
let itemsContainer = document.querySelector('.img_container');
//variabile contenitore sidebar
let nestedContainer = document.querySelector('.sidebar');

// loop per far apparire le immagini dentro l'array
for (let i = 0; i < carousel.length; i++) {
    itemsContainer.innerHTML += `<div class="item">
    <img class="fill" src="${carousel[i]}" alt="">
    </div>`
}
// loop per far apparire i layhover dell'array
for (let i = 0; i < sidebarCarousel.length; i++) {
    nestedContainer.innerHTML += `<div class='item'>${sidebarCarousel[i]}</div>`;
}
//dichiarazione variabile status attivo 
let activeItem = 0;
//"" statu attivo layhover
let activeLay = 0;

// prendo la classe item e gli assegno active
const itemList = document.getElementsByClassName('item');
itemList[activeItem].classList.add('active');

//prendo la classe layhover e gli assegno lo status attivo
const layList = document.getElementsByClassName('layhover');
layList[activeLay].classList.add('null');

//assegnazione variabili ai bottoni
let backwardButton = document.getElementById('backward');
let forwardButton = document.getElementById('forward');
//evento click a ritroso
backwardButton.addEventListener('click', function() {
    //se l'elemento  stato attivo è uguale alla lunghezza del carosello e anche il layhover
    if(activeItem === carousel.length - 1 && activeLay === sidebarCarousel.length - 1){
        //lo stato attivo rimane a 0
        activeItem = 0;
        activeLay = 0;
    } else {
        //altrimenti avanza insieme alla lunghezza del carosello
        activeItem++;
        activeLay++;

    }

    //rimuovo lo status attivo all'item
    document.querySelector('.item.active').classList.remove('active');
    // e lo aggiungo a quello precedente
    itemList[activeItem].classList.add('active');

    //aggiungo lo stato attivo allimmagine delle sidebar
    document.querySelector('.layhover.null').classList.remove('null');
    //e imposto il layhover scuro a quella prima
    layList[activeLay].classList.add('null');
    }
);

forwardButton.addEventListener('click', function() {

    if(activeItem === 0 && activeLay === 0) {
        activeItem = carousel.length -1;
        activeLay = sidebarCarousel.length -1;
    } else {
        activeItem--;
        activeLay--;
    }
    //rimuovo lo status attivo all'item
    document.querySelector('.item.active').classList.remove('active');
    // e lo aggiungo a quello successivo
    itemList[activeItem].classList.add('active');

    //aggiungo lo stato attivo allimmagine delle sidebar
    document.querySelector('.layhover.null').classList.remove('null');
    //e imposto il layhover scuro a quella dopo
    layList[activeLay].classList.add('null');


    }
);







