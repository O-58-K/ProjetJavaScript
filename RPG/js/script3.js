function Ennemi(nom, VieP, PointForce, Or, Vitesse){
    this.nom = nom;
    this.VieP = VieP;
    this.PointForce = PointForce;
    this.Or = Or;
    this.Vitesse = Vitesse;
  }
  
  function combat() { //Fonction qui permet un combat entre le joueur et l'ennemi
      let VJoueur = joueur.Vitesse;
      let VEnnemi = ennemi.Vitesse;
      let EnnemiN = ennemi.nom;
      let JoueurL = document.querySelector('.joueurnv');
      let JoueurV = document.querySelector('.joueurvie');
      let EnnemiV = document.querySelector('.ennemivie');
      let ennemyDamage = ennemi.PointForce + Math.floor(Math.random(1, 3));
      let Degat;
      if (joueur.stamina > 0) {
        Degat = joueur.PointForce;
      }
      else if (joueur.stamina > 0 ) { 
        Degat = joueur.PointForce * 3;
        joueur.stamina -= 20;
      }
      else {
        Degat = joueur.PointForce;
      }
      let suppDamage = Math.floor(Math.random(1, 3));
      let trueDamage = Degat + suppDamage;
      let hitCount = Math.floor(Math.random() * Math.floor(joueur.Vitesse / 10) / 2) + 1;
      let attackEtapes = [trueDamage, hitCount];
  
      if (VJoueur >= VEnnemi) { // Lorsque le joueur attaque
        let playerDamage = attackEtapes[0] * attackEtapes[1];
        ennemi.VieP = ennemi.VieP - playerDamage;
        alert("Vous avez touché  " + ennemi.nom + attackEtapes[1] + " fois avec " + attackEtapes[0] + " de degats");
        if (ennemi.VieP <= 0) {
          alert("Vous avez gagné , vous gagnez un niveau !");
          joueur.level += 1;
          JoueurL.innerHTML = 'Niveau: ' + joueur.level;
          JoueurV.innerHTML = 'VieJ: ' + joueur.VieP;
          EnnemiV.innerHTML = 'VieJ: 0';
          CombatA(EnnemiN);
        }
        else {
          EnnemiV.innerHTML = 'Vie ' + ennemi.VieP;
          let ennemyStrike = ennemyDamage;
          joueur.VieP = joueur.VieP - ennemyStrike;
          alert("Vous avez subit " + ennemyStrike + " de degats");
          if (joueur.VieP <= 0) {
            alert("Vous avez perdu , vous etes mort !");
            JoueurV.innerHTML = 'VieJ: 0';
            EnnemiV.innerHTML = 'VieJ: ' + ennemi.VieP;
            PerduPartie();
          }
          else {
            JoueurV.innerHTML = 'VieJ: ' + joueur.VieP;
          }
        }
      } else if (VEnnemi >= VJoueur) {
        let ennemyStrike = ennemyDamage;
        joueur.VieP = joueur.VieP - ennemyStrike;
        alert("Vous avez subit " + ennemyStrike + " de degats");
        if (joueur.VieP <= 0) {
          alert("Vous avez perdu , vous etes mort !");
          JoueurV.innerHTML = 'VieJ: 0';
          EnnemiV.innerHTML = 'VieJ: ' + ennemi.VieP;
          PerduPartie();
        }
        else {
          let attackEtapes = playerStrike();
          let playerDamage = attackEtapes[0] * attackEtapes[1];
          ennemi.VieP = ennemi.VieP - playerDamage;
          alert("Vous avez toucher  " + ennemi.nom + attackEtapes[1] + " fois avec " + attackEtapes[0] + " de degats");
          if (ennemi.VieP <= 0) {
            alert("Vous avez gagner , vous gagnez un niveau !");
            joueur.level += 1;
            JoueurL.innerHTML = 'Niveau: ' + joueur.level;
            JoueurV.innerHTML = 'VieJ: ' + joueur.VieP;
            EnnemiV.innerHTML = 'VieJ: 0';
            CombatA(EnnemiN);
          }
          else {
            EnnemiV.innerHTML = 'VieJ: ' + ennemi.VieP;
          }
        }
      }
  }