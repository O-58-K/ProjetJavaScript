const storyline = [ // Il s'agit de l'histoire du jeu 
  {
    id: 0,
  text: 'Il fait nuit, vous ne comprenez pas ce qui viens de se passer. Vous vous souvenez seulement de votre nom, vous entendez une voix dans votre tete qui vous indique de vous rendre a Poudlard. Vous trouvez a vos pieds plusieurs items mais vous entendez des choses preocupantes venir vers vous...',
    options: [
      {
        text: 'Prendre la pierre au sol',
        setState: { pierre: true },
        nextScene: 1
      },

      {
        text: 'Prendre une baguette magique',
        setState: { wand: true },
        nextScene: 1
      },

      {
        text: 'Prendre la torche se trouvant au sol',
        setState: { torche: true },
        nextScene: 1
      }
    ]
  },

  {
    id: 1,
    text: 'Vous apercevez ce qui semble etre des arcomantula affames, ils se rapprochent de plus en plus pour essayer de se nourrir.',
    options: [
      {
        text: 'Tenter d\'effrayer les arcomantula avec la grosse pierre dans votre main.',
        requiredState: (currentState) => currentState.pierre,
        nextScene: -100
      },

      {
        text: 'Combattre les arcomantula avec la baguette magique',
        requiredState: (currentState) => currentState.wand || currentState.pierre,
        nextScene: -3
      },

      {
        text: 'Fuir',
        nextScene: 5
      },

      {
        text: 'Repousser les arcomantula avec la torche',
        requiredState: (currentState) => currentState.torche,
        nextScene: 4
      }
    ]
  },

  {
    id: 2,
    text: 'Vous avez combattu avec bravoure et vaincu les arcomantula mais Aragog se precipite vers vous.',
    options: [
      {
        text: 'Combattre Aragog (BOSS)',
        nextScene: -2
      },

      {
        text: 'Ecouter la voix et courir en direction de Poudlard',
        nextScene: 6
      },
    ]
  },

  {
      id: 3,
      text: 'Vous commencez a courir dans la direction opposee de celle des arcomantula qui vous pourchassent, mais la voix dans votre tete vous indique la direction de Poudlard.',
      options: [
          {
              text: 'Ecouter la voix et courir vers Poudlard',
              nextScene: 6
          },
      ]
  },

  {
      id: 4,
      text: 'Vous reussissez a repousser les arcomantula grace a la torche. Attention ! Les arcomantula sont deja pretes a vous attaquer de nouveau cependant vous voyez une baguette magique au sol juste a votre droite et vous entendez la voix dans votre tete indiquant la direction de Poudlard.',
      options: [
          {
              text: 'Ecouter la voix et courir vers Poudlard',
              nextScene: 6
          },

          {
              text: 'Ramasser la baguette magique au sol',
              nextScene: 7
          },
      ]
  },

  {
      id: 5,
      text: 'Vous arrivez a lancer un sort a Aragog, bien joue ! Mais il ne faut pas se reposer, il faut sortir de cette foret interdite ! C\'est alors que vous entendez une voix qui ne vous est pas familiere.',
      options: [
          {
              text: 'Sortir de la foret interdite',
              nextScene: 8
          },

          {
              text: 'Se diriger vers la voix inconnue',
              nextScene: -101
          },
      ]
  },

  {
      id: 6,
      text: 'Vous commencez a courir sans vous arreter, mais vous entendez une voix etrange qui ne vous est pas familiere.',
      options: [
          {
              text: 'Sortir de la foret',
              nextScene: 8
          },

          {
              text: 'Se diriger vers la voix inconnue',
              nextScene: -101
          },
      ]
  },

  {
      id: 7,
      text: 'Vous ramassez la baguette magique qui semble bien plus puissante que vos armes, les arcomantula deviennent plus prudent et commencent a vous encercler.',
      options: [
          {
              text: 'Lancer un sort aux arcomantula',
              nextScene: 9
          },

          {
              text: 'Exterminer les arcomantula jusqu\'au dernier',
              nextScene: 9
          },
      ]
  },

  {
      id: 8,
      text: 'Vous sortez enfin de la foret et vous apercevez Poudlard : La voix dans ma tete avait raison !',
      options: [
          {
              text: 'Rentrer a Poudlard',
              nextScene: 10
          },

          {
              text: 'Rentrer a Poudlard',
              nextScene: 10
          },
      ]
  },

  {
      id: 9,
      text: 'Le sang des arcomantula degouline sur tout votre corps mais vous hesitez a continuer de se battre avec eux ou rentrer a Poudlard.',
      options: [
          {
              text: 'Rentrer à Poudlard',
              nextScene: 10
          },

          {
              text: 'Essayer de les exterminer',
              nextScene: -3
          },
      ]
  },

  {
      id: 10,
      text: 'Vous arrivez a l\'entree de Poudlard et vous ressentez de la nostalgie accompagne d\'un grand soulagement apres en avoir fini avec ses satanes monstres. Mais que pouvez vous faire ?',
      options: [
          {
              text: 'Rentrer dans le chateau en quete d\'information',
              nextScene: 12
          },

          {
              text: 'Je n\'ai pas le temps direction la maison d\'Hagrid',
              nextScene: 14
          },
      ]
  },

  {
      id: 11,
      text: 'Apres avoir elimine pleins d\'arcomantula, vous reflechissez a votre prochaine destination.',
      options: [
          {
              text: 'Rentrer a Poudlard',
              nextScene: 13
          },

          {
              text: 'Se diriger vers la maison d\'Hagrid',
              nextScene: 14
          },
      ]
  },

  {
      id: 12,
      text: 'Vous arrivez a l\'interieur du chateau, celui-ci est remplis de vie et vous vous sentez a l\'aise. Mais c\'est a ce moment precis que la voix vous indique l\'endroit ou est detenue votre moitie.',
      options: [
          {
              text: 'Demander des informations aux professeurs',
              nextScene: 15
          },

          {
              text: 'Partir vers le lieu indique',
              nextScene: 16
          },
      ]
  },

  {
      id: 13,
      text: 'Vous etes enfin rentrer a Poudlard, mais les eleves ont peur en voyant tout le sang sur vos vetements. C\'est là que le professeur McGonagal vous indique l\'endroit ou est detenue votre moitie. ',
      options: [
          {
              text: 'Partir vers le lieu indique',
              nextScene: 16
          },
      ]
  },

  {
      id: 14,
      text: 'Vous arrivez devant la maison d\'Hagrid, ou un hippogriffe mange ses poissons. Vous avancez jusqu\'a apercevoir une horde d\'arcomantula se dirigeant vers vous.',
      options: [
          {
              text: 'S\'opposer a la horde d\'arcomantula',
              nextScene: -3
          },

          {
              text: 'Fuir',
              nextScene: 17
          },

          {
              text: 'Se cacher derriere l\'hippogriffe',
              nextScene: 18
          },
      ]
  },

  {
      id: 15,
      text: 'Le professeur McGonagal vous comprend et veux vous aider. Elle precise que l\'endroit indique n\'est autre que la maison abandonnee, le repere de Voldemort et ses compagnons. Pensant que cela est necessaire, elle vous montre la direction de l\'armurerie de l\'ecole et vous autorise a prendre l\'equipement que vous souhaitez.',
      options: [
          {
              text: 'Partir',
              nextScene: 19
          },

          {
              text: 'Aller a l\'armurerie',
              nextScene: 20
          },

          {
              text: 'Demander des conseils a Dumbledor concernant votre periple',
              nextScene: 21
          },
      ]
  },

  {
      id: 16,
      text: 'Vous arrivez devant la cheminee pour acceder au chemin de traverse. Vous réussisez la teleportation mais vous atterissez dans le cote sombre du chemin de traverse. Deux Mangemorts sont pres de vous.',
      options: [
          {
              text: 'Terrasser les Mangemorts',
              nextScene: -5
          },

          {
              text: 'Chercher des indices et de l\'equipement discretement',
              nextScene: 23
          },
      ]
  },

  {
      id: 17,
      text: 'Vous fuyez de toute vos forces pour vous retrouvez par hasard devant une cheminee emmenant au chemin de traverse gardee par deux Mangemorts. Vous apprenez que la maison abandonnee se trouve a proximite et renferme votre moitie.',
      options: [
          {
              text: 'Pas le choix, terrasser les Mangemorts',
              nextScene: -5
          },
      ]
  },

  {
    id: 18,
    text: 'Vous vous cachez derriere l\'hippogriffe et la horde commence a passer devant vous sans etre alertee de votre presence.',
    options: [
      {
        text: 'Sortir de la cachette',
        nextScene: -102
      },

      {
        text: 'Attendre encore un peu',
        nextScene: 24
      },
    ]
  },

  {
    id: 19,
    text: 'Vous sortez du chateau en faisant vos adieux aux professeurs et a Dumbledor puis vous prenez la cheminee emmenant au chemin de traverse.',
    options: [
      {
        text: 'Aller au chemin de traverse.',
        nextScene: 27
      },
    ]
  },

  {
    id: 20,
    text: 'Vous entrez dans l\'armurerie ravissante de l\'ecole, tandis qu\'une epee legendaire et une cape d\'invisibilite vous interpele.',
    options: [
      {
        text: 'Prendre l\'epee de Godric Gryffondor',
        nextScene: 25
      },

      {
        text: 'Prendre la cape d\'invisibilite',
        nextScene: 26
      },
    ]
  },

  {
    id: 21,
    text: 'Dumbledor vous conseille de prendre une cape d\'invisibilite et de ne pas tenter d\'entrer de front dans la maison abandonnee. Il faut egalement faire tres attention aux apparences.',
    options: [
      {
        text: 'Prendre la cape et s\'equiper',
        nextScene: 26
      },

      {
        text: 'Aller au chemin de traverse',
        nextScene: 27
      },
    ]
  },

  {
    id: 22,
    text: 'Vous gagnez votre dur combat contre les Mangemorts et vous arrivez au chemin de traverse sain et sauf.',
    options: [
      {
        text: 'Aller dans la direction de la maison abandonnee',
        nextScene: 27
      },
    ]
  },
  
  {
    id: 23,
    text: 'Vous trouvez la carte du Maraudeur vous donnant une certaine nostalgie et une Pensine.',
    options: [
      {
        text: 'Aller au chemin de traverse.',
        nextScene: 27
      },

      {
        text: 'Prendre le liquide a verser dans la pensine et plonger la tete dedans.',
        nextScene: 28
      },
    ]
  },

  {
    id: 24,
    text: 'La horde est passee, vous etes encore stress mais vous reprenez votre route.',
    options: [
      {
        text: 'Aller au chemin de traverse.',
        nextScene: 27
      },
    ]
  },

  {
    id: 25,
    text: 'Vous choisissez l\'epee legendaire en depis de la cape d\'invisibilite, elle brille d\'un pur eclat et vous etes satisfait de votre choix. Quand soudain Poudlard se fait attaquer par une horde de monstres et de sorciers.',
    options: [
      {
        text: 'Defendre Poudlard de l\'attaque.',
        nextScene: -6
      },

      {
        text: 'Une attaque ? Ce n\'est pas mon probleme. Ma moitie m\'attend a la maison abandonnee',
        nextScene: 30
      },
    ]
  },

  {
    id: 26,
    text: 'Vous choisissez la cape d\'invisibilite en depis de l\'epee, elle vous va a ravir et vous etes satisfait de votre choix. Quand soudain la ville se fait attaquee par une horde de monstres et de sorciers.',
    options: [
      {
        text: 'Defendre Poudlard de l\'attaque.',
        nextScene: -6
      },

      {
        text: 'Une attaque ? Ce n\'est pas mon probleme. Ma moitie  m\'attend a la maison abandonnee',
        nextScene: 30
      },
    ]
  },

  {
    id: 27,
    text: 'Vous etes enfin au chemin de traverse. Mais attendez n\'est-ce pas un Mangemort que je vois derriere cette arbuste ?',
    options: [
      {
        text: 'Se faire discret et aller dans la maison abandonnee pas loin',
        nextScene: 30
      },

      {
        text: 'Suivre le Mangemort',
        nextScene: 31
      },
    ]
  },

  {
    id: 28,
    text: 'Vous plongez la tete dans la pensine et... Vous retrouvez une partie de vos souvenirs... Vous vous souvenez que vous etes un apprenti sorcier et que... Aaaa vous vous souvenez que de ça. Vous apercevez une Mangemort au loin apres etre arrive au chemin de traverse.',
    options: [
      {
        text: 'Se faire discret et aller dans la maison abandonnee pas loin',
        nextScene: 30
      },

      {
        text: 'Suivre la Mangemort',
        nextScene: 31
      },
    ]
  },

  {
    id: 29,
    text: 'La defense de Poudlard se deroule bien et vous commencez a repousser les ennemis avec l\'aide des eleves et des professeurs.',
    options: [
      {
        text: 'Repousser l\'assaut jusqu\'a la maison abandonnee',
        nextScene: 32
      },
    ]
  },

  {
    id: 30,
    text: 'Vous reussissez a vous introduire dans la maison abandonnee. Maintenant il faut acceder a la chambre ou est retenue prisonniere votre moitie. Vous trouvez la chambre qui est gardee par un lycanthrope.',
    options: [
      {
        text: 'Combattre la lycanthrope.',
        nextScene: -7
      },

      {
        text: 'Tenter une infiltration',
        nextScene: -103
      },
    ]
  },

  {
    id: 31,
    text: 'Vous commencez a suivre le Mangemort qui entre dans la maison abandonnee, vous entrez egalement puis elle s\'arrete, c\'est le moment de :',
    options: [
      {
        text: 'Oh non, je me suis fais remarque !',
        nextScene: -104
      },

      {
        text: 'Passer a l\'attaque',
        nextScene: -4
      },

      {
        text: 'L\'observer en cachette',
        nextScene: 35
      },
    ]
  },

  {
    id: 32,
    text: 'Vous repoussez l\'ennemi avec succes et vous engagez avec les autres personnes un raid de la maison abandonnee. Pendant la pagaille la voie vous fait voir un homme criant a l\'aide... C\'est votre moitie ! Mais Aragog vous remarque et se prepare a riposter.',
    options: [
      {
        text: 'Tanpis pour mes camarades, sauvons le d\'abord !',
        nextScene: 36
      },

      {
        text: 'Ma priorite c\'est la securite de tous, en garde Aragog!',
        nextScene: -2
      },
    ]
  },

  {
    id: 33,
    text: 'Vous battez l\'enfant d\'Aragog, un franc succes. Vous apprenez qu\'Aragog lui meme et Voldemort et vivent ici, quelle decision prendre...',
    options: [
      {
        text: 'Sauver votre seconde moitie',
        nextScene: 36
      },

      {
        text: 'EN FINIR !',
        nextScene: -1
      },
    ]
  },

  {
    id: 34,
    text: 'Vous battez le Mangemort sans le moindre regret , quand soudain d\'un cri de colere Aragog debarque en decouvrant un Mangemort gisant au sol sans vie.',
    options: [
      {
        text: 'Ahah j\'ai tue un de vos Mangemort !',
        nextScene: -4
      },

      {
        text: 'A ton tour Aragog, je te reduirai en poussiere !',
        nextScene: -2
      },

      {
        text: 'EN FINIR (sans mots) !',
        nextScene: -2
      },
    ]
  },

  {
    id: 35,
    text: 'Vous observez la scene, Aragog et son enfant arrivent et discute avec la Mangemort. Apres une longue discution strategique, la Mangemort part laissant la possibilite d\'assassiner son enfant dans le dos.',
    options: [
      {
        text: 'Assassiner l\'enfant d\'Aragog',
        nextScene: 38
      },
    ]
  },

  {
    id: 36,
    text: 'Vous rejoignez votre moitie, vous le prenez sur votre dos mais Aragog semble ne pas vouloir vous laissez faire.',
    options: [
      {
        text: 'Fuyons !',
        nextScene: 39
      },

      {
        text: 'Je dois le faire, a mort Aragog !',
        nextScene: -2
      },
    ]
  },

  {
    id: 37,
    text: 'Il... Il est mort ? VICTOIRE vous avez vaincu Aragog, que faîtes vous ?.',
    options: [
      {
        text: 'Sauver ma moitie !',
        nextScene: 41
      },

      {
        text: 'Executer Aragog, il semble encore respirer !',
        nextScene: 42
      },

      {
        text: 'Retourner au chateau !',
        nextScene: 43
      },
    ]
  },

  {
    id: 38,
    text: 'Sans s\'en rendre compte, l\'enfant d\'Aragog avait son torse perse par une epee, dans son dernier repit il disa: \'Poison special !\'A ce moment precis vous commencez a avoir tres mal a la tete.',
    options: [
      {
        text: 'Comprendre qui vous etes !',
        nextScene: 44
      },
    ]
  },

  {
    id: 39,
    text: 'Vous prenez la fuite abandonnant tout derriere vous.',
    options: [
      {
        text: 'Fin ?',
        nextScene: 49
      },
    ]
  },

  {
    id: 40,
    text: 'Se fut un combat rude et intense en emotion mais il est enfin mort ! Dans son dernier soupir il dit : \'Poison special\'.',
    options: [
      {
        text: 'Qui etes vous ?',
        nextScene: 46
      },

      {
        text: 'Retourner au chateau tout en reflechissant a ces paroles',
        nextScene: 47
      },
    ]
  },

  {
    id: 41,
    text: 'Vous prenez votre moitie et vous retournez ensemble au chateau.',
    options: [
      {
        text: 'Retour au chateau',
        nextScene: 47
      },
    ]
  },

  {
    id: 42,
    text: 'Au moment de l\'execution Aragog vous surnomme \'Griffondor\', la voix vous indique que cela signifie \'une classe de sorcier\'. En souriant, vous lui tranchez la tete.',
    options: [
      {
        text: 'Sauver votre moitie et retourner en ville',
        nextScene: 45
      },
    ]
  },

  {
    id: 43,
    text: 'Beh alors ? On oublie l\'essentiel ? Souligne la voix dans votre tete. En rentrant vous vous rendez compte que vous n\'avez pas sauver votre moitie et qu\'il est mort dans la bataille.',
    options: [
      {
        text: 'BAD END ',
        nextScene: 0
      },

      {
        text: 'BAD END ',
        nextScene: 0
      },
    ]
  },

  {
    id: 44,
    text: 'Vous comprenez qui vous etes avec les elements trouves lors de votre periple, vous etes un apprenti sorcier vous apprenez la sorcellerie depuis peu et vous voulez devenir le meilleur sorcier! Pendant ce temps de reflexion vous vous rendez compte que votre moitie est enfin devant vous...',
    options: [
      {
        text: 'Partir avec lui et retourner a Poudlard',
        nextScene: 45
      },
    ]
  },

  {
    id: 45,
    text: 'Vous retournez au chateau ensemble et vous apprenez que votre moitie n\'etait autre que votre ami Ron. Il vous aide a vous souvenir de tout.',
    options: [
      {
        text: 'HAPPY ENDING !'
      },

      {
        text: 'relancez votre page pour recommencer une nouvelle partie'
      },
    ]
  },

  {
    id: 46,
    text: 'Vous apprenez de la voix dans votre tete et de votre moitie, que vous etes un apprenti sorcier et que vous voulez devenir un grand sorcier ! La voix finit par disparaitre. ',
    options: [
      {
        text: 'Retourner au chateau ensemble.',
        nextScene: 48
      },
    ]
  },

  {
    id: 47,
    text: 'Lors du retour vous apprenez que votre moitie n\'est autre que votre amis RON. De retour au chateau pour parler a Dumbledor de vos accomplissements. Celui-ci se rappelle que de vous et de qui vous etes : un apprenti sorcier  ! Heureux de l\'apprendre, vous le remerciez et repartez pour de nouvelles aventures accompagne de votre ami.  ',
    options: [
      {
        text: 'HAPPY ENDING '
      },

      {
        text: 'relancez votre page pour recommencer une nouvelle aventure'
      },
    ]
  },

  {
    id: 48,
    text: 'Vous rentrez a Poudlard sain et sauf avec votre ami. Vous vivez des moments heureux et vous repartez ensemble a l\'aventure ',
    options: [
      {
        text: 'HAPPY ENDING '
      },

      {
        text: 'relancez votre page pour recommencer une nouvelle aventure'
      },
    ]
  },

  {
    id: 49,
    text: 'Vous abandonnez tout derriere vous et vous recommencer votre vie comme un Moldus avec votre ami Ron ',
    options: [
      {
        text: 'HAPPY ENDING '
      },

      {
        text: 'relancez votre page pour recommencer une nouvelle aventure'
      },
    ]
  },

  {
    id: -100,
    text: 'Vous etes mort !',
    options: [
      {
        text: 'un peu mauvais.',
      },

      {
        text: 'Tu sera plus fort la prochaine fois',
      },

      {
        text: 'Ou pas mais en tout cas ',
      },

      {
        text: 'Nouvelle partie ici !',
        nextScene: 0
      }
    ]
  },

  {
    id: -101,
    text: 'Vous etes mort !',
    options: [
      {
        text: 'un peu mauvais..',
      },

      {
        text: 'Tu sera plus fort la prochaine fois',
      },

      {
        text: 'Ou pas mais en tout cas ',
      },

      {
        text: 'Nouvelle partie ici !',
        nextScene: 0
      }
    ]
  },

  {
    id: -102,
    text: 'Vous etes mort !',
    options: [
      {
        text: 'un peu mauvais.',
      },

      {
        text: 'Tu sera plus fort la prochaine fois',
      },

      {
        text: 'Ou pas mais en tout cas ',
      },

      {
        text: 'Nouvelle partie ici !',
        nextScene: 0
      }
    ]
  },

  {
    id: -103,
    text: 'Vous etes mort !',
    options: [
      {
        text: 'un peu mauvais.',
      },

      {
        text: 'Tu sera plus fort la prochaine fois',
      },

      {
        text: 'Ou pas mais en tout cas ',
      },

      {
        text: 'Nouvelle partie ici !',
        nextScene: 0
      }
    ]
  },

  {
    id: -104,
    text: 'Vous etes mort !',
    options: [
      {
        text: 'un peu mauvais..',
      },

      {
        text: 'Tu sera plus fort la prochaine fois',
      },

      {
        text: 'Ou pas mais en tout cas ',
      },

      {
        text: 'Nouvelle partie ici !',
        nextScene: 0
      }
    ]
  },
]