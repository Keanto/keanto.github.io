const story = {

    //---------------------------------INICIAL---------------------------------------------------

    start: {
        dialogues: [
            { 
                characterName: "Narrador", 
                text: "Você se encontra em seu labóratorio de desenvolvimento, Você está mexendo num computador antigo que encontrastes em seu depósito, mas muito afetado, Suas parceiras que encontraram esse seu computador, e insistem tentar lhe ajudar com ele.", 
                characters: [
                    { image: "../src/personagens/Okarin.png", slot: 3 }
               ] 
            },
            { 
                characterName: "Kurisu", 
                text: "Okarin, devemos ligar esse computador, estou preocupada com oque pode ter acontecido com Rintarou, Não consigo parar de pensar nela.",
                characters: [
                    { image: "../src/personagens/kurisu.png", slot: 1 }
                ] 
            },
            { 
                characterName: "Você", 
                text: "'Esse computador é muito antigo para poder ligar, Ela acha que é simples como os outros... mas deve ser por causa do desaparecimento da Rintarou...'",  
                characters: [
                    { image: "../src/personagens/kurisu.png", slot: 1 }
                ] 
            },
            { 
                characterName: "Mayuri", 
                text: "Okarin, Trouxe as peças que você pediu, vou lhe entregar elas.",  
                characters: [
                    { image: "../src/personagens/kurisu.png", slot: 1 },
                    { image: "../src/personagens/mayuri.png", slot: 2 }
                ] 
            },
            { 
                characterName: "Kurisu", 
                text: " Me dê esse computador, Vou falar oq ele precisa e voce me entrega, desse jeito vai ser mais rapido.",
                characters: [
                    { image: "../src/personagens/kurisu.png", slot: 1 },
                    { image: "../src/personagens/mayuri.png", slot: 2 }
                ] 
            },
            { 
                characterName: "Você", 
                text: "'Não sei se seria melhor opção...'",  
                characters: [
                    { image: "../src/personagens/kurisu.png", slot: 1 },
                    { image: "../src/personagens/mayuri.png", slot: 2 }
                ] 
            },
            { 
                characterName: "Narrador", 
                text: " Kurisu começa a abrir frenéticamente o computador, Ela está realmente com pressa.",
                characters: [
                   // { image: "../src/personagens/kurisu.png", slot: 1 }
                ] 
            },
            { 
                characterName: "Kurisu", 
                text: "Me dê uma memória principal adequada!.",
                characters: [
                    { image: "../src/personagens/kurisu.png", slot: 1 }
                ] 
            },
        
        ],
        options: [
            { text: "Entregar o HD", next: "scene1" },
            { text: "Entregar a RAM", next: "scene5" },
            { text: "Entregar o SSD", next: "scene2" }
        ],
        backgroundImage: "../src/mapas/quarto.jpg"
    },


scene1: {
    dialogues: [
        { 
            characterName: "Kurisu", 
            text: "Sério? acha mesmo que um HD cabe nessa entrada?",
            characters: [
                { image: "../src/personagens/kurisu.png", slot: 1 }
            ] 
        },
    ],
    options: [
        { text: "Entregar o SSD", next: "scene2" },
        { text: "Entregar a RAM", next: "scene5" }
    ],
    backgroundImage: "../src/mapas/quarto.jpg"
},

scene2: {
    dialogues: [
        { 
            characterName: "Kurisu", 
            text: "Engraçadinho, é rapido, mas não é oque queremos",
            characters: [
                { image: "../src/personagens/kurisu.png", slot: 1 }
            ] 
        },
    ],
    options: [
        { text: "Entregar a RAM", next: "scene5" }
    ],
    backgroundImage: "../src/mapas/quarto.jpg"
},

scene5: {
    dialogues: [
        { 
            characterName: "Kurisu", 
            text: "Perfeito",
            characters: [
                { image: "../src/personagens/kurisu.png", slot: 1 }
            ] 
        },
        { 
            characterName: "Narrador", 
            text: "Você entrega a Ram para Kurisu, ela tenta encaixar mas não consegue.",
            characters: [
               // { image: "../src/personagens/kurisu.png", slot: 1 }
            ] 
        },
        { 
            characterName: "Kurisu", 
            text: "Mas qual será o problema?...",
            characters: [
                { image: "../src/personagens/kurisu.png", slot: 1 }
            ] 
        },
    ],
    options: [
        { text: "Ela está encaixando errado, Recomende colocar com mais força", next: "scene3" },
        { text: "Está ao contrario, somente tem que virar elá.", next: "scene4" },
        { text: "O DDR está errado, entregue outra Ram para ela", next: "scene10" },
    ],
    backgroundImage: "../src/mapas/quarto.jpg"
},

//-------------------------------------------------------------------------------------------------------------------------------------------


scene3: {
    dialogues: [
        { 
            characterName: "Narrador", 
            text: "Ela coloca com mais força, mas a ram e a entrada na placa se quebram, causando curto, Rintarou não pode mais ser encontrada.",
            characters: [
              //  { image: "../src/personagens/kurisu.png", slot: 1 }
            ] 
        },
    ],
    options: [
        { text: "Reescreva o tempo e entregue outra Ram para ela", next: "scene10" }
    ],
    backgroundImage: "../src/mapas/quarto.jpg"
},

scene4: {
    dialogues: [
        { 
            characterName: "Você", 
            text: "Vira a RAM, deve ser apenas a posição.",
            characters: [
                { image: "../src/personagens/Okarin.png", slot: 3 }
            ] 
        },
        { 
            characterName: "Narrador", 
            text: "Narrador: ela vira a Ram, mas não consegue ainda.",
            characters: [
               // { image: "../src/personagens/Okarin.png", slot: 3 }
            ] 
        },
    ],
    options: [
        { text: "Ela está encaixando errado, Recomende colocar com mais força", next: "scene3" },
        { text: "O DDR está errado, entregue outra Ram para ela", next: "scene10" }
    ],
    backgroundImage: "../src/mapas/quarto.jpg"
},



//-----------------------------------------------------------------------------------

scene10: {
    dialogues: [
        { 
            characterName: "Narrador", 
            text: "Você entrega outra Ram, do DDR ideal, e agora ela consegue encaixar.",
            characters: [
               // { image: "../src/personagens/Okarin.png", slot: 3 }
            ] 
        },
        { 
            characterName: "Mayuri", 
            text: "Agora deixa eu tentar!",
            characters: [
               // { image: "../src/personagens/Okarin.png", slot: 3 },
                { image: "../src/personagens/mayuri.png", slot: 2 }
            ] 
        },
        { 
            characterName: "Kurisu", 
            text: "Não, me devol..!",
            characters: [
                { image: "../src/personagens/kurisu.png", slot: 1 },
                { image: "../src/personagens/mayuri.png", slot: 2 }
            ] 
        },
        { 
            characterName: "Narrador", 
            text: " Mayuri pega o computador antes mesmo de Kurisu poder reagir.",
            characters: [
               // { image: "../src/personagens/Okarin.png", slot: 3 },
               { image: "../src/personagens/kurisu.png", slot: 1 },
               { image: "../src/personagens/mayuri.png", slot: 2 }
            ] 
        },
        { 
            characterName: "Mayuri", 
            text: "Só tem uma Ram de 4G, isso não faz muita diferença, Vamos Okarin me entregue uma RAM de 80G!!",
            characters: [
               // { image: "../src/personagens/Okarin.png", slot: 3 },
                { image: "../src/personagens/mayuri.png", slot: 2 }
            ] 
        },
        
    ],
    options: [
        { text: "Explicar que não temos uma no momento", next: "scene6" },
        { text: "Falar que Rams desse tamanho são caras e denecessarias.", next: "scene15" },
        { text: "Pedir uma para a Kurisu", next: "scene7" }
    ],
    backgroundImage: "../src/mapas/quarto.jpg"
},

//------------------------------------------------------------------------------

scene6: {
    dialogues: [
        { 
            characterName: "Narrador", 
            text: "Kurisu te olha estranho, ( -5 pontos de amizade).",
            characters: [
                { image: "../src/personagens/kurisu.png", slot: 1 }
            ] 
        },
        { 
            characterName: "Mayuri", 
            text: "Obrigada, Vamos conseguir fazer mais coisas com uma! ( +5 pontos de amizade)",
            characters: [
                 { image: "../src/personagens/Mayuri.png", slot: 2 },
                 { image: "../src/personagens/kurisu.png", slot: 1 }
            ] 
        },
    ],
    options: [
        { text: "Desculpa Kurisu...", next: "scene15" },
    ],
    backgroundImage: "../src/mapas/quarto.jpg"
},

scene7: {
    dialogues: [
        { 
            characterName: "Narrador", 
            text: " Kurisu te olha estranho, ( -10 pontos de amizade).",
            characters: [
                { image: "../src/personagens/kurisu.png", slot: 1 }
            ] 
        },
    ],
    options: [
        { text: "Desculpa Kurisu...", next: "scene15" },
    ],
    backgroundImage: "../src/mapas/quarto.jpg"
},

scene15: {
    dialogues: [
        { 
            characterName: "Narrador", 
            text: "Após resolver essa situação, Você se assusta com Suzura entrando inexperadamente no lugar, dando um chutão na porta!",
            characters: [
               // { image: "../src/personagens/kurisu.png", slot: 1 }
            ] 
        },
        { 
            characterName: "Suzuha", 
            text: "CAMBADA! Encontrei a solução dos nossos problemas, comprei com o perigo um HD de 100GB com velocidade de leitura de 50GB por segundos, isso vai fazer nós encontrarmos a Rintarou mais rapido.",
            characters: [
                { image: "../src/personagens/suzuha.png", slot: 3 }
            ] 
        },
        { 
            characterName: "Kurisu", 
            text: "Isso está errado... Okarin explique o porque, to tentando fazer a Mayuri não meter um i-16 aqui!",
            characters: [
                { image: "../src/personagens/kurisu.png", slot: 1 },
                { image: "../src/personagens/suzuha.png", slot: 3 }
            ] 
        },
    ],
    options: [
        { text: "Explicar que HDs são mais lentos, e está capacidade é muito baixa.", next: "scene11" },
        { text: "Falar que o essa velocidade de leitura é inutil para um HD desse tamanho.", next: "scene8" },
        { text: "Kurisu, Mas isso seria muito útil.", next: "scene9" },
    ],
    backgroundImage: "../src/mapas/quarto.jpg"
},

  //----------------------------------------------------------------

  scene11: {
    dialogues: [
        { 
            characterName: "Você", 
            text: " Então, HDs são mais lentos, mas tem uma capacidade maior chegando a até 2 Terabyts, Mas com velocidade de leitura sempre baixa, Por causa disso eles sõa mais baratos, se fossem rapidos, não seria possivel comprar eles com tanta acessibilidade.",
            characters: [
                { image: "../src/personagens/Okarin.png", slot: 3 }
            ] 
        },
    ],
    options: [
        { text: "Entendeu?", next: "scene20" },
    ],
    backgroundImage: "../src/mapas/quarto.jpg"
},

scene8: {
    dialogues: [
        { 
            characterName: "Kurisu", 
            text: " E também HDs são mais lentos, mas tem uma capacidade maior chegando a até 2 Terabyts, Mas com velocidade de leitura sempre baixa, Por causa disso eles sõa mais baratos, se fossem rapidos, não seria possivel comprar eles com tanta acessibilidade.",
            characters: [
                { image: "../src/personagens/kurisu.png", slot: 1 }
            ] 
        },
    ],
    options: [
        { text: " Obrigado Kurisu", next: "scene20" },
    ],
    backgroundImage: "../src/mapas/quarto.jpg"
},

scene9: {
    dialogues: [
        { 
            characterName: "Kurisu", 
            text: " Kurisu: Meu Deus Okarin ( -15 pontos de amizade)",
            characters: [
                { image: "../src/personagens/kurisu.png", slot: 1 }
            ] 
        },
    ],
    options: [
        { text: "To errado?", next: "scene8" },
    ],
    backgroundImage: "../src/mapas/quarto.jpg"
},

//--------------------------------------------------------

scene20: {
    dialogues: [
        { 
            characterName: "Suzuha", 
            text: "então gastei 600 Reias atoa..",
            characters: [
                { image: "../src/personagens/suzuha.png", slot: 3 }
            ] 
        },
        { 
            characterName: "Mayuri", 
            text: "Calma Suzuha, eu te arranjo esse dinheiro novamente, um dia, acho...",
            characters: [
                { image: "../src/personagens/suzuha.png", slot: 3 },
                { image: "../src/personagens/mayuri.png", slot: 2 },

            ] 
        },
        { 
            characterName: "Kurisu", 
            text: "Okarin, essa placa não tem memória cache.",
            characters: [
                { image: "../src/personagens/suzuha.png", slot: 3 },
                { image: "../src/personagens/mayuri.png", slot: 2 },
                { image: "../src/personagens/kurisu.png", slot: 1 }
            ] 
        },
        { 
            characterName: "Mayuri", 
            text: "Mas isso é importante?",
            characters: [
                { image: "../src/personagens/suzuha.png", slot: 3 },
                { image: "../src/personagens/mayuri.png", slot: 2 },
                { image: "../src/personagens/kurisu.png", slot: 1 }
            ] 
        },
    ],
    options: [
        { text: "Sim, significa que é uma placa antiga e que acontece Gargalo", next: "scene14" },
        { text: "Sim, significa que vai ser só mais lenta", next: "scene13" },
        { text: "Não tanto, Só temos que adicionar uma nova memória cache.", next: "scene12" }
    ],
    backgroundImage: "../src/mapas/quarto.jpg"
},



//----------------------------------------------------


scene14: {
    dialogues: [
        { 
            characterName: "Você", 
            text: " ...A memória cache é integrada diretamente no processador (CPU) ou em casos específicos, associada ao chipset da placa-mãe, não podemos simplesmente adicionar memória cache à placa-mãe, Mas podemos colocar processadores que tem cache.",
            characters: [
                { image: "../src/personagens/suzuha.png", slot: 3 },
                { image: "../src/personagens/mayuri.png", slot: 2 },
                { image: "../src/personagens/kurisu.png", slot: 1 }
            ] 
        },
    ],
    options: [
        { text: "Entendeu Mayuri?", next: "scene25" },
    ],
    backgroundImage: "../src/mapas/quarto.jpg"
},


scene13: {
    dialogues: [
        { 
            characterName: "Kurisu", 
            text: " Não é só isso não Okarin!",
            characters: [
                { image: "../src/personagens/kurisu.png", slot: 1 }
            ] 
        },
    ],
    options: [
        { text: "É sim, não?", next: "scene12" },
    ],
    backgroundImage: "../src/mapas/quarto.jpg"
},


scene12: {
    dialogues: [
        { 
            characterName: "Kurisu", 
            text: "Obvio que não. A memória cache, integrada diretamente no processador (CPU) ou em casos específicos, associada ao chipset da placa-mãe, não podemos simplesmente adicionar memória cache à placa-mãe, Mas podemos colocar processadores que tem cache.",
            characters: [
                { image: "../src/personagens/kurisu.png", slot: 1 }
            ] 
        },
    ],
    options: [
        { text: "Ah, isso é verdade...", next: "scene25" },
    ],
    backgroundImage: "../src/mapas/quarto.jpg"
},


scene25: {
    dialogues: [
        { 
            characterName: "Mayuri", 
            text: "A sim, Obrigada, não sei muito de computadores.",
            characters: [
                { image: "../src/personagens/kurisu.png", slot: 1 },
                { image: "../src/personagens/mayuri.png", slot: 2 }
            ] 
        },
        { 
            characterName: "Narrador", 
            text: "Vocês continuam a montar, e agora que as peças foram devidamente colocadas conseguem acessar as informações de onde estaria Rintarou que estão gravadas na BIOS.",
            characters: [
                { image: "../src/personagens/kurisu.png", slot: 1 },
                { image: "../src/personagens/mayuri.png", slot: 2 }
            ] 
        },
        { 
            characterName: "Kurisu", 
            text: "Ainda bem que ligou...",
            characters: [
                { image: "../src/personagens/kurisu.png", slot: 1 },
                { image: "../src/personagens/mayuri.png", slot: 2 }
            ] 
        },
    ],
    options: [
        { text: "Devemos focar agora", next: "end" },
    ],
    backgroundImage: "../src/mapas/quarto.jpg"
},





















































    end: {
        dialogues: [
            { 
                characterName: "Narrador", 
                text: "Fim da história. Obrigado por jogar!", 
                characters: []
            }
        ],
        options: [],
        backgroundImage: "imagens/cenarios/cenario_final.jpg"
    }
};



let currentScene = 'start';
let currentDialogueIndex = 0;



function loadScene(sceneKey) {
    const scene = story[sceneKey];

    currentScene = sceneKey;
    currentDialogueIndex = 0;

    const characterName = document.getElementById('character-name');
    const dialogue = document.getElementById('dialogue');
    const character = document.getElementById('character');
    const character2 = document.getElementById('character2');
    const character3 = document.getElementById('character3');
    const background = document.getElementById('background');
    const choices = document.getElementById('choices');
    const nextButton = document.getElementById('next-button');

    updateDialogue(scene.dialogues[currentDialogueIndex]);

    background.style.backgroundImage = `url(${scene.backgroundImage})`;

    nextButton.style.display = 'block';
    choices.style.display = 'none';
}

function nextDialogue() {
    const scene = story[currentScene];
    const characterName = document.getElementById('character-name');
    const dialogue = document.getElementById('dialogue');
    const character = document.getElementById('character');
    const character2 = document.getElementById('character2');
    const character3 = document.getElementById('character3');
    const nextButton = document.getElementById('next-button');
    const choices = document.getElementById('choices');

    currentDialogueIndex++;

    if (currentDialogueIndex < scene.dialogues.length) {
        updateDialogue(scene.dialogues[currentDialogueIndex]);
    } else {
        nextButton.style.display = 'none';
        if (scene.options.length > 0) {
            choices.style.display = 'block';
            choices.innerHTML = '';
            scene.options.forEach((option) => {
                const button = document.createElement('button');
                button.textContent = option.text;
                button.onclick = () => chooseOption(option.next);
                choices.appendChild(button);
            });
        }
    }


}

function updateDialogue(dialogueData) {
    const characterName = document.getElementById('character-name');
    const dialogue = document.getElementById('dialogue');
    const character = document.getElementById('character');
    const character2 = document.getElementById('character2');
    const character3 = document.getElementById('character3');

    characterName.textContent = dialogueData.characterName;
    dialogue.textContent = dialogueData.text;

    // Restar slots de personagens
    character.style.display = 'none';
    character2.style.display = 'none';
    character3.style.display = 'none';

    // Display de acordo com Slot
    dialogueData.characters.forEach(characterData => {
        if (characterData.slot === 1) {
            character.src = characterData.image;
            character.style.display = 'block';
            
        } else if (characterData.slot === 2) {
            character2.src = characterData.image;
            character2.style.display = 'block';
            
        }else if (characterData.slot === 3) {
            character3.src = characterData.image;
            character3.style.display = 'block';
            
        };

       // Cores dos nomes por personagem

    });

    if (characterName.textContent === 'Narrador') {
        characterName.style.color = 'gray';
    } else if (characterName.textContent === 'Kurisu') {
        characterName.style.color = 'red'
    } else if (characterName.textContent === 'Mayuri') {
        characterName.style.color = 'cyan'
    } else if (characterName.textContent === 'Você') {
        characterName.style.color = 'Green'
    } else if (characterName.textContent === 'Kurisu') {
        characterName.style.color = 'red'
    } else if (characterName.textContent == 'Narrador') {
        characterName.style.color = 'gray'
    } else if (characterName.textContent === 'Suzuha') {
        characterName.style.color = 'yellow'
    };

}





function chooseOption(nextSceneKey) {
    loadScene(nextSceneKey);
}


document.addEventListener('DOMContentLoaded', () => {
    loadScene(currentScene);
});
