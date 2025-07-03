// Cartas do Reino Doce
const sweetKingdomCards = {
    monsters: [
        {
            id: 'sk001',
            name: 'Bolo Assassino',
            type: 'monster',
            atk: 1500,
            def: 1000,
            image: 'images/cards/sweet_kingdom/cake.png',
            description: 'Um bolo delicioso que atrai inimigos com seu aroma, mas esconde lâminas afiadas em seu interior.'
        },
        {
            id: 'sk002',
            name: 'Gelatina Gigante',
            type: 'monster',
            atk: 1200,
            def: 1800,
            image: 'images/cards/sweet_kingdom/jelly.png',
            description: 'Uma massa gelatinosa que absorve ataques e se regenera rapidamente.'
        },
        {
            id: 'sk003',
            name: 'Chocolate Negro',
            type: 'monster',
            atk: 1800,
            def: 800,
            image: 'images/cards/sweet_kingdom/chocolate.png',
            description: 'Um guerreiro de chocolate amargo que queima os inimigos com seu sabor intenso.'
        },
        {
            id: 'sk004',
            name: 'Canela Cortante',
            type: 'monster',
            atk: 1600,
            def: 1200,
            image: 'images/cards/sweet_kingdom/cinnamon.png',
            description: 'Pó de canela que se transforma em lâminas afiadas ao menor sinal de perigo.'
        },
        {
            id: 'sk005',
            name: 'Marshmallow Guardião',
            type: 'monster',
            atk: 800,
            def: 2000,
            image: 'images/cards/sweet_kingdom/marshmallow.png',
            description: 'Protege os outros doces absorvendo todo o dano com seu corpo macio.'
        },
        {
            id: 'sk006',
            name: 'Marshmallow Guardião',
            type: 'monster',
            atk: 800,
            def: 2000,
            image: 'images/cards/sweet_kingdom/marshmallow.png',
            description: 'Protege os outros doces absorvendo todo o dano com seu corpo macio.'
        },
        {
            id: 'sk007',
            name: 'Marshmallow Guardião',
            type: 'monster',
            atk: 800,
            def: 2000,
            image: 'images/cards/sweet_kingdom/marshmallow.png',
            description: 'Protege os outros doces absorvendo todo o dano com seu corpo macio.'
        },
        {
            id: 'sk008',
            name: 'Marshmallow Guardião',
            type: 'monster',
            atk: 800,
            def: 2000,
            image: 'images/cards/sweet_kingdom/marshmallow.png',
            description: 'Protege os outros doces absorvendo todo o dano com seu corpo macio.'
        },
        {
            id: 'sk009',
            name: 'Marshmallow Guardião',
            type: 'monster',
            atk: 800,
            def: 2000,
            image: 'images/cards/sweet_kingdom/marshmallow.png',
            description: 'Protege os outros doces absorvendo todo o dano com seu corpo macio.'
        },
        {
            id: 'sk010',
            name: 'Marshmallow Guardião',
            type: 'monster',
            atk: 800,
            def: 2000,
            image: 'images/cards/sweet_kingdom/marshmallow.png',
            description: 'Protege os outros doces absorvendo todo o dano com seu corpo macio.'
        }

    ],
    magics: [
        {
            id: 'skm001',
            name: 'Adição de Açúcar',
            type: 'magic',
            effect: 'add',
            value: 500,
            image: 'images/cards/sweet_kingdom/sugar_add.png',
            description: 'Aumenta o ATK de um monstro em 500 pontos.'
        },
        {
            id: 'skm002',
            name: 'Subtração de Calorias',
            type: 'magic',
            effect: 'subtract',
            value: 500,
            image: 'images/cards/sweet_kingdom/calories_sub.png',
            description: 'Reduz o ATK de um monstro inimigo em 500 pontos.'
        },
        {
            id: 'skm003',
            name: 'Multiplicação de Camadas',
            type: 'magic',
            effect: 'multiply',
            value: 1.5,
            image: 'images/cards/sweet_kingdom/layers_mul.png',
            description: 'Multiplica o ATK de um monstro por 1.5x por este turno.'
        },
        {
            id: 'skm004',
            name: 'Divisão Justa',
            type: 'magic',
            effect: 'divide',
            value: 2,
            image: 'images/cards/sweet_kingdom/fair_divide.png',
            description: 'Divide o ATK de um monstro inimigo pela metade por este turno.'
        },
        {
            id: 'skm004',
            name: 'Divisão Justa',
            type: 'magic',
            effect: 'divide',
            value: 2,
            image: 'images/cards/sweet_kingdom/fair_divide.png',
            description: 'Divide o ATK de um monstro inimigo pela metade por este turno.'
        },
        {
            id: 'skm005',
            name: 'Divisão Justa',
            type: 'magic',
            effect: 'divide',
            value: 2,
            image: 'images/cards/sweet_kingdom/fair_divide.png',
            description: 'Divide o ATK de um monstro inimigo pela metade por este turno.'
        },
        {
            id: 'skm006',
            name: 'Divisão Justa',
            type: 'magic',
            effect: 'divide',
            value: 2,
            image: 'images/cards/sweet_kingdom/fair_divide.png',
            description: 'Divide o ATK de um monstro inimigo pela metade por este turno.'
        },
        {
            id: 'skm007',
            name: 'Divisão Justa',
            type: 'magic',
            effect: 'divide',
            value: 2,
            image: 'images/cards/sweet_kingdom/fair_divide.png',
            description: 'Divide o ATK de um monstro inimigo pela metade por este turno.'
        },
        {
            id: 'skm008',
            name: 'Divisão Justa',
            type: 'magic',
            effect: 'divide',
            value: 2,
            image: 'images/cards/sweet_kingdom/fair_divide.png',
            description: 'Divide o ATK de um monstro inimigo pela metade por este turno.'
        },
        {
            id: 'skm009',
            name: 'Divisão Justa',
            type: 'magic',
            effect: 'divide',
            value: 2,
            image: 'images/cards/sweet_kingdom/fair_divide.png',
            description: 'Divide o ATK de um monstro inimigo pela metade por este turno.'
        },
        {
            id: 'skm010',
            name: 'Divisão Justa',
            type: 'magic',
            effect: 'divide',
            value: 2,
            image: 'images/cards/sweet_kingdom/fair_divide.png',
            description: 'Divide o ATK de um monstro inimigo pela metade por este turno.'
        }
    ]
};

// Cartas de Criaturas Folclóricas
const folkloreCreaturesCards = {
    monsters: [
        {
            id: 'fc001',
            name: 'Saci-Pererê',
            type: 'monster',
            atk: 1400,
            def: 1600,
            image: 'images/cards/folklore_creatures/saci.png',
            description: 'Travesso e rápido, confunde os inimigos com seus truques.'
        },
        {
            id: 'fc002',
            name: 'Curupira',
            type: 'monster',
            atk: 1700,
            def: 1300,
            image: 'images/cards/folklore_creatures/curupira.png',
            description: 'Protege a floresta com seus pés virados para trás, confundindo perseguidores.'
        },
        {
            id: 'fc003',
            name: 'Iara',
            type: 'monster',
            atk: 1600,
            def: 1400,
            image: 'images/cards/folklore_creatures/iara.png',
            description: 'Encanta os inimigos com seu canto, reduzindo sua capacidade de combate.'
        },
        {
            id: 'fc004',
            name: 'Boitatá',
            type: 'monster',
            atk: 1900,
            def: 1100,
            image: 'images/cards/folklore_creatures/boitata.png',
            description: 'Serpente de fogo que queima tudo em seu caminho.'
        },
        {
            id: 'fc005',
            name: 'Mula-sem-Cabeça',
            type: 'monster',
            atk: 2000,
            def: 1000,
            image: 'images/cards/folklore_creatures/mula.png',
            description: 'Corre velozmente, atropelando tudo em seu caminho.'
        },
        {
            id: 'fc006',
            name: 'Mula-sem-Cabeça',
            type: 'monster',
            atk: 2000,
            def: 1000,
            image: 'images/cards/folklore_creatures/mula.png',
            description: 'Corre velozmente, atropelando tudo em seu caminho.'
        },
        {
            id: 'fc007',
            name: 'Mula-sem-Cabeça',
            type: 'monster',
            atk: 2000,
            def: 1000,
            image: 'images/cards/folklore_creatures/mula.png',
            description: 'Corre velozmente, atropelando tudo em seu caminho.'
        },
        {
            id: 'fc008',
            name: 'Mula-sem-Cabeça',
            type: 'monster',
            atk: 2000,
            def: 1000,
            image: 'images/cards/folklore_creatures/mula.png',
            description: 'Corre velozmente, atropelando tudo em seu caminho.'
        },
        {
            id: 'fc009',
            name: 'Mula-sem-Cabeça',
            type: 'monster',
            atk: 2000,
            def: 1000,
            image: 'images/cards/folklore_creatures/mula.png',
            description: 'Corre velozmente, atropelando tudo em seu caminho.'
        },
        {
            id: 'fc010',
            name: 'Mula-sem-Cabeça',
            type: 'monster',
            atk: 2000,
            def: 1000,
            image: 'images/cards/folklore_creatures/mula.png',
            description: 'Corre velozmente, atropelando tudo em seu caminho.'
        }
    ],
    magics: [
        {
            id: 'fcm001',
            name: 'Raiz da Terra',
            type: 'magic',
            effect: 'square_root',
            value: null,
            image: 'images/cards/folklore_creatures/earth_root.png',
            description: 'Reduz o ATK de um monstro inimigo para sua raiz quadrada (arredondado para baixo).'
        },
        {
            id: 'fcm002',
            name: 'Poder ao Quadrado',
            type: 'magic',
            effect: 'square',
            value: null,
            image: 'images/cards/folklore_creatures/power_square.png',
            description: 'Aumenta o ATK de um monstro para seu valor ao quadrado.'
        },
        {
            id: 'fcm003',
            name: 'Lenda Crescente',
            type: 'magic',
            effect: 'exponent',
            value: 2,
            image: 'images/cards/folklore_creatures/growing_legend.png',
            description: 'Aumenta o ATK de um monstro para seu valor elevado a 2.'
        },
        {
            id: 'fcm004',
            name: 'Mito Redutor',
            type: 'magic',
            effect: 'logarithm',
            value: 10,
            image: 'images/cards/folklore_creatures/reducing_myth.png',
            description: 'Reduz o ATK de um monstro inimigo para o logaritmo base 10 de seu valor (arredondado para baixo).'
        }
    ]
};

function getDeckCards(deckType) {
    if (deckType === 'matematica') {
        return sweetKingdomCards;
    } else if (deckType === 'algebra') {
        return folkloreCreaturesCards;
    }
    return null;
}

function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}

function createDeck(deckType) {
    const deckData = getDeckCards(deckType);
    if (!deckData) return null;
    
    // Criar deck com 20 cartas (10 monstros e 10 magias)
    let deck = [];
    
    // Adicionar monstros (3 de cada)
    deckData.monsters.forEach(monster => {
        deck.push({...monster});
        deck.push({...monster});
        deck.push({...monster});
    });
    
    // Adicionar magias (1-2 de cada)
    deckData.magics.forEach(magic => {
        deck.push({...magic});
        if (Math.random() > 0.5) deck.push({...magic});
    });
    
    // Embaralhar o deck
    return shuffleDeck(deck);
}