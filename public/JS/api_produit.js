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

async function deleteProduit(id) {
    try {
        const response = await fetch(`https://s3-4680.nuage-peda.fr/burger/api/produits/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                // Ajoutez d'autres en-têtes si nécessaire, comme les jetons d'authentification
            },
            // Vous pouvez également ajouter un corps JSON si votre API l'exige
            // body: JSON.stringify({ key: 'value' }),
        });

        if (!response.ok) {
            throw new Error('Erreur lors de la suppression : ' + response.statusText);
        }

        const data = await response.json();
        return data;
    } catch (erreur) {
        console.error('Erreur lors de la suppression : ', erreur);
        throw erreur;
    }
}



export {getProduits, deleteProduit}