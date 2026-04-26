export const ponctuationQuestions = [
    {
        id: "p1",
        category: "Ponctuation",
        topic: "La virgule",
        question: "Dans laquelle de ces phrases l'usage de la virgule est-il fautif ?",
        options: [
            "Marie, est partie tôt ce matin.",
            "Le matin, elle boit son café.",
            "Elle court, car elle est en retard.",
            "Ses amis, Paul et Jean, arrivent bientôt."
        ],
        correctAnswer: 0,
        explanation: "On ne place jamais de virgule entre le sujet (Marie) et le verbe (est partie), sauf si une incise ou une mise en apostrophe l'exige.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21262/la-ponctuation/la-virgule/virgule-entre-le-sujet-et-le-verbe"
    },
    {
        id: "p2",
        category: "Ponctuation",
        topic: "Le deux-points",
        question: "Quand doit-on utiliser le deux-points ?",
        options: [
            "Pour séparer deux sujets.",
            "Pour introduire une énumération ou une explication.",
            "À la fin de chaque phrase interrogative.",
            "Entre un adjectif et un nom."
        ],
        correctAnswer: 1,
        explanation: "Le deux-points annonce une énumération, une citation, une explication ou une cause.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21245/la-ponctuation/le-deux-points/fonctions-du-deux-points"
    },
    {
        id: "p3",
        category: "Ponctuation",
        topic: "Le point-virgule",
        question: "Dans quel cas utilise-t-on le point-virgule ?",
        options: [
            "Pour séparer deux propositions liées par le sens mais indépendantes grammaticalement.",
            "Pour finir une phrase exclamative.",
            "Pour introduire une citation.",
            "Pour séparer un adjectif de son nom."
        ],
        correctAnswer: 0,
        explanation: "Le point-virgule sépare des propositions indépendantes qui ont entre elles un lien logique.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21253/la-ponctuation/le-point-virgule/fonctions-du-point-virgule"
    },
    {
        id: "p4",
        category: "Ponctuation",
        topic: "La virgule et le 'mais'",
        question: "Doit-on mettre une virgule avant la conjonction 'mais' ?",
        options: [
            "Oui, presque toujours.",
            "Non, jamais.",
            "Seulement si la phrase est longue.",
            "Seulement à la fin de la phrase."
        ],
        correctAnswer: 0,
        explanation: "On place généralement une virgule avant 'mais' lorsqu'il unit deux propositions de certaine longueur.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21264/la-ponctuation/la-virgule/virgule-avec-les-conjonctions-de-coordination"
    },
    {
        id: "p5",
        category: "Ponctuation",
        topic: "La virgule avant 'etc.'",
        question: "Quelle phrase est correctement ponctuée ?",
        options: [
            "J'ai acheté des pommes, des poires etc.",
            "J'ai acheté des pommes, des poires, etc.",
            "J'ai acheté des pommes, des poires, etc...",
            "J'ai acheté des pommes, des poires etc..."
        ],
        correctAnswer: 1,
        explanation: "'Etc.' doit toujours être précédé d'une virgule et suivi d'un point abréviatif seul.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21272/la-ponctuation/la-virgule/virgule-avant-lexpression-etc"
    },
    {
        id: "p6",
        category: "Ponctuation",
        topic: "L'incise",
        question: "Comment ponctuer une incise ?",
        options: [
            "Entre deux virgules.",
            "Entre deux parenthèses.",
            "Sans aucune ponctuation.",
            "Avec un deux-points."
        ],
        correctAnswer: 0,
        explanation: "Une proposition incise (ex: dit-il) est généralement isolée par des virgules.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21273/la-ponctuation/la-virgule/virgule-avec-une-proposition-incise"
    },
    {
        id: "p7",
        category: "Ponctuation",
        topic: "Espaces et deux-points",
        question: "En typographie française, que doit-on mettre avant un deux-points ?",
        options: ["Rien.", "Un espace simple.", "Un espace insécable.", "Une virgule."],
        correctAnswer: 2,
        explanation: "Le deux-points est précédé d'un espace insécable et suivi d'un espace simple.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21226/la-ponctuation/les-espacements-avant-et-apres-les-signes-de-ponctuation"
    },
    {
        id: "p8",
        category: "Ponctuation",
        topic: "Le point d'interrogation",
        question: "Où place-t-on le point d'interrogation par rapport aux guillemets si la citation est une question ?",
        options: ["À l'intérieur des guillemets.", "À l'extérieur des guillemets.", "On ne met pas de point d'interrogation.", "On met deux points."],
        correctAnswer: 0,
        explanation: "Si la citation est elle-même une question, le point d'interrogation se place à l'intérieur des guillemets.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21235/la-ponctuation/le-point-dinterrogation/point-dinterrogation-et-autres-signes-de-ponctuation"
    },
    {
        id: "p9",
        category: "Ponctuation",
        topic: "Les parenthèses",
        question: "Si une phrase entière est entre parenthèses, où place-t-on le point final ?",
        options: ["À l'intérieur des parenthèses.", "À l'extérieur des parenthèses.", "On ne met pas de point.", "Avant la dernière parenthèse."],
        correctAnswer: 0,
        explanation: "Si les parenthèses renferment une phrase complète, le point final se place à l'intérieur.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21215/la-ponctuation/les-parentheses/point-et-parentheses"
    },
    {
        id: "p10",
        category: "Ponctuation",
        topic: "Les crochets",
        question: "À quoi servent principalement les crochets ?",
        options: [
            "À remplacer les parenthèses.",
            "À indiquer une intervention à l'intérieur d'une citation.",
            "À marquer la fin d'un paragraphe.",
            "À séparer les adjectifs."
        ],
        correctAnswer: 1,
        explanation: "Les crochets sont utilisés pour introduire un commentaire ou une modification à l'intérieur d'un texte cité.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21237/la-ponctuation/les-crochets/fonctions-des-crochets"
    },
    {
        id: "p11",
        category: "Ponctuation",
        topic: "La virgule et 'ainsi que'",
        question: "Doit-on mettre une virgule avant 'ainsi que' ?",
        options: [
            "Seulement si cela signifie 'et aussi'.",
            "Seulement si cela introduit une comparaison.",
            "Toujours.",
            "Jamais."
        ],
        correctAnswer: 1,
        explanation: "On met des virgules autour de la comparaison introduite par 'ainsi que'. S'il s'agit d'une simple addition signifiant 'et aussi', la virgule est facultative ou absente.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21275/la-ponctuation/la-virgule/virgule-avec-ainsi-que-et-aussi-bien-que"
    },
    {
        id: "p12",
        category: "Ponctuation",
        topic: "Le tiret de dialogue",
        question: "Quel signe utilise-t-on pour marquer le changement d'interlocuteur dans un dialogue ?",
        options: ["Le trait d'union.", "Le tiret demi-cadratin ou cadratin.", "Les guillemets à chaque réplique.", "Le deux-points."],
        correctAnswer: 1,
        explanation: "On utilise le tiret (souvent le demi-cadratin) pour marquer les changements de voix dans un dialogue.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21223/la-ponctuation/le-tiret/le-tiret-dans-le-dialogue"
    },
    {
        id: "p13",
        category: "Ponctuation",
        topic: "Les points de suspension",
        question: "Combien de points comporte le signe des points de suspension ?",
        options: ["Deux.", "Trois.", "Quatre.", "Autant qu'on veut."],
        correctAnswer: 1,
        explanation: "Les points de suspension sont toujours au nombre de trois.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21230/la-ponctuation/les-points-de-suspension/fonctions-des-points-de-suspension"
    },
    {
        id: "p14",
        category: "Ponctuation",
        topic: "Virgule et apposition",
        question: "Quelle phrase est correctement ponctuée ?",
        options: [
            "Mon frère, Paul arrive.",
            "Mon frère, Paul, arrive.",
            "Mon frère Paul, arrive.",
            "Mon frère Paul arrive."
        ],
        correctAnswer: 1,
        explanation: "Une apposition ou une explication doit être encadrée de virgules.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21268/la-ponctuation/la-virgule/virgule-avec-un-nom-en-apposition"
    },
    {
        id: "p15",
        category: "Ponctuation",
        topic: "Espaces et pourcentage",
        question: "En français, où place-t-on l'espace pour le signe % ?",
        options: ["Avant le signe.", "Après le signe.", "Il n'y a pas d'espace.", "Avant et après."],
        correctAnswer: 0,
        explanation: "Le signe % est précédé d'un espace (souvent insécable).",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/23126/la-typographie/symboles/le-signe-de-pourcentage"
    },
    {
        id: "p16",
        category: "Ponctuation",
        topic: "Virgule et 'dont'",
        question: "Doit-on mettre une virgule avant le pronom relatif 'dont' ?",
        options: [
            "Seulement si la subordonnée est explicative.",
            "Seulement si la subordonnée est déterminative.",
            "Toujours.",
            "Jamais."
        ],
        correctAnswer: 0,
        explanation: "On met une virgule avant 'dont' si la subordonnée apporte une information complémentaire non indispensable (explicative).",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21263/la-ponctuation/la-virgule/virgule-devant-un-pronom-relatif"
    },
    {
        id: "p17",
        category: "Ponctuation",
        topic: "Le point d'exclamation",
        question: "Après un point d'exclamation terminant une phrase, la phrase suivante commence par :",
        options: ["Une minuscule.", "Une majuscule.", "Un espace double.", "Un tiret."],
        correctAnswer: 1,
        explanation: "Le point d'exclamation étant un signe de ponctuation forte, il est suivi d'une majuscule s'il termine la phrase.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21234/la-ponctuation/le-point-dexclamation/fonctions-du-point-dexclamation"
    },
    {
        id: "p18",
        category: "Ponctuation",
        topic: "Usage de 'etc.' et points de suspension",
        question: "Peut-on utiliser 'etc...' ?",
        options: ["Oui, pour insister.", "Non, c'est redondant.", "Seulement en fin de paragraphe.", "Seulement dans un dialogue."],
        correctAnswer: 1,
        explanation: "L'usage simultané de 'etc.' et des points de suspension est une erreur car ils ont la même fonction.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21230/la-ponctuation/les-points-de-suspension/combinaison-des-points-de-suspension-avec-dautres-signes"
    },
    {
        id: "p19",
        category: "Ponctuation",
        topic: "La virgule et le lieu",
        question: "Quelle ponctuation pour une adresse ?",
        options: [
            "Montréal, le 24 avril.",
            "Montréal le 24 avril.",
            "Montréal : le 24 avril.",
            "Montréal - le 24 avril."
        ],
        correctAnswer: 0,
        explanation: "On sépare le lieu de la date par une virgule.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21276/la-ponctuation/la-virgule/virgule-dans-lindication-du-lieu-et-de-la-date"
    },
    {
        id: "p20",
        category: "Ponctuation",
        topic: "Le trait d'union vs le tiret",
        question: "Lequel est utilisé pour lier les mots d'un nom composé ?",
        options: ["Le trait d'union.", "Le tiret.", "L'espace.", "L'apostrophe."],
        correctAnswer: 0,
        explanation: "Le trait d'union (petit) lie les mots, tandis que le tiret (long) marque une pause ou un dialogue.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21223/la-ponctuation/le-tiret/difference-entre-le-tiret-et-le-trait-dunion"
    },
    {
        id: "p21",
        category: "Ponctuation",
        topic: "La virgule et 'en effet'",
        question: "Doit-on mettre une virgule après 'en effet' en tête de phrase ?",
        options: ["Oui, toujours.", "Non, jamais.", "Seulement si la phrase est longue.", "C'est facultatif."],
        correctAnswer: 0,
        explanation: "Placé en tête de phrase, 'en effet' est toujours suivi d'une virgule.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21266/la-ponctuation/la-virgule/virgule-avec-un-organisateur-textuel"
    },
    {
        id: "p22",
        category: "Ponctuation",
        topic: "La virgule et 'par exemple'",
        question: "Comment ponctuer 'par exemple' à l'intérieur d'une phrase ?",
        options: ["Entre deux virgules.", "Entre deux parenthèses.", "Sans virgule.", "Avec un deux-points."],
        correctAnswer: 0,
        explanation: "En tant qu'élément explicatif, 'par exemple' doit être encadré de virgules.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21268/la-ponctuation/la-virgule/virgule-avec-un-element-explicatif"
    },
    {
        id: "p23",
        category: "Ponctuation",
        topic: "Les guillemets et la citation",
        question: "Où placer le point final si la citation termine la phrase ?",
        options: ["À l'intérieur des guillemets.", "À l'extérieur des guillemets.", "On ne met pas de point.", "Avant les guillemets."],
        correctAnswer: 1,
        explanation: "Si la citation ne commence pas la phrase, le point final se place à l'extérieur des guillemets.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21206/la-ponctuation/les-guillemets/point-final-et-guillemets"
    },
    {
        id: "p24",
        category: "Ponctuation",
        topic: "Le deux-points et la cause",
        question: "Peut-on utiliser le deux-points pour remplacer 'car' ?",
        options: ["Oui.", "Non.", "Seulement dans un dialogue.", "Seulement en poésie."],
        correctAnswer: 0,
        explanation: "Le deux-points peut introduire une explication ou une cause, remplaçant ainsi 'car' ou 'parce que'.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21245/la-ponctuation/le-deux-points/fonctions-du-deux-points"
    },
    {
        id: "p25",
        category: "Ponctuation",
        topic: "La virgule et 'donc'",
        question: "La virgule est-elle obligatoire devant 'donc' ?",
        options: ["Oui, toujours.", "Non, elle est souvent facultative.", "Seulement en début de phrase.", "Jamais."],
        correctAnswer: 1,
        explanation: "La virgule devant 'donc' est facultative, sauf si on veut insister sur la conséquence.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21264/la-ponctuation/la-virgule/virgule-with-les-conjonctions-de-coordination"
    },
    {
        id: "p26",
        category: "Ponctuation",
        topic: "La virgule et 'cependant'",
        question: "Doit-on mettre une virgule après 'cependant' en début de phrase ?",
        options: ["Oui.", "Non."],
        correctAnswer: 0,
        explanation: "Placé en tête de phrase, 'cependant' est toujours suivi d'une virgule.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21266/la-ponctuation/la-virgule/virgule-avec-un-organisateur-textuel"
    },
    {
        id: "p27",
        category: "Ponctuation",
        topic: "La virgule et 'toutefois'",
        question: "Doit-on mettre une virgule après 'toutefois' en début de phrase ?",
        options: ["Oui.", "Non."],
        correctAnswer: 0,
        explanation: "Comme 'cependant', 'toutefois' en tête de phrase demande une virgule.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21266/la-ponctuation/la-virgule/virgule-avec-un-organisateur-textuel"
    },
    {
        id: "p28",
        category: "Ponctuation",
        topic: "La virgule et 'néanmoins'",
        question: "Doit-on mettre une virgule après 'néanmoins' en début de phrase ?",
        options: ["Oui.", "Non."],
        correctAnswer: 0,
        explanation: "Placé en tête de phrase, il est suivi d'une virgule.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21266/la-ponctuation/la-virgule/virgule-avec-un-organisateur-textuel"
    },
    {
        id: "p29",
        category: "Ponctuation",
        topic: "Colon after 'à savoir'",
        question: "Peut-on mettre un deux-points après 'à savoir' ?",
        options: ["Oui.", "Non.", "Seulement si c'est une liste."],
        correctAnswer: 0,
        explanation: "Le deux-points peut suivre 'à savoir' pour introduire une précision ou une énumération.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21245/la-ponctuation/le-deux-points/fonctions-du-deux-points"
    },
    {
        id: "p30",
        category: "Ponctuation",
        topic: "Comma and 'puis'",
        question: "Met-on une virgule avant 'puis' ?",
        options: ["Oui, généralement.", "Non, jamais.", "Seulement si c'est une liste."],
        correctAnswer: 0,
        explanation: "On met généralement une virgule avant 'puis' pour marquer la succession.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21264/la-ponctuation/la-virgule/virgule-avec-les-conjonctions-de-coordination"
    },
    {
        id: "p31",
        category: "Ponctuation",
        topic: "Comma and 'ensuite'",
        question: "Met-on une virgule après 'ensuite' en début de phrase ?",
        options: ["Oui.", "Non."],
        correctAnswer: 0,
        explanation: "En tête de phrase, 'ensuite' est suivi d'une virgule.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21266/la-ponctuation/la-virgule/virgule-avec-un-organisateur-textuel"
    },
    {
        id: "p32",
        category: "Ponctuation",
        topic: "Comma and 'enfin'",
        question: "Met-on une virgule après 'enfin' en début de phrase ?",
        options: ["Oui.", "Non."],
        correctAnswer: 0,
        explanation: "En tête de phrase, 'enfin' est suivi d'une virgule.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21266/la-ponctuation/la-virgule/virgule-avec-un-organisateur-textuel"
    },
    {
        id: "p33",
        category: "Ponctuation",
        topic: "Use of 'et' and 'ou' without comma",
        question: "Met-on une virgule devant 'et' si on ne l'utilise que deux fois ?",
        options: ["Non, généralement pas.", "Oui, toujours."],
        correctAnswer: 0,
        explanation: "On ne met généralement pas de virgule devant 'et' ou 'ou' s'ils ne sont pas répétés plus de deux fois.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21264/la-ponctuation/la-virgule/virgule-avec-les-conjonctions-de-coordination"
    },
    {
        id: "p34",
        category: "Ponctuation",
        topic: "Semicolon in long lists",
        question: "Quand privilégier le point-virgule dans une énumération ?",
        options: ["Quand les éléments sont longs et contiennent déjà des virgules.", "Quand les éléments sont très courts.", "Jamais."],
        correctAnswer: 0,
        explanation: "Le point-virgule permet de clarifier les énumérations complexes.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21253/la-ponctuation/le-point-virgule/fonctions-du-point-virgule"
    },
    {
        id: "p35",
        category: "Ponctuation",
        topic: "Comma and 'donc' (variation)",
        question: "Où placer 'donc' dans une phrase ?",
        options: ["En début de phrase avec virgule.", "Après le verbe sans virgule.", "Les deux sont possibles."],
        correctAnswer: 2,
        explanation: "La place de 'donc' est flexible et sa ponctuation dépend de sa position.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21264/la-ponctuation/la-virgule/virgule-avec-les-conjonctions-de-coordination"
    },
    {
        id: "p36",
        category: "Ponctuation",
        topic: "Virgule et coordination",
        question: "Doit-on mettre une virgule devant 'ou' s'il est répété plus de deux fois ?",
        options: ["Oui.", "Non."],
        correctAnswer: 0,
        explanation: "Lorsque 'ou' (ou 'et') est répété plus de deux fois, on place généralement une virgule devant chaque occurrence à partir de la seconde.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21264/la-ponctuation/la-virgule/virgule-avec-les-conjonctions-de-coordination"
    },
    {
        id: "p37",
        category: "Ponctuation",
        topic: "Points de suspension et 'etc.'",
        question: "Lequel est correct ?",
        options: ["pommes, poires, etc.", "pommes, poires, etc...", "pommes, poires... etc."],
        correctAnswer: 0,
        explanation: "On n'utilise jamais les points de suspension avec 'etc.' car c'est redondant.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21230/la-ponctuation/les-points-de-suspension/combinaison-des-points-de-suspension-avec-dautres-signes"
    },
    {
        id: "p38",
        category: "Ponctuation",
        topic: "Virgule et complément de phrase",
        question: "Où placer la virgule si le complément de phrase est en début de phrase ?",
        options: ["Après le complément.", "Avant le complément.", "Nulle part."],
        correctAnswer: 0,
        explanation: "Un complément de phrase placé en tête de phrase est généralement suivi d'une virgule.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21265/la-ponctuation/la-virgule/virgule-avec-un-complement-de-phrase"
    },
    {
        id: "p39",
        category: "Ponctuation",
        topic: "Virgule et inversion",
        question: "Doit-on mettre une virgule après un sujet inversé ?",
        options: ["Non.", "Oui."],
        correctAnswer: 0,
        explanation: "On ne sépare pas le sujet (même inversé) du verbe par une virgule.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21262/la-ponctuation/la-virgule/virgule-entre-le-sujet-et-le-verbe"
    },
    {
        id: "p40",
        category: "Ponctuation",
        topic: "Deux-points et énumération",
        question: "Faut-il une majuscule après un deux-points introduisant une énumération ?",
        options: ["Non, sauf si ce sont des phrases complètes.", "Oui, toujours.", "Jamais."],
        correctAnswer: 0,
        explanation: "On utilise la minuscule après le deux-points pour une énumération simple.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21247/la-ponctuation/le-deux-points/majuscule-ou-minuscule-apres-le-deux-points"
    },
    {
        id: "p41",
        category: "Ponctuation",
        topic: "Parenthèses et ponctuation",
        question: "Si une parenthèse termine une phrase, où se place le point final ?",
        options: ["Après la parenthèse fermante.", "Avant la parenthèse fermante.", "À l'intérieur."],
        correctAnswer: 0,
        explanation: "Si la parenthèse ne contient qu'un fragment de phrase, le point se place après.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21215/la-ponctuation/les-parentheses/point-et-parentheses"
    },
    {
        id: "p42",
        category: "Ponctuation",
        topic: "Tiret et incise",
        question: "Peut-on utiliser des tirets pour isoler une incise à la place des virgules ?",
        options: ["Oui.", "Non."],
        correctAnswer: 0,
        explanation: "Les tirets doubles peuvent remplacer les virgules pour isoler un élément de manière plus marquée.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21221/la-ponctuation/le-tiret/le-tiret-double-pour-isoler-un-element"
    },
    {
        id: "p43",
        category: "Ponctuation",
        topic: "Point-virgule et liste",
        question: "Le point-virgule est-il obligatoire entre les éléments d'une liste verticale ?",
        options: ["Non, mais c'est recommandé si les éléments sont longs.", "Oui, toujours.", "Jamais."],
        correctAnswer: 0,
        explanation: "Le point-virgule est d'usage courant pour séparer les éléments d'une liste à puces.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21253/la-ponctuation/le-point-virgule/fonctions-du-point-virgule"
    },
    {
        id: "p44",
        category: "Ponctuation",
        topic: "Virgule et 'mais'",
        question: "Met-on une virgule devant 'mais' si celui-ci unit deux adjectifs courts ?",
        options: ["Non, généralement pas.", "Oui, toujours."],
        correctAnswer: 0,
        explanation: "On ne met pas de virgule devant 'mais' entre deux éléments courts et de même nature.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21264/la-ponctuation/la-virgule/virgule-avec-les-conjonctions-de-coordination"
    },
    {
        id: "p45",
        category: "Ponctuation",
        topic: "Virgule et 'car'",
        question: "La virgule devant 'car' est-elle :",
        options: ["Obligatoire.", "Facultative.", "Interdite."],
        correctAnswer: 0,
        explanation: "'Car' est presque toujours précédé d'une virgule.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21264/la-ponctuation/la-virgule/virgule-avec-les-conjonctions-de-coordination"
    },
    {
        id: "p46",
        category: "Ponctuation",
        topic: "Virgule et sujet",
        question: "Peut-on mettre une virgule entre deux sujets coordonnés par 'et' ?",
        options: ["Non, généralement pas.", "Oui, toujours.", "Seulement si le premier est long."],
        correctAnswer: 0,
        explanation: "On ne sépare pas les sujets d'un même verbe par une virgule.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21262/la-ponctuation/la-virgule/virgule-entre-le-sujet-et-le-verbe"
    },
    {
        id: "p47",
        category: "Ponctuation",
        topic: "Virgule et participe présent",
        question: "Une proposition au participe présent en début de phrase doit être :",
        options: ["Suivie d'une virgule.", "Sans virgule.", "Précédée d'un deux-points."],
        correctAnswer: 0,
        explanation: "Une proposition participiale en tête de phrase est isolée par une virgule.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21268/la-ponctuation/la-virgule/virgule-avec-un-element-explicatif"
    },
    {
        id: "p48",
        category: "Ponctuation",
        topic: "Virgule et 'puis'",
        question: "Doit-on mettre une virgule avant 'puis' ?",
        options: ["Oui, pour marquer la succession.", "Non, jamais.", "Seulement à l'oral."],
        correctAnswer: 0,
        explanation: "On utilise généralement la virgule avant 'puis' pour souligner l'aspect temporel.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21264/la-ponctuation/la-virgule/virgule-avec-les-conjonctions-de-coordination"
    },
    {
        id: "p49",
        category: "Ponctuation",
        topic: "Point final et abréviation",
        question: "Si une phrase se termine par 'etc.', doit-on ajouter un second point ?",
        options: ["Non.", "Oui."],
        correctAnswer: 0,
        explanation: "Le point abréviatif de 'etc.' se confond avec le point final.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21239/la-ponctuation/le-point/le-point-en-fin-de-phrase"
    },
    {
        id: "p50",
        category: "Ponctuation",
        topic: "Guillemets et ponctuation",
        question: "Si une phrase se termine par une citation qui est elle-même une phrase complète, le point final se met :",
        options: ["À l'intérieur des guillemets.", "À l'extérieur.", "On n'en met pas."],
        correctAnswer: 0,
        explanation: "Si la citation est une phrase complète commençant par une majuscule, le point se place à l'intérieur.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21206/la-ponctuation/les-guillemets/point-final-et-guillemets"
    },
    {
        id: "p51",
        category: "Ponctuation",
        topic: "Virgule et 'soit... soit'",
        question: "Met-on une virgule entre deux 'soit' ?",
        options: ["Oui.", "Non.", "C'est facultatif."],
        correctAnswer: 0,
        explanation: "On sépare par une virgule les membres coordonnés par 'soit... soit'.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21264/la-ponctuation/la-virgule/virgule-avec-les-conjonctions-de-coordination"
    },
    {
        id: "p52",
        category: "Ponctuation",
        topic: "Virgule et 'ou bien... ou bien'",
        question: "Met-on une virgule entre deux 'ou bien' ?",
        options: ["Oui.", "Non."],
        correctAnswer: 0,
        explanation: "On utilise la virgule pour séparer les éléments coordonnés par 'ou bien... ou bien'.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21264/la-ponctuation/la-virgule/virgule-avec-les-conjonctions-de-coordination"
    },
    {
        id: "p53",
        category: "Ponctuation",
        topic: "Espace et point-virgule",
        question: "En typographie française, le point-virgule est précédé d'un :",
        options: ["Espace fin insécable.", "Espace simple.", "Aucun espace."],
        correctAnswer: 0,
        explanation: "Le point-virgule est précédé d'un espace fin insécable (ou espace insécable) et suivi d'un espace simple.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21226/la-ponctuation/les-espacements-avant-et-apres-les-signes-de-ponctuation"
    },
    {
        id: "p54",
        category: "Ponctuation",
        topic: "Virgule et 'certes'",
        question: "En tête de phrase, 'certes' est :",
        options: ["Suivi d'une virgule.", "Sans virgule.", "Précédé d'un tiret."],
        correctAnswer: 0,
        explanation: "En tant qu'adverbe d'affirmation en tête de phrase, 'certes' est généralement suivi d'une virgule.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21266/la-ponctuation/la-virgule/virgule-avec-un-organisateur-textuel"
    },
    {
        id: "p55",
        category: "Ponctuation",
        topic: "Point final et parenthèse",
        question: "Lequel est correct ?",
        options: ["(C'est ainsi).", "(C'est ainsi.)", "C'est ainsi.()"],
        correctAnswer: 1,
        explanation: "Si la parenthèse contient une phrase complète, le point se place à l'intérieur.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21215/la-ponctuation/les-parentheses/point-et-parentheses"
    },
    {
        id: "p56",
        category: "Ponctuation",
        topic: "Deux-points",
        question: "L'usage des deux-points est correct pour introduire :",
        options: ["Une explication.", "Une énumération.", "Une citation.", "Toutes ces réponses."],
        correctAnswer: 3,
        explanation: "Les deux-points servent à annoncer une explication, une preuve, une conséquence, une énumération ou une citation.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21053/la-ponctuation/les-signes-de-ponctuation/les-deux-points"
    },
    {
        id: "p57",
        category: "Ponctuation",
        topic: "Deux-points",
        question: "Doit-on mettre une majuscule après les deux-points s'ils introduisent une explication ?",
        options: ["Non, sauf si c'est un nom propre.", "Oui, toujours.", "C'est facultatif.", "Seulement dans un titre."],
        correctAnswer: 0,
        explanation: "On ne met généralement pas de majuscule après les deux-points, sauf si ce qui suit est une citation complète ou un nom propre.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21053/la-ponctuation/les-signes-de-ponctuation/les-deux-points"
    },
    {
        id: "p58",
        category: "Ponctuation",
        topic: "Point d'interrogation",
        question: "Dans une interrogation indirecte, utilise-t-on le point d'interrogation ?",
        options: ["Non, on utilise un point final.", "Oui, toujours.", "Seulement si la phrase est longue.", "Seulement en début de phrase."],
        correctAnswer: 0,
        explanation: "L'interrogation indirecte (ex: 'Je me demande s'il viendra.') se termine par un point simple.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21053/la-ponctuation/les-signes-de-ponctuation/le-point-dinterrogation"
    },
    {
        id: "p59",
        category: "Ponctuation",
        topic: "Points de suspension",
        question: "Combien de points de suspension utilise-t-on ?",
        options: ["Toujours trois.", "Deux ou trois selon le contexte.", "Quatre en fin de phrase.", "Autant qu'on veut."],
        correctAnswer: 0,
        explanation: "Les points de suspension sont toujours au nombre de trois.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21053/la-ponctuation/les-signes-de-ponctuation/les-points-de-suspension"
    },
    {
        id: "p60",
        category: "Ponctuation",
        topic: "Points de suspension",
        question: "L'expression 'etc...' est-elle correcte ?",
        options: ["Non, on écrit 'etc.' sans points de suspension.", "Oui, c'est correct.", "Seulement en fin de paragraphe.", "C'est une variante acceptée."],
        correctAnswer: 0,
        explanation: "'Etc.' signifie déjà 'et le reste', ajouter des points de suspension est un pléonasme graphique.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21053/la-ponctuation/les-signes-de-ponctuation/les-points-de-suspension"
    },
    {
        id: "p61",
        category: "Ponctuation",
        topic: "Parenthèses",
        question: "Si une phrase complète est entre parenthèses, où se place le point final ?",
        options: ["À l'intérieur des parenthèses.", "À l'extérieur des parenthèses.", "On met deux points (un dedans, un dehors).", "On ne met pas de point."],
        correctAnswer: 0,
        explanation: "Si la parenthèse contient une phrase indépendante complète, la ponctuation finale se met à l'intérieur.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21053/la-ponctuation/les-signes-de-ponctuation/les-parentheses"
    },
    {
        id: "p62",
        category: "Ponctuation",
        topic: "Guillemets",
        question: "Quels guillemets utilise-t-on prioritairement en français ?",
        options: ["Les guillemets français (« »).", "Les guillemets anglais (\" \").", "Les guillemets simples (' ').", "Peu importe."],
        correctAnswer: 0,
        explanation: "En typographie française, on privilégie les guillemets « » (avec espaces insécables).",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21053/la-ponctuation/les-signes-de-ponctuation/les-guillemets"
    },
    {
        id: "p63",
        category: "Ponctuation",
        topic: "Tiret",
        question: "Lequel de ces tirets utilise-t-on pour les dialogues ?",
        options: ["Le tiret cadratin (—).", "Le trait d'union (-).", "Le signe moins (−).", "Le tiret bas (_)."],
        correctAnswer: 0,
        explanation: "Le tiret cadratin (ou demi-cadratin) est utilisé pour introduire les répliques dans un dialogue.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21053/la-ponctuation/les-signes-de-ponctuation/le-tiret"
    },
    {
        id: "p64",
        category: "Ponctuation",
        topic: "Virgule",
        question: "Doit-on mettre une virgule avant 'car' ?",
        options: ["Oui, généralement.", "Non, jamais.", "Seulement en début de phrase.", "Seulement si la phrase est très longue."],
        correctAnswer: 0,
        explanation: "On met généralement une virgule devant les conjonctions de coordination 'car', 'mais', 'voire'.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21053/la-ponctuation/les-signes-de-ponctuation/la-virgule"
    },
    {
        id: "p65",
        category: "Ponctuation",
        topic: "Virgule",
        question: "Met-on une virgule entre le sujet et le verbe ?",
        options: ["Non, sauf si le sujet est très long ou s'il y a une incise.", "Oui, pour marquer une pause.", "Seulement si le sujet est un pronom.", "Toujours."],
        correctAnswer: 0,
        explanation: "On ne sépare jamais le sujet de son verbe par une virgule, sauf s'il s'agit d'isoler un élément en apposition ou une incise.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21053/la-ponctuation/les-signes-de-ponctuation/la-virgule"
    },
    {
        id: "p66",
        category: "Ponctuation",
        topic: "Espace",
        question: "En typographie québécoise, met-on un espace avant le point d'interrogation ?",
        options: ["Oui, un espace insécable.", "Non, jamais.", "Un espace normal.", "Seulement dans les livres."],
        correctAnswer: 0,
        explanation: "En français (Europe et Québec), les signes doubles (?;:!) sont précédés d'un espace (insécable au Québec pour le point-virgule, le point d'exclamation et d'interrogation).",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21053/la-typographie/les-espacements/les-espacements-avant-et-apres-les-signes-de-ponctuation"
    },
    {
        id: "p67",
        category: "Ponctuation",
        topic: "Point-virgule",
        question: "Le point-virgule sert à séparer :",
        options: ["Des propositions indépendantes liées par le sens.", "Un sujet de son verbe.", "Un adjectif de son nom.", "Un titre de son texte."],
        correctAnswer: 0,
        explanation: "Le point-virgule marque une pause plus forte que la virgule mais moins que le point.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21053/la-ponctuation/les-signes-de-ponctuation/le-point-virgule"
    },
    {
        id: "p68",
        category: "Ponctuation",
        topic: "Majuscule",
        question: "Met-on une majuscule après un point d'exclamation si la phrase continue ?",
        options: ["Non, si l'exclamation fait partie de la même phrase.", "Oui, toujours.", "C'est facultatif.", "Seulement après un nom propre."],
        correctAnswer: 0,
        explanation: "Si le point d'exclamation ne termine pas la phrase (ex: 'Hélas ! s'écria-t-il'), on ne met pas de majuscule après.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21053/la-typographie/la-majuscule/la-majuscule-apres-les-signes-de-ponctuation"
    },
    {
        id: "p69",
        category: "Ponctuation",
        topic: "Apostrophe",
        question: "L'usage de l'apostrophe est obligatoire pour l'élision de :",
        options: ["La voyelle finale de certains mots devant une voyelle.", "Toutes les consonnes finales.", "Les noms propres uniquement.", "Les verbes au futur."],
        correctAnswer: 0,
        explanation: "L'élision se fait pour 'le', 'la', 'je', 'ne', 'me', 'te', 'se', 'de', 'que', 'jusque', 'puisque', 'quoique', 'si' (devant 'il').",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21053/lorthographe/lapostrophe/lelision"
    },
    {
        id: "p70",
        category: "Ponctuation",
        topic: "Deux-points",
        question: "Peut-on utiliser plusieurs deux-points dans une même phrase ?",
        options: ["Il vaut mieux éviter.", "Oui, autant qu'on veut.", "Seulement dans les listes.", "Seulement dans les dialogues."],
        correctAnswer: 0,
        explanation: "La répétition des deux-points dans une même phrase peut nuire à la clarté.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21053/la-ponctuation/les-signes-de-ponctuation/les-deux-points"
    },
    {
        id: "p71",
        category: "Ponctuation",
        topic: "Crochets",
        question: "Les crochets servent généralement à :",
        options: ["Isoler un commentaire ou une modification dans une citation.", "Remplacer les parenthèses.", "Mettre en évidence un titre.", "Indiquer une erreur."],
        correctAnswer: 0,
        explanation: "Dans une citation, les crochets indiquent une intervention de celui qui rapporte les propos.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21053/la-ponctuation/les-signes-de-ponctuation/les-crochets"
    },
    {
        id: "p72",
        category: "Ponctuation",
        topic: "Guillemets",
        question: "Met-on une majuscule au début d'une citation complète après les deux-points ?",
        options: ["Oui.", "Non.", "C'est facultatif.", "Seulement si c'est un nom propre."],
        correctAnswer: 0,
        explanation: "Une citation complète commence par une majuscule.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21053/la-typographie/la-majuscule/la-majuscule-dans-les-citations"
    },
    {
        id: "p73",
        category: "Ponctuation",
        topic: "Virgule",
        question: "Doit-on mettre une virgule après un complément circonstanciel en début de phrase ?",
        options: ["Oui, c'est préférable pour la clarté.", "Non, jamais.", "Seulement s'il fait plus de 10 mots.", "C'est interdit."],
        correctAnswer: 0,
        explanation: "La virgule après un complément placé en tête de phrase est fréquente pour marquer le détachement.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21053/la-ponctuation/les-signes-de-ponctuation/la-virgule"
    },
    {
        id: "p74",
        category: "Ponctuation",
        topic: "Barre oblique",
        question: "La barre oblique est-elle recommandée dans les textes suivis (ex: 'il/elle') ?",
        options: ["Il vaut mieux l'éviter au profit de la rédaction épicène.", "Oui, c'est très moderne.", "Seulement dans les formulaires.", "C'est obligatoire."],
        correctAnswer: 0,
        explanation: "Dans un texte suivi, on préfère les formulations neutres ou le doublement des termes.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21053/la-ponctuation/les-signes-de-ponctuation/la-barre-oblique"
    },
    {
        id: "p75",
        category: "Ponctuation",
        topic: "Point final",
        question: "Met-on un point final après un titre ?",
        options: ["Non.", "Oui.", "Seulement s'il y a plus de 5 mots.", "Seulement s'il y a un verbe."],
        correctAnswer: 0,
        explanation: "On ne met jamais de point final à un titre ou un intertitre.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21053/la-ponctuation/les-signes-de-ponctuation/le-point"
    },
    {
        id: "p76",
        category: "Ponctuation",
        topic: "Virgule",
        question: "Doit-on mettre une virgule avant 'et' si le sujet change ?",
        options: ["Oui, c'est préférable pour la clarté.", "Non, jamais.", "Seulement si la phrase est courte.", "C'est interdit."],
        correctAnswer: 0,
        explanation: "Lorsque 'et' unit deux propositions ayant des sujets différents, la virgule est souvent utilisée pour faciliter la lecture.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21053/la-ponctuation/les-signes-de-ponctuation/la-virgule"
    },
    {
        id: "p77",
        category: "Ponctuation",
        topic: "Virgule",
        question: "Doit-on mettre une virgule avant 'et' si celui-ci est répété plus de deux fois ?",
        options: ["Oui, on met une virgule devant chaque 'et'.", "Non, le 'et' remplace la virgule.", "Seulement devant le dernier.", "Seulement si on veut insister."],
        correctAnswer: 0,
        explanation: "Dans une énumération où 'et' est répété par effet de style (polysyndète), on met généralement une virgule devant chaque 'et'.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21053/la-ponctuation/les-signes-de-ponctuation/la-virgule"
    },
    {
        id: "p78",
        category: "Ponctuation",
        topic: "Deux-points",
        question: "Peut-on mettre un point d'interrogation juste avant les deux-points ?",
        options: ["Oui, si la citation introduite est une question.", "Non, c'est impossible.", "Seulement dans les textes scientifiques.", "Seulement après un nom propre."],
        correctAnswer: 0,
        explanation: "C'est possible dans certains contextes très précis de dialogue ou de citation, bien que rare.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21053/la-ponctuation/les-signes-de-ponctuation/les-deux-points"
    },
    {
        id: "p79",
        category: "Ponctuation",
        topic: "Points de suspension",
        question: "Si les points de suspension terminent une phrase, doit-on ajouter un point final ?",
        options: ["Non, ils servent de point final.", "Oui, pour la clarté.", "C'est facultatif.", "Seulement si la phrase est longue."],
        correctAnswer: 0,
        explanation: "Les trois points de suspension suffisent à terminer la phrase.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21053/la-ponctuation/les-signes-de-ponctuation/les-points-de-suspension"
    },
    {
        id: "p80",
        category: "Ponctuation",
        topic: "Guillemets",
        question: "Si une citation se termine par un point d'exclamation, où se place le point final de la phrase porteuse ?",
        options: ["Il est supprimé.", "Après les guillemets fermants.", "Avant les guillemets fermants.", "On met les deux."],
        correctAnswer: 0,
        explanation: "Si la citation finit par une ponctuation forte (!, ?), le point final de la phrase principale est omis.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21053/la-ponctuation/les-signes-de-ponctuation/la-ponctuation-et-les-guillemets"
    },
    {
        id: "p81",
        category: "Ponctuation",
        topic: "Virgule",
        question: "Doit-on mettre une virgule avant 'ainsi que' ?",
        options: ["Oui, si on veut marquer une addition détachée.", "Non, jamais.", "Seulement en fin de phrase.", "C'est obligatoire."],
        correctAnswer: 0,
        explanation: "La virgule permet de distinguer l'addition simple de la comparaison.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21053/la-ponctuation/les-signes-de-ponctuation/la-virgule"
    },
    {
        id: "p82",
        category: "Ponctuation",
        topic: "Point-virgule",
        question: "Le point-virgule peut-il introduire une énumération complexe dont les éléments contiennent déjà des virgules ?",
        options: ["Oui, c'est son usage principal dans les listes.", "Non, on utilise les deux-points.", "Seulement dans les contrats.", "C'est interdit."],
        correctAnswer: 0,
        explanation: "Le point-virgule permet de clarifier une énumération dont les éléments sont longs ou comportent déjà des virgules.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21053/la-ponctuation/les-signes-de-ponctuation/le-point-virgule"
    },
    {
        id: "p83",
        category: "Ponctuation",
        topic: "Pièges",
        question: "Doit-on mettre une virgule après 'mais' en début de phrase ?",
        options: ["Non, sauf si une incise suit immédiatement.", "Oui, toujours.", "C'est facultatif.", "Seulement si la phrase est longue."],
        correctAnswer: 0,
        explanation: "En début de phrase, 'mais' n'est normalement pas suivi d'une virgule, sauf pour isoler un élément intercalé.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21053/la-ponctuation/les-signes-de-ponctuation/la-virgule"
    },
    {
        id: "p84",
        category: "Ponctuation",
        topic: "Pièges",
        question: "Met-on une virgule entre deux adjectifs épithètes ?",
        options: ["Oui, s'ils sont sur le même plan (coordonnés).", "Non, jamais.", "Seulement si le premier est long.", "Toujours."],
        correctAnswer: 0,
        explanation: "Si les adjectifs qualifient séparément le nom (ex: 'une grande, belle maison'), on met une virgule. S'ils forment un bloc (ex: 'une petite fille blonde'), on n'en met pas.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21053/la-ponctuation/les-signes-de-ponctuation/la-virgule"
    },
    {
        id: "p85",
        category: "Ponctuation",
        topic: "Pièges",
        question: "Faut-il une virgule avant 'ou bien' ?",
        options: ["Oui, généralement.", "Non, jamais.", "Seulement si la phrase est négative.", "Seulement en fin de phrase."],
        correctAnswer: 0,
        explanation: "On met généralement une virgule devant 'ou bien' pour marquer une alternative forte.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21053/la-ponctuation/les-signes-de-ponctuation/la-virgule"
    },
    {
        id: "p86",
        category: "Ponctuation",
        topic: "Pièges",
        question: "Doit-on mettre une virgule après un 'et' ?",
        options: ["Non, sauf si une incise suit.", "Oui, toujours.", "Seulement si la phrase est longue.", "Jamais."],
        correctAnswer: 0,
        explanation: "Comme pour 'mais', on ne met pas de virgule après 'et' sauf pour isoler un élément intercalé.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21053/la-ponctuation/les-signes-de-ponctuation/la-virgule"
    },
    {
        id: "p87",
        category: "Ponctuation",
        topic: "Pièges",
        question: "Dans une énumération, met-on une virgule avant le 'etc.' ?",
        options: ["Oui.", "Non.", "C'est facultatif.", "Seulement si la liste est longue."],
        correctAnswer: 0,
        explanation: "On met toujours une virgule avant 'etc.' pour clore l'énumération.",
        bdlLink: "https://vitrinelinguistique.oqlf.gouv.qc.ca/21053/la-ponctuation/les-signes-de-ponctuation/le-point"
    }
];
