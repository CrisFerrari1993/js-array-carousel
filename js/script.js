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
let activeItem = 0;

// navigazione
let forwardButton = document.getElementById('forward');

forwardButton.addEventListener('click', function() {



    if(activeItem < items.length - 1) {
            items[activeItem].classList.remove('active');
            forwardButton.classList.add('active');
            //incremento l'index dell'elemento da visualizzare
            activeItem++;

            // aggiungo la classe item all'elemento successivo
            items[activeItem].classList.add('active');

            if(activeItem === items.length - 1) {
                // last item
                forwardButton.classList.add('hidden');
                backwarddButton.classList.add('active');
            } 
        }
    }
);

let backwarddButton = document.getElementById('backward');

backwarddButton.addEventListener('click', function () {



    if (activeItem > items.length -5) {
        items[activeItem].classList.remove('active');
        backwarddButton.classList.add('active');
        //riduciamo l'index dell'elemento da visualizzare
        activeItem--;

        // aggiungo la classe item all'elemento successivo
        items[activeItem].classList.add('active');

        if (activeItem === items.length - 5) {
            // last item
            backwarddButton.classList.add('hidden');
            forwardButton.classList.add('active');
        }
    }
}
);


