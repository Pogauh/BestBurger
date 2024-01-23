import {getProduits} from './api_produit.js ';

document.addEventListener("DOMContentLoaded", function() {
        var navbar = document.querySelector(".navbar");
        var logo = document.querySelector(".logo");
        

        window.addEventListener("scroll", function() {
            // Ajouter ou supprimer la classe "hidden" de la navbar
            if (window.scrollY > 50) {
                navbar.classList.add("hidden");
            } else {
                navbar.classList.remove("hidden");
            }

            // Ajouter ou supprimer la classe "small-logo" du logo
            if (window.scrollY > 100) {
                logo.classList.add("small-logo");
            } else {
                logo.classList.remove("small-logo");
            }
        });
    });

    async function afficherBurger() {
        try {
            const produits = await getProduits();
            var lesProduits = produits["hydra:member"];
    
            var container = document.getElementById('container');
            var elementsParLigne = 4;
            var elementsDansLaLigne = 0;
            var divLigne;  // Variable pour stocker la ligne actuelle
            console.log(produits);
            for (let produit of lesProduits) {
            if (produit.categorie.id === 1){
                if (elementsDansLaLigne === 0) {
                    // Créer une nouvelle ligne (flex container)
                    divLigne = document.createElement("div");
                    divLigne.classList.add("flex", "ml-40", "mr-40", "mt-5");
                    container.appendChild(divLigne);
                }
    



                var divCard = document.createElement("div");
                divCard.classList.add("w-60", "bg-white", "border", "border-gray-200", "rounded-lg", "shadow", "dark:bg-gray-800", "dark:border-gray-700", "mx-10");
                
                var img = document.createElement("img");
                //img.src = "";
                img.classList.add("rounded-t-lg");
    
                var divDetail = document.createElement("div");
                divDetail.classList.add("p-3");
    
                var titre = document.createElement("h1");
                titre.innerText = produit.nom;
                titre.classList.add("text-lg", "font-semibold");
    
                var desc = document.createElement("a");
                desc.innerText = produit.description;
                desc.classList.add("text-sm");

               
                divLigne.appendChild(divCard);
                divCard.appendChild(img);
                divCard.appendChild(divDetail);
                divDetail.appendChild(titre);
                divDetail.appendChild(desc);

    
                elementsDansLaLigne++;
    
                // Si nous avons atteint le nombre maximum d'éléments par ligne, réinitialiser le compteur
                if (elementsDansLaLigne === elementsParLigne) {
                    elementsDansLaLigne = 0;
                }
            }
            }
        } catch (erreur) {
            console.log('erreur :', erreur);
        }
    }

    //-------------------------------------------------------------------------------------------------


    async function afficherWrap() {
        try {
            const produits = await getProduits();
            var lesProduits = produits["hydra:member"];
    
            var container = document.getElementById('container');
            var elementsParLigne = 4;
            var elementsDansLaLigne = 0;
            var divLigne;  // Variable pour stocker la ligne actuelle
            console.log(produits);
            for (let produit of lesProduits) {
            if (produit.categorie.id === 3){
                if (elementsDansLaLigne === 0) {
                    // Créer une nouvelle ligne (flex container)
                    divLigne = document.createElement("div");
                    divLigne.classList.add("flex", "ml-40", "mr-40", "mt-5");
                    container.appendChild(divLigne);
                }
    



                var divCard = document.createElement("div");
                divCard.classList.add("w-60", "bg-white", "border", "border-gray-200", "rounded-lg", "shadow", "dark:bg-gray-800", "dark:border-gray-700", "mx-10");
                
                var img = document.createElement("img");
                //img.src = "";
                img.classList.add("rounded-t-lg");
    
                var divDetail = document.createElement("div");
                divDetail.classList.add("p-3");
    
                var titre = document.createElement("h1");
                titre.innerText = produit.nom;
                titre.classList.add("text-lg", "font-semibold");
    
                var desc = document.createElement("a");
                desc.innerText = produit.description;
                desc.classList.add("text-sm");

               
                divLigne.appendChild(divCard);
                divCard.appendChild(img);
                divCard.appendChild(divDetail);
                divDetail.appendChild(titre);
                divDetail.appendChild(desc);

    
                elementsDansLaLigne++;
    
                // Si nous avons atteint le nombre maximum d'éléments par ligne, réinitialiser le compteur
                if (elementsDansLaLigne === elementsParLigne) {
                    elementsDansLaLigne = 0;
                }
            }
            }
        } catch (erreur) {
            console.log('erreur :', erreur);
        }
    }


    //----------------------------------------------------------------------------------------


    async function afficherSandwich() {
        try {
            const produits = await getProduits();
            var lesProduits = produits["hydra:member"];
    
            var container = document.getElementById('container');
            var elementsParLigne = 4;
            var elementsDansLaLigne = 0;
            var divLigne;  // Variable pour stocker la ligne actuelle
            console.log(produits);
            for (let produit of lesProduits) {
            if (produit.categorie.id === 2){
                if (elementsDansLaLigne === 0) {
                    // Créer une nouvelle ligne (flex container)
                    divLigne = document.createElement("div");
                    divLigne.classList.add("flex", "ml-40", "mr-40", "mt-5");
                    container.appendChild(divLigne);
                }
    



                var divCard = document.createElement("div");
                divCard.classList.add("w-60", "bg-white", "border", "border-gray-200", "rounded-lg", "shadow", "dark:bg-gray-800", "dark:border-gray-700", "mx-10");
                
                var img = document.createElement("img");
                //img.src = "";
                img.classList.add("rounded-t-lg");
    
                var divDetail = document.createElement("div");
                divDetail.classList.add("p-3");
    
                var titre = document.createElement("h1");
                titre.innerText = produit.nom;
                titre.classList.add("text-lg", "font-semibold");
    
                var desc = document.createElement("a");
                desc.innerText = produit.description;
                desc.classList.add("text-sm");

               
                divLigne.appendChild(divCard);
                divCard.appendChild(img);
                divCard.appendChild(divDetail);
                divDetail.appendChild(titre);
                divDetail.appendChild(desc);

    
                elementsDansLaLigne++;
    
                // Si nous avons atteint le nombre maximum d'éléments par ligne, réinitialiser le compteur
                if (elementsDansLaLigne === elementsParLigne) {
                    elementsDansLaLigne = 0;
                }
            }
            }
        } catch (erreur) {
            console.log('erreur :', erreur);
        }
    }


    //--------------------------------------------------------------------------

    async function afficherPetiteFaim() {
        try {
            const produits = await getProduits();
            var lesProduits = produits["hydra:member"];
    
            var container = document.getElementById('container');
            var elementsParLigne = 4;
            var elementsDansLaLigne = 0;
            var divLigne;  // Variable pour stocker la ligne actuelle
            console.log(produits);
            for (let produit of lesProduits) {
            if (produit.categorie.id === 4){
                if (elementsDansLaLigne === 0) {
                    // Créer une nouvelle ligne (flex container)
                    divLigne = document.createElement("div");
                    divLigne.classList.add("flex", "ml-40", "mr-40", "mt-5");
                    container.appendChild(divLigne);
                }
    
                var divCard = document.createElement("div");
                divCard.classList.add("w-60", "bg-white", "border", "border-gray-200", "rounded-lg", "shadow", "dark:bg-gray-800", "dark:border-gray-700", "mx-10");
                
                var img = document.createElement("img");
                //img.src = "";
                img.classList.add("rounded-t-lg");
    
                var divDetail = document.createElement("div");
                divDetail.classList.add("p-3");
    
                var titre = document.createElement("h1");
                titre.innerText = produit.nom;
                titre.classList.add("text-lg", "font-semibold");
    
                var desc = document.createElement("a");
                desc.innerText = produit.description;
                desc.classList.add("text-sm");

               
                divLigne.appendChild(divCard);
                divCard.appendChild(img);
                divCard.appendChild(divDetail);
                divDetail.appendChild(titre);
                divDetail.appendChild(desc);

    
                elementsDansLaLigne++;
    
                // Si nous avons atteint le nombre maximum d'éléments par ligne, réinitialiser le compteur
                if (elementsDansLaLigne === elementsParLigne) {
                    elementsDansLaLigne = 0;
                }
            }
            }
        } catch (erreur) {
            console.log('erreur :', erreur);
        }
    }








    document.addEventListener('DOMContentLoaded', function() {
        if (window.location.href.endsWith("/burger/")) {
            document.getElementById("info1").classList.remove("mt-10");
            
        }
    });


    document.addEventListener('DOMContentLoaded', function() {
        if (window.location.href.endsWith("/burger/burger")) {
            afficherBurger();
        }
    });

    document.addEventListener('DOMContentLoaded', function() {
        if (window.location.href.endsWith("/burger/wrap")) {
            afficherWrap();
        }
    });

    document.addEventListener('DOMContentLoaded', function() {
        if (window.location.href.endsWith("/burger/sandwich")) {
            afficherSandwich();
        }
    });

    document.addEventListener('DOMContentLoaded', function() {
        if (window.location.href.endsWith("/burger/petiteFaim")) {
            afficherPetiteFaim();
        }
    });