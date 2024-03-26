import {getProduits, deleteProduit} from './api_produit.js ';

document.addEventListener("DOMContentLoaded", function() {
    var navbarGrand = document.querySelector(".navbarGrand");
    var navbarPetit = document.querySelector(".navbarPetit");
    var ButtonNavPetit = document.querySelector('.buttonNavPetit');
    var logo = document.querySelector(".logo");

    ButtonNavPetit.addEventListener('click', function () {
        navbarPetit.classList.toggle('hidden');
        navbarPetit.classList.add("fixed");
    });

    window.addEventListener("scroll", function() {
        if (window.innerWidth > 1024) {
            if (window.scrollY > 50) {
                navbarGrand.classList.add("scrolled");
            } else {
                navbarGrand.classList.remove("scrolled");
            }
        }
        
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
            console.log(produits);
    
            var container = document.getElementById('container');
            var elementsParLigne = 4;
            var elementsDansLaLigne = 0;
            var divLigne;  // Variable pour stocker la ligne actuelle
            for (let produit of lesProduits) {
            if (produit.categorie.id === 1){
                if (elementsDansLaLigne === 0) {
                    // Créer une nouvelle ligne (flex container)
                    divLigne = document.createElement("div");
                    divLigne.classList.add("flex", "ml-40", "mr-40", "mt-5");
                    container.appendChild(divLigne);
                }
    
                var divCard = document.createElement("div");
                divCard.classList.add("w-60", "bg-white", "border", "border-gray-200", "rounded-lg",
                "shadow", "dark:bg-gray-800", "dark:border-gray-700", "mx-10");
                
                var img = document.createElement("img");
                img.src = "assets/"+produit.image;
                img.classList.add("rounded-t-lg");
    
                var divDetail = document.createElement("div");
                divDetail.classList.add("p-3");
    
                var titre = document.createElement("h1");
                titre.innerText = produit.nom;
                titre.classList.add("text-lg", "font-semibold");
    
                var desc = document.createElement("a");
                desc.innerText = produit.description;
                desc.classList.add("text-sm");

                var br = document.createElement("br");

                var prixMenu = document.createElement("a");
                prixMenu.innerText = "Prix menu : "+produit.prixMenu;
                prixMenu.classList.add("text-sm","font-bold");

                var br2 = document.createElement("br");

                var prixSeul = document.createElement("a");
                prixSeul.innerText = "Prix Burger seul : "+produit.prixSeul;
                prixSeul.classList.add("text-sm","font-bold");

                

                var boutonSupprimer = document.createElement("button");
                boutonSupprimer.innerText = "Supprimer";
                boutonSupprimer.classList.add("text-sm", "font-bold", "text-red-500", "hover:text-red-700", "cursor-pointer");

                boutonSupprimer.addEventListener("click", function () {
                    supprimerProduit(produit.id);
                });


                divLigne.appendChild(divCard);
                divCard.appendChild(img);
                divCard.appendChild(divDetail);
                divDetail.appendChild(titre);
                divDetail.appendChild(desc);
                divDetail.appendChild(br);
                divDetail.appendChild(prixMenu);
                divDetail.appendChild(br2);
                divDetail.appendChild(prixSeul);
                divDetail.appendChild(boutonSupprimer);
                elementsDansLaLigne++;
                // Si nous avons atteint le nombre maximum d'éléments par ligne,
                //réinitialiser le compteur
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

    function supprimerProduit(id) {
        deleteProduit(id)
            .then(data => {
                console.log('Produit supprimé avec succès:', data);
                // Vous pouvez également mettre à jour l'interface utilisateur ici, si nécessaire
            })
            .catch(error => {
                console.error('Erreur lors de la suppression du produit:', error);
            });
    }    

    //-------------------------------------------------------------------------------------------------


    async function afficherWrap() {
        try {
            const produits = await getProduits();
            var lesProduits = produits["hydra:member"];
    
            var container = document.getElementById('container');
            var elementsParLigne = 4;
            var elementsDansLaLigne = 0;
            var divLigne;  
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
                img.src = "assets/"+produit.image;
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
            var divLigne;  
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
                img.src = "assets/"+produit.image;
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
            var divLigne;  
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
                img.src = "assets/"+produit.image;
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