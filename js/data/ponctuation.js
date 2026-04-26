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
    }
];
