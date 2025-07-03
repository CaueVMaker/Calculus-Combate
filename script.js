// Variáveis do jogo
let playerLife = 80;
let aiLife = 80;
let playerDeck = [];
let aiDeck = [];
let playerHand = [];
let aiHand = [];
let playerField = [];
let aiField = [];
let graveyard = [];
let currentPlayer = 'player'; // 'player' ou 'ai'
let gamePhase = 'draw'; // 'draw', 'main', 'battle', 'end'
let gameLog = [];

// Inicialização do jogo
function initGame() {
    // Resetar variáveis
    playerLife = 80;
    aiLife = 80;
    playerHand = [];
    aiHand = [];
    playerField = [];
    aiField = [];
    graveyard = [];
    currentPlayer = 'player';
    gamePhase = 'draw';
    gameLog = [];
    
    // Criar decks embaralhados
    playerDeck = [...BASE_DECK].sort(() => Math.random() - 0.5);
    aiDeck = [...BASE_DECK].sort(() => Math.random() - 0.5);
    
    // Distribuir 5 cartas iniciais
    for (let i = 0; i < 5; i++) {
        drawCard('player');
        drawCard('ai');
    }
    
    updateGameUI();
    addToLog('Jogo iniciado! Você começa.');
}

// Função para comprar carta
function drawCard(player) {
    const deck = player === 'player' ? playerDeck : aiDeck;
    const hand = player === 'player' ? playerHand : aiHand;
    
    if (deck.length > 0) {
        const card = deck.pop();
        hand.push(card);
        
        if (player === 'player') {
            addToLog('Você comprou uma carta.');
        }
    } else {
        // Perder por deck out
        if (player === 'player') {
            playerLife = 0;
            addToLog('Você perdeu por não ter mais cartas no deck!');
        } else {
            aiLife = 0;
            addToLog('IA perdeu por não ter mais cartas no deck!');
        }
        checkGameEnd();
    }
}

// Função para jogar uma carta
function playCard(player, cardIndex, fieldIndex = null) {
    const hand = player === 'player' ? playerHand : aiHand;
    const field = player === 'player' ? playerField : aiField;
    
    if (cardIndex >= 0 && cardIndex < hand.length) {
        const card = hand[cardIndex];
        
        if (card.type === CARD_TYPES.MONSTER) {
            // Jogar monstro no campo
            if (field.length < 5) { // Limite de 5 monstros
                field.push({...card, position: 'attack', canAttack: true});
                hand.splice(cardIndex, 1);
                
                if (player === 'player') {
                    addToLog(`Você invocou ${card.name} em modo de ataque.`);
                }
            } else {
                if (player === 'player') {
                    addToLog('Seu campo está cheio!');
                }
                return false;
            }
        } else if (card.type === CARD_TYPES.SPELL) {
            // Ativar magia
            activateSpell(player, card);
            hand.splice(cardIndex, 1);
            graveyard.push(card);
        }
        
        updateGameUI();
        return true;
    }
    return false;
}

// Função para ativar magia
function activateSpell(player, spell) {
    addToLog(`${player === 'player' ? 'Você' : 'IA'} ativou ${spell.name}.`);
    
    switch(spell.id) {
        case 101: // Furação
            // Remove todas as magias (não temos armadilhas)
            // Nesta versão simplificada, não temos magias no campo
            break;
        case 102: // Seta do Céu
            if (player === 'player') {
                aiLife -= 300;
                addToLog('IA perdeu 300 pontos de vida!');
            } else {
                playerLife -= 300;
                addToLog('Você perdeu 300 pontos de vida!');
            }
            break;
        case 103: // Ressurreição de Monstro
            if (graveyard.length > 0) {
                const monsterCards = graveyard.filter(c => c.type === CARD_TYPES.MONSTER);
                if (monsterCards.length > 0) {
                    const randomMonster = monsterCards[Math.floor(Math.random() * monsterCards.length)];
                    const field = player === 'player' ? playerField : aiField;
                    
                    if (field.length < 5) {
                        field.push({...randomMonster, position: 'attack', canAttack: false});
                        graveyard = graveyard.filter(c => c.id !== randomMonster.id || c.type !== randomMonster.type);
                        addToLog(`${randomMonster.name} foi ressuscitado para o campo ${player === 'player' ? 'do jogador' : 'da IA'}!`);
                    }
                }
            }
            break;
        case 104: // Força Unida
            const field = player === 'player' ? playerField : aiField;
            field.forEach(monster => {
                monster.attack += 500;
                monster.defense += 500;
            });
            addToLog(`Todos os monstros ${player === 'player' ? 'do jogador' : 'da IA'} ganharam 500 de ATK/DEF!`);
            break;
        case 105: // Buraco Negro
            playerField = [];
            aiField = [];
            addToLog('Todos os monstros foram destruídos!');
            break;
    }
    
    checkGameEnd();
}

// Função para atacar
function attack(attackerIndex, defenderIndex = null) {
    if (currentPlayer !== 'player') return;
    
    const attacker = playerField[attackerIndex];
    if (!attacker || !attacker.canAttack) return;
    
    if (defenderIndex === null) {
        // Ataque direto
        aiLife -= attacker.attack;
        addToLog(`${attacker.name} atacou diretamente! IA perdeu ${attacker.attack} pontos de vida!`);
    } else {
        // Ataque a monstro
        const defender = aiField[defenderIndex];
        if (!defender) return;
        
        if (attacker.attack > defender.defense) {
            // Destruir monstro defensor
            aiField.splice(defenderIndex, 1);
            graveyard.push(defender);
            addToLog(`${attacker.name} destruiu ${defender.name}!`);
            
            // Dano de batalha
            const damage = attacker.attack - defender.defense;
            aiLife -= damage;
            if (damage > 0) {
                addToLog(`IA sofreu ${damage} pontos de dano de batalha!`);
            }
        } else if (attacker.attack < defender.defense) {
            // Dano de batalha ao atacante
            const damage = defender.defense - attacker.attack;
            playerLife -= damage;
            addToLog(`${defender.name} resistiu e você sofreu ${damage} pontos de dano!`);
        } else {
            // Empate - ambos são destruídos
            playerField.splice(attackerIndex, 1);
            aiField.splice(defenderIndex, 1);
            graveyard.push(attacker);
            graveyard.push(defender);
            addToLog(`${attacker.name} e ${defender.name} se destruíram mutuamente!`);
        }
    }
    
    attacker.canAttack = false;
    checkGameEnd();
    updateGameUI();
}

// Função para finalizar turno
function endTurn() {
    if (currentPlayer !== 'player') return;
    
    currentPlayer = 'ai';
    gamePhase = 'draw';
    addToLog('Você finalizou seu turno. Vez da IA.');
    
    // Resetar ataques dos monstros do jogador
    playerField.forEach(monster => {
        monster.canAttack = true;
    });
    
    updateGameUI();
    aiTurn();
}

// Turno da IA
function aiTurn() {
    setTimeout(() => {
        // Fase de compra
        drawCard('ai');
        
        // Fase principal
        // Jogar monstros
        while (aiHand.length > 0 && aiField.length < 5) {
            const monsterCards = aiHand.filter(c => c.type === CARD_TYPES.MONSTER);
            if (monsterCards.length === 0) break;
            
            const cardIndex = aiHand.findIndex(c => c.id === monsterCards[0].id);
            playCard('ai', cardIndex);
        }
        
        // Ativar magias
        const spellCards = aiHand.filter(c => c.type === CARD_TYPES.SPELL);
        spellCards.forEach(spell => {
            const cardIndex = aiHand.findIndex(c => c.id === spell.id);
            playCard('ai', cardIndex);
        });
        
        // Fase de batalha
        aiField.forEach((monster, index) => {
            if (monster.canAttack) {
                if (playerField.length > 0) {
                    // Atacar monstro com menor defesa
                    let weakestDefenderIndex = 0;
                    for (let i = 1; i < playerField.length; i++) {
                        if (playerField[i].defense < playerField[weakestDefenderIndex].defense) {
                            weakestDefenderIndex = i;
                        }
                    }
                    
                    // Simular ataque
                    const attacker = monster;
                    const defender = playerField[weakestDefenderIndex];
                    
                    if (attacker.attack > defender.defense) {
                        playerField.splice(weakestDefenderIndex, 1);
                        graveyard.push(defender);
                        const damage = attacker.attack - defender.defense;
                        playerLife -= damage;
                        addToLog(`${attacker.name} atacou e destruiu ${defender.name}! Você sofreu ${damage} pontos de dano!`);
                    } else if (attacker.attack < defender.defense) {
                        const damage = defender.defense - attacker.attack;
                        aiLife -= damage;
                        addToLog(`${attacker.name} atacou ${defender.name} mas foi derrotado! IA sofreu ${damage} pontos de dano!`);
                    } else {
                        playerField.splice(weakestDefenderIndex, 1);
                        aiField.splice(index, 1);
                        graveyard.push(defender);
                        graveyard.push(attacker);
                        addToLog(`${attacker.name} e ${defender.name} se destruíram mutuamente!`);
                    }
                } else {
                    // Ataque direto
                    playerLife -= monster.attack;
                    addToLog(`${monster.name} atacou diretamente! Você perdeu ${monster.attack} pontos de vida!`);
                }
                
                monster.canAttack = false;
            }
        });
        
        // Finalizar turno
        currentPlayer = 'player';
        gamePhase = 'draw';
        addToLog('IA finalizou seu turno. Sua vez.');
        
        // Resetar ataques dos monstros da IA
        aiField.forEach(monster => {
            monster.canAttack = true;
        });
        
        checkGameEnd();
        updateGameUI();
    }, 1500); // Pequeno atraso para parecer mais natural
}

// Verificar fim de jogo
function checkGameEnd() {
    if (playerLife <= 0) {
        playerLife = 0;
        addToLog('Você perdeu! Fim de jogo.');
        setTimeout(() => alert('Fim de jogo! IA venceu!'), 100);
    } else if (aiLife <= 0) {
        aiLife = 0;
        addToLog('IA perdeu! Você venceu!');
        setTimeout(() => alert('Parabéns! Você venceu!'), 100);
    }
    
    updateLifeBars();
}

// Atualizar UI
function updateGameUI() {
    updateLifeBars();
    renderHand('player');
    renderHand('ai');
    renderField('player');
    renderField('ai');
    renderGraveyard();
    renderLog();
}

function updateLifeBars() {
    document.getElementById('player-life').style.width = `${(playerLife / 80) * 100}%`;
    document.getElementById('player-life').textContent = playerLife;
    document.getElementById('ai-life').style.width = `${(aiLife / 80) * 100}%`;
    document.getElementById('ai-life').textContent = aiLife;
    
    // Mudar cor conforme a vida diminui
    const playerLifeBar = document.getElementById('player-life');
    if (playerLife <= 20) {
        playerLifeBar.style.backgroundColor = 'red';
    } else if (playerLife <= 40) {
        playerLifeBar.style.backgroundColor = 'orange';
    } else {
        playerLifeBar.style.backgroundColor = 'green';
    }
    
    const aiLifeBar = document.getElementById('ai-life');
    if (aiLife <= 20) {
        aiLifeBar.style.backgroundColor = 'red';
    } else if (aiLife <= 40) {
        aiLifeBar.style.backgroundColor = 'orange';
    } else {
        aiLifeBar.style.backgroundColor = 'green';
    }
}

function renderHand(player) {
    const handElement = document.getElementById(`${player}-hand`);
    handElement.innerHTML = '';
    
    const hand = player === 'player' ? playerHand : aiHand;
    
    hand.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = `card ${card.type}`;
        cardElement.innerHTML = `
            <div class="card-name">${card.name}</div>
            ${card.type === CARD_TYPES.MONSTER ? 
                `<div class="card-stats">ATK/${card.attack} DEF/${card.defense}</div>` : ''}
            <div class="card-description">${card.description}</div>
        `;
        
        if (player === 'player') {
            cardElement.addEventListener('click', () => {
                if (gamePhase === 'main') {
                    playCard('player', index);
                }
            });
        }
        
        handElement.appendChild(cardElement);
    });
}

function renderField(player) {
    const fieldElement = document.getElementById(`${player}-field`);
    fieldElement.innerHTML = '';
    
    const field = player === 'player' ? playerField : aiField;
    
    field.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = `card ${card.type}`;
        cardElement.innerHTML = `
            <div class="card-name">${card.name}</div>
            ${card.type === CARD_TYPES.MONSTER ? 
                `<div class="card-stats">ATK/${card.attack} DEF/${card.defense}</div>` : ''}
            <div class="card-description">${card.description}</div>
            ${card.type === CARD_TYPES.MONSTER ? 
                `<div class="card-position">${card.position === 'attack' ? '⚔️' : '🛡️'}</div>` : ''}
        `;
        
        if (player === 'player' && card.type === CARD_TYPES.MONSTER && card.canAttack) {
            cardElement.addEventListener('click', () => {
                if (gamePhase === 'battle') {
                    if (aiField.length > 0) {
                        // Mostrar opções de ataque
                        addToLog('Selecione um monstro inimigo para atacar ou clique novamente no seu monstro para ataque direto.');
                        aiField.forEach((_, aiIndex) => {
                            const enemyCard = document.getElementById('ai-field').children[aiIndex];
                            enemyCard.style.border = '2px solid red';
                            enemyCard.addEventListener('click', () => {
                                attack(index, aiIndex);
                                // Remover os listeners temporários
                                aiField.forEach((_, i) => {
                                    document.getElementById('ai-field').children[i].style.border = '1px solid #333';
                                });
                            }, {once: true});
                        });
                    } else {
                        // Ataque direto
                        attack(index);
                    }
                }
            });
        }
        
        fieldElement.appendChild(cardElement);
    });
}

function renderGraveyard() {
    const graveyardElement = document.getElementById('graveyard');
    graveyardElement.textContent = `Cemitério (${graveyard.length})`;
}

function renderLog() {
    const logElement = document.getElementById('game-log');
    logElement.innerHTML = gameLog.map(entry => `<div>${entry}</div>`).join('');
    logElement.scrollTop = logElement.scrollHeight;
}

function addToLog(message) {
    gameLog.push(message);
    if (gameLog.length > 50) {
        gameLog.shift();
    }
    renderLog();
}

// Event Listeners
document.getElementById('end-turn').addEventListener('click', endTurn);
document.getElementById('new-game').addEventListener('click', initGame);

// Iniciar jogo quando a página carregar
window.addEventListener('DOMContentLoaded', () => {
    initGame();
    
    // Adicionar fases do turno (simplificado)
    document.addEventListener('keypress', (e) => {
        if (e.key === '1' && currentPlayer === 'player') {
            gamePhase = 'draw';
            drawCard('player');
            gamePhase = 'main';
            addToLog('Fase principal - você pode jogar cartas.');
        } else if (e.key === '2' && currentPlayer === 'player' && gamePhase === 'main') {
            gamePhase = 'battle';
            addToLog('Fase de batalha - você pode atacar com seus monstros.');
        }
    });
});