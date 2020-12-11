
function Commencer() { // Voici la fonction qui permet de lancer le jeu
    window.onload = function() {
      confirm( "Oh non ! Un reveil dans la foret interdite, tu ne te souviens de rien, ni de ton nom, ni de comment tu es arrive ici. ton instinct te dit de retourner en ville. Mais pour y arriver, tu vas devoir l'aider pour surmonter les differents obstacles qui se mettront en travers de ta route.");
      state = {}
      affichagePlayer();
      HistoireJeu(0);
    }
  }
  
  let jeu = document.querySelector('#jeu');
  let ennemi;
  let joueur;

  
  function HistoireJeu(HistoireID) { // Il s'agit tout simplement des fonction qui permet donc l'affichage de l'histoire du jeu
    if (HistoireID < 0) {
      if (HistoireID == -1) {
        ZoneDeCombat(0);
      }
      else if (HistoireID == -2) {
        ZoneDeCombat(1);
      }
      else if (HistoireID == -3) {
        ZoneDeCombat(2);
      }
      else if (HistoireID == -4) {
        ZoneDeCombat(3);
      }
      else if (HistoireID == -5) {
        ZoneDeCombat(4);
      }
      else if (HistoireID == -6) {
        ZoneDeCombat(5);
      }
      else if (HistoireID == -7) {
        ZoneDeCombat(6);
      }
      else if (HistoireID == -8) {
        ZoneDeCombat(7);
      }
      else if (HistoireID == -9) {
        ZoneDeCombat(8);
      }
      else if (HistoireID == -10) {
        ZoneDeCombat(9);
      }
      else if (HistoireID == -100) {
        PerduPartie(1);
      }
      else if (HistoireID == -101) {
        PerduPartie(2);
      }
      else if (HistoireID == -102) {
        PerduPartie(3);
      }
      else if (HistoireID == -103) {
        PerduPartie(4);
      }
      else if (HistoireID == -104) {
        PerduPartie(5);
      }
    }
    else {
      if (HistoireID == 10 || HistoireID == 13) {
        decor(1);
        restoration();
      }
      else if (HistoireID == 12) {
        decor(2);
      }
      else if (HistoireID ==  14) {
        decor(3);
        restoration();
      }
      else if (HistoireID == 27 || HistoireID == 28) {
        decor(4);
        restoration();
      }
      else if (HistoireID == 30 || HistoireID == 32 || HistoireID == 33 || HistoireID == 34 || HistoireID == 35  ) {
        decor(5);
        restoration();
      }
      else if (HistoireID == 25) {
        bonus(1);
      }
      else if (HistoireID == 26) {
        bonus(2);
      }
      let histoire = document.getElementById('histoire');
      let choixE = document.getElementById('choix');
      let HistoireH = storyline.find(HistoireH => HistoireH.id === HistoireID);
      histoire.innerText = HistoireH.text;
      while (choixE.firstChild) {
        choixE.removeChild(choixE.firstChild)
      }
  
      HistoireH.options.forEach(option => {
        if (ChoixP(option)) {
          const bouton = document.createElement('button')
          bouton.innerText = option.text;
          bouton.classList.add('btn');
          bouton.addEventListener('click', () => ChoixS(option));
          choixE.appendChild(bouton);
        }
      })
    }
  }
  
  function ChoixP(option) {
    return option.requiredState == null || option.requiredState(state);
  }
  
  function ChoixS(option) {
    const nextStoryStepId = option.nextScene;
    if (nextStoryStepId == 0) {
      return Commencer();
    }
    state = Object.assign(state, option.setState);
    HistoireJeu(nextStoryStepId);
  }