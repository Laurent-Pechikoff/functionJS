
var dbVoitures = [
    {
        marque: "Volkswagen",
        nom: "Polo",
        prix: 9490,
        image: "volkswagen-polo.jpg",
        carburant: "Diesel"

    },
    {
        marque: "Peugeot",
        nom: "2008",
        prix: 9590,
        image: "peugeot-2008.jpg",
        carburant: "Essence"

    },
    {
        marque: "Dacia",
        nom: "Duster",
        prix: 18890,
        image: "dacia-duster.jpg",
        carburant: "Essence"

    },
    {
        marque: "Renault",
        nom: "Clio",
        prix: 14990,
        image: "renault-clio.jpg",
        carburant: "Essence"

    },
    {
        marque: "Fiat",
        nom: "500",
        prix: 12990,
        image: "fiat-500.jpg",
        carburant: "Hybride"

    },
    {
        marque: "Nissan",
        nom: "Pulsar",
        prix: 11990,
        image: "nissan-pulsar.jpg",
        carburant: "Diesel"

    },
    {
        marque: "Toyota",
        nom: "Yaris",
        prix: 14490,
        image: "toyota-yaris.jpg",
        carburant: "Hybride"

    },
    {
        marque: "Citroën",
        nom: "C4",
        prix: 14990,
        image: "citroen-c4.jpg",
        carburant: "Diesel"

    },
    {
        marque: "Toyota",
        nom: "C-HR",
        prix: 24490,
        image: "toyota-c-hr.jpg",
        carburant: "Hybride"

    },
    {
        marque: "Mercedes",
        nom: "GLC",
        prix: 47397,
        image: "mercedes-glc.jpg",
        carburant: "Hybride"

    },
];


//

// function afficherVoiture(){


// for (let i = 0; i < dbVoitures.length; i++) {
//     var article = document.createElement('article');
//     // article.classList.add('row');

//     var card = document.createElement('div');
//     card.classList.add('card', 'd-flex', 'flex-column');
//     card.style = "width: 18rem;"
//     var cardBody = document.createElement('div');
//     cardBody.classList.add('card-body', 'd-flex', 'flex-column');
//     var nom = document.createElement('h5');
//     var newNom = document.createTextNode('Nom : ' + dbVoitures[i].nom);
//     nom.appendChild(newNom);

//     var marque = document.createElement('p');
//     var newMarque = document.createTextNode('Marque : ' + dbVoitures[i].marque);
//     marque.appendChild(newMarque);

//     var prix = document.createElement('p');
//     var newPrix = document.createTextNode('Prix : ' + dbVoitures[i].prix+" euros");
//     prix.appendChild(newPrix);

//     var carburant = document.createElement('p');
//     var newCarburant = document.createTextNode('Carburant : ' + dbVoitures[i].carburant);
//     carburant.appendChild(newCarburant);
//     // quantite.classList.add('align-self-end', 'mt-auto');

//     var image = document.createElement('img');
//     image.src = "assets/image/" + dbVoitures[i].image;

//     // creation card body
//     cardBody.appendChild(nom);
//     cardBody.appendChild(marque);
//     cardBody.appendChild(prix);
//     cardBody.appendChild(carburant);

//     // creation card
//     card.appendChild(image);
//     card.appendChild(cardBody);

//     article.appendChild(card);
//     article.classList.add('col-3');

//     main.appendChild(article);

// }

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";

        mybutton.style.display = "none";

    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}






// afficher voiture essence 
var main = document.getElementById('row');
var all = document.getElementById('all');
var essence = document.getElementById("essence");
var diesel = document.getElementById("diesel");
var hybride = document.getElementById("hybride");
var ajouter = document.getElementById('ajouter');
essence.addEventListener('click', function () {

    while (form.childNodes.length > 0) {
        form.firstChild.remove();
    }
    while (main.childNodes.length > 0) {
        main.firstChild.remove();
    }



    for (let i = 0; i < dbVoitures.length; i++) {
        if (dbVoitures[i].carburant.toLocaleUpperCase() == "ESSENCE") {


            var article = document.createElement('article');
            // article.classList.add('row');

            var card = document.createElement('div');
            card.classList.add('card', 'd-flex', 'flex-column');
            card.style = "width: 18rem;"
            var cardBody = document.createElement('div');
            cardBody.classList.add('card-body', 'd-flex', 'flex-column');
            var nom = document.createElement('h5');
            var newNom = document.createTextNode('Nom : ' + dbVoitures[i].nom);
            nom.appendChild(newNom);

            var marque = document.createElement('p');
            var newMarque = document.createTextNode('Marque : ' + dbVoitures[i].marque);
            marque.appendChild(newMarque);

            var prix = document.createElement('p');
            var newPrix = document.createTextNode('Prix : ' + dbVoitures[i].prix + " euros");
            prix.appendChild(newPrix);

            var carburant = document.createElement('p');
            var newCarburant = document.createTextNode('Carburant : ' + dbVoitures[i].carburant);
            carburant.appendChild(newCarburant);
            // quantite.classList.add('align-self-end', 'mt-auto');

            var image = document.createElement('img');
            image.src = "assets/image/" + dbVoitures[i].image;

            // creation card body
            cardBody.appendChild(nom);
            cardBody.appendChild(marque);
            cardBody.appendChild(prix);
            cardBody.appendChild(carburant);

            // creation card
            card.appendChild(image);
            card.appendChild(cardBody);

            article.appendChild(card);
            article.classList.add('col-sm-3');

            main.appendChild(article);

        }
    }
})

diesel.addEventListener('click', function () {
    while (form.childNodes.length > 0) {
        form.firstChild.remove();
    }
    while (main.childNodes.length > 0) {
        main.firstChild.remove();
    }


    for (let i = 0; i < dbVoitures.length; i++) {
        if (dbVoitures[i].carburant.toLocaleUpperCase() == "DIESEL") {


            var article = document.createElement('article');
            // article.classList.add('row');

            var card = document.createElement('div');
            card.classList.add('card', 'd-flex', 'flex-column');
            card.style = "width: 18rem;"
            var cardBody = document.createElement('div');
            cardBody.classList.add('card-body', 'd-flex', 'flex-column');
            var nom = document.createElement('h5');
            var newNom = document.createTextNode('Nom : ' + dbVoitures[i].nom);
            nom.appendChild(newNom);

            var marque = document.createElement('p');
            var newMarque = document.createTextNode('Marque : ' + dbVoitures[i].marque);
            marque.appendChild(newMarque);

            var prix = document.createElement('p');
            var newPrix = document.createTextNode('Prix : ' + dbVoitures[i].prix + " euros");
            prix.appendChild(newPrix);

            var carburant = document.createElement('p');
            var newCarburant = document.createTextNode('Carburant : ' + dbVoitures[i].carburant);
            carburant.appendChild(newCarburant);
            // quantite.classList.add('align-self-end', 'mt-auto');

            var image = document.createElement('img');
            image.src = "assets/image/" + dbVoitures[i].image;

            // creation card body
            cardBody.appendChild(nom);
            cardBody.appendChild(marque);
            cardBody.appendChild(prix);
            cardBody.appendChild(carburant);

            // creation card
            card.appendChild(image);
            card.appendChild(cardBody);

            article.appendChild(card);
            article.classList.add('col-sm-3');

            main.appendChild(article);

        }
    }
})
hybride.addEventListener('click', function () {
    while (form.childNodes.length > 0) {
        form.firstChild.remove();
    }
    while (main.childNodes.length > 0) {
        main.firstChild.remove();
    }


    for (let i = 0; i < dbVoitures.length; i++) {
        if (dbVoitures[i].carburant.toLocaleUpperCase() == "HYBRIDE") {


            var article = document.createElement('article');
            // article.classList.add('row');

            var card = document.createElement('div');
            card.classList.add('card', 'd-flex', 'flex-column');
            card.style = "width: 18rem;"
            var cardBody = document.createElement('div');
            cardBody.classList.add('card-body', 'd-flex', 'flex-column');
            var nom = document.createElement('h5');
            var newNom = document.createTextNode('Nom : ' + dbVoitures[i].nom);
            nom.appendChild(newNom);

            var marque = document.createElement('p');
            var newMarque = document.createTextNode('Marque : ' + dbVoitures[i].marque);
            marque.appendChild(newMarque);

            var prix = document.createElement('p');
            var newPrix = document.createTextNode('Prix : ' + dbVoitures[i].prix + " euros");
            prix.appendChild(newPrix);

            var carburant = document.createElement('p');
            var newCarburant = document.createTextNode('Carburant : ' + dbVoitures[i].carburant);
            carburant.appendChild(newCarburant);
            // quantite.classList.add('align-self-end', 'mt-auto');

            var image = document.createElement('img');
            image.src = "assets/image/" + dbVoitures[i].image;

            // creation card body
            cardBody.appendChild(nom);
            cardBody.appendChild(marque);
            cardBody.appendChild(prix);
            cardBody.appendChild(carburant);

            // creation card
            card.appendChild(image);
            card.appendChild(cardBody);

            article.appendChild(card);
            article.classList.add('col-sm-3');

            main.appendChild(article);

        }
    }
})

all.addEventListener('click', function () {
    while (form.childNodes.length > 0) {
        form.firstChild.remove();
    }
    while (main.childNodes.length > 0) {
        main.firstChild.remove();
    }


    for (let i = 0; i < dbVoitures.length; i++) {



        var article = document.createElement('article');
        // article.classList.add('row');

        var card = document.createElement('div');
        card.classList.add('card', 'd-flex', 'flex-column');
        card.style = "width: 18rem;"
        var cardBody = document.createElement('div');
        cardBody.classList.add('card-body', 'd-flex', 'flex-column');
        var nom = document.createElement('h5');
        var newNom = document.createTextNode('Nom : ' + dbVoitures[i].nom);
        nom.appendChild(newNom);

        var marque = document.createElement('p');
        var newMarque = document.createTextNode('Marque : ' + dbVoitures[i].marque);
        marque.appendChild(newMarque);

        var prix = document.createElement('p');
        var newPrix = document.createTextNode('Prix : ' + dbVoitures[i].prix + " euros");
        prix.appendChild(newPrix);

        var carburant = document.createElement('p');
        var newCarburant = document.createTextNode('Carburant : ' + dbVoitures[i].carburant);
        carburant.appendChild(newCarburant);
        // quantite.classList.add('align-self-end', 'mt-auto');

        var image = document.createElement('img');
        image.src = "assets/image/" + dbVoitures[i].image;

        // creation card body
        cardBody.appendChild(nom);
        cardBody.appendChild(marque);
        cardBody.appendChild(prix);
        cardBody.appendChild(carburant);

        // creation card
        card.appendChild(image);
        card.appendChild(cardBody);

        article.appendChild(card);
        article.classList.add('col-sm-3');

        main.appendChild(article);

    }

})

// creation du formulaire

// A TERMINER !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var labelId = ["nomVoiture", "marqueVoiture", "prixVoiture", "carburantVoiture", "imageVoiture"];
var valeurText = ["Nom voiture", "Marque voiture", "Prix voiture", "Carburant voiture", "Image voiture"];
var form = document.getElementById("form");

ajouter.addEventListener('click', function (e) {
    e.preventDefault();
    while (form.childNodes.length > 0) {
        form.firstChild.remove();
    }
    while (main.childNodes.length > 0) {
        main.firstChild.remove();
    }
    for (let i = 0; i < (labelId.length); i++) {
        let div = document.createElement("div");
        div.classList.add('mb-3');
        let label = document.createElement('label');
        label.classList.add('form-label');
        let newLabel = document.createTextNode(valeurText[i]);
        label.appendChild(newLabel);
        let input = document.createElement('input');
        input.type = "text";
        input.classList.add('form-control', 'col-6');
        input.id = labelId[i];

        div.appendChild(label);
        div.appendChild(input);

        form.appendChild(div);

    }
    let button = document.createElement('button');
    let valeurBton = document.createTextNode('Envoyer');
    button.appendChild(valeurBton);
    button.classList.add('btn', 'btn-primary');
    button.type = "submit";
    button.id = "btn-submit";

    button.setAttribute('onclick', 'ajouterVoiture()');

        form.appendChild(button);

})



var btnsubmit = document.getElementById('btn-submit');
function ajouterVoiture() {
    // *********************ajout tableau dbVoiture****************************
    var nomVoiture = document.getElementById('nomVoiture');
    var nomV = nomVoiture.value;
    var marqueVoiture = document.getElementById('marqueVoiture');
    var prixVoiture = document.getElementById('prixVoiture');
    var carburantVoiture = document.getElementById('carburantVoiture');
    var imageVoiture = document.getElementById('imageVoiture');


    // e.preventDefault();
    console.log("nomVoiture : " + nomVoiture.value);
    console.log(nomV);
    console.log(marqueVoiture);
    console.log(prixVoiture);
    console.log(carburantVoiture);
    console.log(imageVoiture);
    let newVoiture = ({
        "marque": marqueVoiture.value,
        "nom": nomVoiture.value,
        "prix": prixVoiture.value,
        "image": imageVoiture.value,
        "carburant": carburantVoiture.value,
    })
    dbVoitures.push(newVoiture);
    // Object.assign(dbVoitures, newVoiture);
}

// }
//     btnsubmit.addEventListener('click', function (e) {

// }
