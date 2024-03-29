class Etudiant {
    constructor(CNE, nom, prenom) {
        this.CNE = CNE
        this.nom = nom
        this.prenom = prenom
    }
    getCNE() {
        return this.CNE
    }
    setCNE(newCNE) {
        this.CNE = newCNE
    }
    getnom() {
        return this.nom
    }
    setnom(newnom) {
        this.nom = newnom
    }
    getprenom() {
        return this.prenom
    }
    setprenom(newprenom) {
        this.prenom = newprenom
    }
    Affichage() {
        console.log(this.nom + " " + this.prenom + " " + this.CNE)
    }
    Equal(Etudiant) {
        if ((Etudiant.nom == this.nom) && (Etudiant.prenom == this.prenom)) {
            return true;
        }
        else return false;
    }
}


// let e1 = new Etudiant("J100200", "Achbili", "Noureddine")
// let e2 = new Etudiant("W550230", "Arroui", "Anass")
// let e3 = new Etudiant("M193230", "Nachit", "Simo")

// console.log(e1.Affichage())
// console.log(e2.Affichage())
// e3.setprenom("Mohamed")
// console.log(e3.Affichage())
// console.log(e1.Equal(e3))

//-------------------------------------

class Proprietaire {
    constructor(nom, prenom, age, CIN) {
        this.nom = nom
        this.prenom = prenom
        this.age = age
        this.CIN = CIN
    }
    getnom() {
        return this.nom
    }
    setnom(value) {
        this.nom = value
    }
    getprenom() {
        return this.prenom
    }
    setprenom(value) {
        this.prenom = value
    }
    getage() {
        return this.age
    }
    setage(value) {
        this.age = value
    }
    getcin() {
        return this.CIN
    }
    setcin(value) {
        this.CIN = value
    }
    Affichage() {
        console.log(this.nom + " " + this.prenom + " " + this.CNE + " " + this.age)
    }
    Equal(Proprietaire) {
        if ((Proprietaire.nom == this.nom) && (Proprietaire.prenom == this.prenom)) {
            return true;
        }
        else return false;
    }
}

//-------------------------------------

class Maison {
    constructor(adresse, nbetages, nbchambres) {
        this.adresse = adresse
        this.nbetages = nbetages
        this.nbchambres = nbchambres
    }
    getadresse() {
        return this.adresse
    }
    setadresse(value) {
        this.adresse = value
    }
    getnbetages() {
        return this.nbetages
    }
    setnbetages(value) {
        this.nbetages = value
    }
    getnbchambres() {
        return this.nbchambres
    }
    setnbchambres(value) {
        this.nbchambres = value
    }
    Affichage() {
        console.log(this.adresse + " " + this.nbetages + " " + this.nbchambres)
    }
}

//-------------------------------------

class produit {
    constructor(reference, prix, quantite) {
        this.reference = reference
        this.prix = prix
        this.quantite = quantite
    }
    getreference() {
        return this.reference
    }
    setreference(value) {
        this.reference = value
    }
    getprix() {
        return this.prix
    }
    setprix(value) {
        this.prix = value
    }
    getquantite() {
        return this.quantite
    }
    setquantite(value) {
        this.quantite = value
    }
    Affichage() {
        console.log(this.reference + " " + this.prix + " " + this.quantite)
    }
}

class medicament extends produit {
    constructor(reference, prix, quantite, nom, molecule) {
        super(reference, prix, quantite);
        this.nom = nom
        this.molecule = molecule
    }
    getnom() {
        return this.nom
    }
    setnom(value) {
        this.nom = value
    }
    getmolecule() {
        return this.molecule
    }
    setmolecule(value) {
        this.molecule = value
    }
    Affichage() {
        console.log(this.nom + " " + this.molecule)
    }
}

class ParaPhram extends produit {
    constructor(reference, prix, quantite, type) {
        super(reference, prix, quantite);
        this.type = type
    }
    gettype() {
        return this.type
    }
    settype(value) {
        this.type = value
    }
    Affichage() {
        console.log(this.type)
    }
}

//-------------------------------------

class Batiment {
    constructor(adresse, prix, superficie) {
        this.adresse = adresse;
        this.prix = prix;
        this.superficie = superficie;
    }

    getAdresse() {
        return this.adresse;
    }

    getPrix() {
        return this.prix;
    }

    getSuperficie() {
        return this.superficie;
    }

    setAdresse(adresse) {
        this.adresse = adresse;
    }

    setPrix(prix) {
        if (prix >= 0) {
            this.prix = prix;
        } else {
            console.error("Le prix ne peut pas être négatif");
        }
    }

    setSuperficie(superficie) {
        if (superficie >= 0) {
            this.superficie = superficie;
        } else {
            console.error("La superficie ne peut pas être négative");
        }
    }

    afficher() {
        console.log(`Adresse: ${this.adresse}`);
        console.log(`Prix: ${this.prix}`);
        console.log(`Superficie: ${this.superficie}`);
    }
}

class Maison extends Batiment {
    constructor(adresse, prix, superficie, nbEtages) {
        super(adresse, prix, superficie);
        this.nbEtages = nbEtages;
    }

    getNbEtages() {
        return this.nbEtages;
    }

    setNbEtages(nbEtages) {
        if (nbEtages > 0) {
            this.nbEtages = nbEtages;
        } else {
            console.error("Le nombre d'étages doit être > ou 1");
        }
    }

    afficher() {
        super.afficher();
        console.log(`Nombre d'étages: ${this.nbEtages}`);
    }
}

class Appartement extends Batiment {
    constructor(adresse, prix, superficie, numeroEtage, nbChambres) {
        super(adresse, prix, superficie);
        this.numeroEtage = numeroEtage;
        this.nbChambres = nbChambres;
    }

    getNumeroEtage() {
        return this.numeroEtage;
    }

    getNbChambres() {
        return this.nbChambres;
    }

    setNumeroEtage(numeroEtage) {
        if (numeroEtage > 0) {
            this.numeroEtage = numeroEtage;
        } else {
            console.error("Le numéro d'étage doit être > ou 1");
        }
    }

    setNbChambres(nbChambres) {
        if (nbChambres > 0) {
            this.nbChambres = nbChambres;
        } else {
            console.error("Le nombre de chambres doit être > ou 1");
        }
    }

    afficher() {
        super.afficher();
        console.log(`Numéro d'étage: ${this.numeroEtage}`);
        console.log(`Nombre de chambres: ${this.nbChambres}`);
    }
}



