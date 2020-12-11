function Joueur(VieP, PointForce, nom, Or, stamina, Vitesse, level){
    this.VieP = VieP;
    this.PointForce = PointForce;
    this.nom = nom;
    this.Or = Or;
    this.stamina = stamina
    this.Vitesse = Vitesse;
    this.level = level;
  }
  
  function  affichagePlayer() { //Lorsque nous choississons notre personnage et il s'agit de sa création
      let getDivPlayer = document.querySelector('.playerStats');
      let Type = prompt("Alors, Harry ou Hermione ?");
      if (Type == "harry" || Type == "Harry"){
        joueur = new Joueur(120, 32, Type, 10, 100, 20, 1);
        getDivPlayer.innerHTML = '<img style="width: 100px;" src="assets/harry2.png" class="player_avatar"><div><p class="joueurvie">Vie: '
        + joueur.VieP + '</p><p class="stamina_player">Stamina: ' + joueur.stamina + '</p><p class="strenght_player">Force: ' + joueur.PointForce + '</p><p>Nom: '
        + joueur.nom + '</p><p>Or: ' + joueur.Or + '</p><p class="joueurnv">Niveau: ' + joueur.level + '</p></div>';
      }
      else if (Type == "hermione" || Type == "Hermione") {
        joueur = new Joueur(100, 25, Type, 10, 100, 40, 1);
        getDivPlayer.innerHTML = '<img style="width: 100px;" src="assets/hermione2.png" class="player_avatar"><div><p class="joueurvie">Vie: '
        + joueur.VieP + '</p><p class="stamina_player">Stamina: ' + joueur.stamina + '</p><p class="strenght_player">Force: ' + joueur.PointForce + '</p><p>Nom: '
        + joueur.nom + '</p><p>Or: ' + joueur.Or + '</p><p class="joueurnv">Niveau: ' + joueur.level + '</p></div>';
      }
      else {
        affichagePlayer();
      }
    }
  
  
  function restoration() { //Permet de restaurer les points de vie du joueur 
    let JoueurV = document.querySelector('.joueurvie');
    let getPlayerStamina = document.querySelector('.stamina_player');
    let restaurer = confirm("Vous avez changer de lieu, voulez-vous vous reposez un peu ? (Restaure vos VieJ et votre stamina)");
    if (restaurer && joueur.nom == "Unknown_M") {
      joueur.VieP = 120;
      JoueurV.innerHTML = 'VieJ: ' + joueur.VieP;
      joueur.stamina = 100;
      getPlayerStamina.innerHTML = 'Stamina: ' + joueur.stamina;
    }
    else if (restaurer && joueur.nom == "Unknown_F") {
      joueur.VieP = 100;
      JoueurV.innerHTML = 'VieJ: ' + joueur.VieP;
      joueur.stamina = 100;
      getPlayerStamina.innerHTML = 'Stamina: ' + joueur.stamina;
    }
  }