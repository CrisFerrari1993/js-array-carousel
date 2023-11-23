/*
Consegna:
    Creare un carosello come nello screenshot allegato.
    MILESTONE 1
        Per prima cosa, creiamo il markup statico: l’html con tutto il necessario perchè funzioni il carosello.
        (Se su qualche parte del layout vedete che ci state perdendo troppo tempo tralasciate i dettagli e passate alla parte logica il prima possibile).
    MILESTONE 2
        Al click dell’utente sulle frecce(sia Prev che Next), il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
*/

// Assegnazione della variabili
let items = document.getElementsByClassName('item');
let forwardButton = document.getElementById('forward');

let activeItem = 0;
console.log(items);

document.querySelector('.img_container')
forwardButton.addEventListener('click', function() {
    if(activeItem < items.length - 1) {
        items[activeItem].classList.remove('active');

        //incremento l'index dell'elemento da visualizzare
        activeItem++;

        // aggiungo la classe item all'elemento successivo
        items[activeItem].classList.add('active');
    }
}
);

