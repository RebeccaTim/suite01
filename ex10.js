/*
    Ecrire une fonction "shoppingList",
    qui prend un paramètre un tableau de paniers;

    Un panier est un tableau de mots;

    La fonction retourne un objet contenant:
        - comme clef le nom du produit rencontré
        - comme valeur le nombre de fois qu'il à été rencontré

    Important -> l'ordre n'a aucune importance
*/

/*      Test 1
    Appel à la fonction "shoppingList",
    prenant en paramètre le tableau

    [
        ["orange", "orange", "kiwi", "ananas"],
        ["kiwi", "ananas", "banane", "prune"],
        ["orange", "orange", "orange", "orange"],
        ["orange", "orange", "kiwi", "kiwi"],
        ["prune", "banane", "pamplemousse", "ananas"]
    ]

    et nous attendons comme résultat

    {
        "orange": 8,
        "kiwi": 4,
        "ananas": 3,
        "prune": 2,
        "banane": 2,
        "pamplemousse": 1
    }

*/

console.log(shoppingList([
    ["orange", "orange", "kiwi", "ananas"],
    ["kiwi", "ananas", "banane", "prune"],
    ["orange", "orange", "orange", "orange"],
    ["orange", "orange", "kiwi", "kiwi"],
    ["prune", "banane", "pamplemousse", "ananas"]
]))
;

//  écrire votre code sous ce commentaire

function shoppingList(tableau) {

var nbk, nba, nbb, nbp, nbo, nbpa;
var panier;
for (let i in tableau){

	for (let j in panier){
		if (panier[j] ==="orange"){
			nbo++;
		}
		else if (panier[j] ==="ananas"){
                        nba++;
                }
		else if (panier[j] ==="kiwi"){
                        nbk++;
                }
		else if (panier[j] ==="prune"){
                        nbp++;
                }
		else if (panier[j] ==="pamplemousse"){
                        nbpa++;
                }
		if (panier[j] ==="orange"){
                        nbo++;
                }
		return {
				"orange":nbo,
				"kiwi":nbk,
				"prune":nbp,
				"ananas":nba,
				"pamplemousse":nbpa,
			}
	tableau.push(panier);
}
