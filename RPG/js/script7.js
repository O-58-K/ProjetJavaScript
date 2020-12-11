function PerduPartie(id) {
    let choixE = document.getElementById('choix');
    if (id == 1 && joueur.nom == "harry" || joueur.nom == "Harry") {
      alert("Les araignes ne sont pas effrayees et vous mange...");
    }
    else if (id == 1 && joueur.nom == "hermione" || joueur.nom == "Hermione" ) {
      alert("Les araignees ne sont pas effrayees et vous kidnappent...");
    }
    else if (id == 2) {
      alert("La voix inconnue n'etait autre qu'une araignee geante qui vous fusile du regard et fait de vous son 4 heures");
    }
    else if (id == 3) {
      alert("Dommage il restait quelques monstres retardataires qui n'ont fait qu'une bouchee de vous.");
    }
    else if (id == 4) {
      alert("Vous passez discretement jusqu'a ce que votre tete se retrouve pressee contre le sol par la massue immense du Roi Araignee qui vous a reperer.");
    }
    else if (id == 5) {
      alert("Dommage : Vous allez devenir l'esclave personnel du Mangemort qui vous torture ce jusqu'a la fin de vos jours.");
    }
    let Perdu = document.getElementById('PerduPartie');
    Perdu.classList.remove("disabled");
    choixE.innerHTML = '';
  
  }
  
  Commencer();