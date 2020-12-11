function bonus(index) { //Bonus lorsque l'on récupère des items en travers du jeu
    let getPlayerStrenght = document.querySelector('.strenght_player');
    let JoueurV = document.querySelector('.joueurvie');
    if (index == 1) {
      joueur.PointForce += 60;
      getPlayerStrenght.innerHTML = 'Force: ' + joueur.PointForce;
      alert("Vous avez choisi la baguette magique : vous gagnez 60 de force.");
    }
    else if (index == 2) {
      joueur.VieP += 100;
      JoueurV.innerHTML = 'VieJ: ' + joueur.VieP;
      alert("Vous avez choisi la cape d'invisibilité : vous gagnez 100 VieJ maximum.");
    }
  }
  
  function decor(indexDecor) {
    if (indexDecor == 1) {
      document.getElementById('deco').style.background = "url(../assets/diagon-alley.jpg) no-repeat center #333";
    }
    if (indexDecor == 2) {
      document.getElementById('deco').style.background = "url(../assets/entree-chateau.jpg) no-repeat center #333";
    }
    if (indexDecor == 3) {
      document.getElementById('deco').style.background = "url(../assets/salle-des-potions.jpg) no-repeat center #333";
    }
    if (indexDecor == 4) {
      document.getElementById('deco').style.background = "url(../assets/hagrid.jpg) no-repeat center #333";
    }
    if (indexDecor == 5) {
      document.getElementById('deco').style.background = "url(../assets/salle-de-classe.jpg) no-repeat center #333";
    }
  }
  
  function interfaceCombat() { //Interface de combat entre le joueur et l'ennemi
    let getZoneCombat = document.querySelector('.combat');
    let getEnnemy = document.querySelector('.ennemi');
    getZoneCombat.innerHTML  += '<a href="#" class="prefight" onclick="combat()"><button class="btn1">Attaquer !</button></a>';
    getEnnemy.innerHTML += '<div><h3>' + ennemi.nom + '</h3><p class="ennemivie">Vie: '
    + ennemi.VieP + '</p><p>Force: ' + ennemi.PointForce + '</p></div>';
  }