//Création d'araignees et lancement des combats et affichage de leur stats #2
function ZoneDeCombat(numCombat) {
    let Arcomantula = new Ennemi ("Arcomantula", 30, 5, 5, 17);
    let Aragog = new Ennemi ("Aragog", 55, 9, 10, 17);
    let HordesAraignees = new Ennemi ("Hordes d'araignees", 20, 9, 20, 19);
    let Mangemort = new Ennemi ("Mangemort", 200, 30, 700, 10);
    let Mangemorts = new Ennemi ("Mangemorts", 75, 20, 40, 15);
    let SorciersMonstres = new Ennemi ("SorcierMonstres", 80, 12, 100, 40);
    let Lycanthrope = new Ennemi ("Lycanthrope", 180, 30, 300, 19);

    switch (numCombat){
      case 0:
        ennemi = Arcomantula;
        interfaceCombat();
        combat();
        break;
      case 1:
        ennemi = HordesAraignees;
        interfaceCombat();
        combat();
        break;
      case 2:
        ennemi = Mangemort;
        interfaceCombat();
        combat();
        break;
      case 3:
        ennemi = Mangemorts;
        interfaceCombat();
        combat();
        break;
      case 4:
        ennemi = SorciersMonstres;
        interfaceCombat();
        combat();
        break;
      case 5:
        ennemi = Lycanthrope;
        interfaceCombat();
        combat();
        break;
    }
  }
  
  /*Fonction permettant de retourner à l'histoire par rapport au combat dans lequel
  le joueur se trouvait */
  function CombatA(nom) {
    let getZoneCombat = document.querySelector('.combat');
    let getEnnemy = document.querySelector('.ennemi');
    if (nom == "Arcomantula") {
      HistoireJeu(2);
      getEnnemy.innerHTML = '';
      getZoneCombat.innerHTML = '';
    }
    else if (nom == "Aragog") {
      HistoireJeu(11);
      getEnnemy.innerHTML = '';
      getZoneCombat.innerHTML = '';
    }
    else if (nom == "Hordes d'araignees") {
      HistoireJeu(5);
      getEnnemy.innerHTML = '';
      getZoneCombat.innerHTML = '';
    }
    else if (nom == "Mangemort") {
      HistoireJeu(22);
      getEnnemy.innerHTML = '';
      getZoneCombat.innerHTML = '';
    }
    else if (nom == "Mangemorts") {
      HistoireJeu(22);
      getEnnemy.innerHTML = '';
      getZoneCombat.innerHTML = '';
    }
    else if (nom == "SorcierMonstres") {
      HistoireJeu(34);
      getEnnemy.innerHTML = '';
      getZoneCombat.innerHTML = '';
    }
    else if (nom == "Lycanthrope") {
      HistoireJeu(37);
      getEnnemy.innerHTML = '';
      getZoneCombat.innerHTML = '';
    }
    else {
      alert("Erreur redemarrez la page !");
    }
  }