async function getProduits(page=1) {
    try{
        const response = await fetch(`https://s3-4680.nuage-peda.fr/burger/api/produits?page=${page}`);
        if(!response.ok){
            throw new Error('Erreur : '+response.statusText);
        }
        const data = await response.json();
        return data;
    }
    catch(erreur){
        console.error('Erreur lors de la configuration: ',erreur);
        throw erreur;
    }
}

export {getProduits}