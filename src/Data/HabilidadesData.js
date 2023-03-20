const HabilidadesData = [
    {
        title: "Light My Fire",
        description: "Eles são a doença e você é a cura.Se você não fosse tão rápido e mortal no gatilho, já estaria na terra do pé-junto.Sempre que atirar com seu revólver você recebe +1 para fazer o teste. Você também adiciona +1 no dano para cada ponto de Agilidade que tiver.",
    },
    {
        title: "DON´T STOP BELIEVING",
        description: "Ao atirar com armas de longa distância, como espingardas ou arcos longos, adicione +1 no teste para acertar o inimigo. Além disso, some +1 no dano para cada ponto de Inteligência.",
    },
    {
        title: "LET´S DANCE",
        description: "Martelar o cão é puxar o gatilho e bater na parte da arma que empurra a bala para fora do tambor. Isso era feito para atirar com mais velocidade e menos precisão. É possível fazer dois disparos com uma única ação, mas com penalidade de -1 para seu teste no Antecedente Combate.",
    },
    {
        title: "IMMIGRANT SONG",
        description: "Seja por força ou técnica. Na graça ou na brutalidade. Esta habilidade lhe dá capacidade de machucar ainda mais seus oponentes com ataques desarmados. Em vez de 1d3, o dano passaa ser 1d6, além de somar +1 para cada ponto no Atributo Físico.",
    },
    {
        title: "FORTUNATE SON",
        description: "Se a morte abraçar sua personagem eela cair a ZERO Pontos de Vida naquela sessão, esta habilidade faz com que ela recupere 3 Pontos de Vida, e se levante no turno seguinte para continuar sua jornada pela Terra. Porém, se ela tornara cair no mesmo combate, a morte não vai deixá-la escapar novamente.",
    },
    {
        title: "GIMME SHELTER",
        description: "Sempre que fizer um ataque surpresa usando facas ou navalhas, seu ataque causa +1d6 de dano a cada 3 níveis. Sendo assim, ficaria 2d6 no nível 4, 3d6 no nível 7 e assim por diante.",
    },
    {
        title: "ANOTHER ONEBITES THE DUST",
        description: "A personagem pode escolher uma das manobras abaixo para usar no combate. Repare que são “estilos de luta” então servem para apenas para golpes que não envolvam armas. Você pode pegar esta habilidade mais de uma vez para conseguir todas as manobras e se tornar uma máquina de enar a porrada.",
    },
    {
        title: "RIDERS ON THE STORM",
        description: "Sacrifique a própria segurança para cortar o mal pela raíz. Aumente o dano do ataque corpo a corpo em +1d6 por nível a cada 3 Pontos de Vida sacrificados. Sua personagem abre a guarda enquanto ataca um oponente com mais força. Essa habilidade pode ser usada apenas uma vez por combate.",
    },
    {
        title: "BORN TO BE WILD",
        description: "A personagem sabe aproveitar luzes e sombras para se camuflar e caminhar furtivamente, ao mesmo tempo quetem atenção redobrada para notar oque não deveria estar ali. Sempre que fizer teste de algum Antecedente quee nvolva ser furtivo ou perceber alguma coisa, some +1 no teste.",
    },
    {
        title: "SMOKE ON THE WATER",
        description: "Você é especialista em armas rústicas e mortais. Estamos falando de facas depedra, lanças, machadinhas, porretes ou até algo de metal mais rudimentar. Sempre que fizer um ataque com estetipo de arma, você recebe +1 nos testes para acertar, além de +1 no dano paracada ponto no Atributo Físico.",
    },
    {
        title: "UNDER PRESSURE",
        description: "Viver na natureza tornou seu corpo resistente a venenos e outras substâncias nocivas, além de torná-lo forte contra doenças, climas extremos, fome ou sede. Sempre que precisar fazer um Teste de Resistência a qualquer fator adverso some +1 por nível (máximo 5) na sua rolagem.",
    },
    {
        title: "HEARTBREAKER",
        description: "Sua personagem pode se apresentar inocente, sedutora, simpática ou até intimidadora ao oponente. Uma vez por sessão, escolha um alvo por nívele este terá -1 para realizar qualquer ação ofensiva contra sua personagem. Você também pode escolher outro membro do grupo para receber esta vantagem no seu lugar.",
    },
    {
        title: "CRAZY TRAIN",
        description: "Se tiver as peças, sua personagem pode criar pequenas engenhocas e mecanismos, inclusive. Uma vez por nível sua personagem pode aumentar o dano de uma arma de fogo em até +1d6 porsessão de jogo. Infelizmente, a arma aguenta ser usada em apenas um combate, depois se quebra e fica inutilizável.",
    },
    {
        title: "BARRACUDA",
        description: "Muitas vezes obter informações sobre seus inimigos pode te dar vantagens na hora de resolver conflitos. Você tem mais contatos, e sabe como conseguir respostas sem levantar suspeitas. Você tem +1 por nível (máximo 5) nos testes de Antecedente para descobrir coisas sobre algo, alguém ou algum lugar.",
    },
    {
        title: "CARRY ON MY WAYWARD SON",
        description: "Às vezes a sorte abre aquele sorrisão para os fodidos. Uma vez por nível, você pode refazer algum teste que deu ruim. Você também pode optar por gastar essa habilidade com outra pessoa, dando a ela uma chance de refazer seu teste. É hora de agarrar a sorte e não deixar de ser cowboy por ela.",
    },
    {
        title: "SWEET EMOTION",
        description: "Você sabe inspirar seus aliados em momentos difíceis. Confira quais bônus você pode dar a eles conforme avança de nível (considerando os anteriores) e quantas vezes esta habilidade pode ser usada por sessão.",
    },
    {
        title: "WAR PIGS",
        description: "Você gosta de ver chama voar e fogo no céu. Sempre que utilizar TNT, dinamite, nitroglicerina ou qualquer explosivo, seu personagem ganha +1 no teste de Antecedente para fazer BOOOOM!",
    },
    {
        title: "ACE OF SPADES",
        description: "Você tem a sagacidade aguçada para um carteado do bom. Sempre quiser trapacear ou perceber alguém roubando no jogo de cartas receba +1 em testes do Antecedente Roubo.",
    },
    {
        title: "A HORSE WITH NO NAME",
        description: "Você e sua montaria estão sempre em sincronia, todos os testes que a envolvam tem bônus de +1.",
    },
    {
        title: "I WANT TO HOLD YOUR HAND",
        description: "Sua personagem tem vasta experiência pararemendar pessoas, fechar feridas, fazerpontos, remover balas Sempre que ajudar alguém a se curar, ou curar a si mesma, adicione 1d6 PVs por nível durante seus tratamentos.",
    },
    {
        title: "PARANOID",
        description: "Olhando ao redor, sua personagem é desconfiada e atenta, ela pressente o perigo e se adianta. Esta habilidade garante +1 nos seus resultados de Iniciativa. Sua personagem nunca é pega desprevenida.",
    },
    {
        title: "RAMBLE ON",
        description: "Não é questão de covardia, mas de sobrevivência. Por que ficar e morrer se é possível dar no pé e ver o sol nascer outra vez? Você gasta uma única ação para se mover duas vezes, e também tem bônus de +1 em testes de Antecedente para situações de fuga.",
    },
    {
        title: "AQUALUNG",
        description: "A natureza é familiar a você, assim como seus desafios e perigos. Você sabe nadar muito bem, escalar e subir em árvores com muita facilidade. Sempre que fizer testes que envolvam habilidades atléticas, como natação, escalar, subir, saltar e coisas do tipo, você tem bônus de +1 para o resultado do dado.",
    },
    {
        title: "MORE THAN A FEELING",
        description: "Com sua dedução apurada, você pode descobrir coisas que pessoas comuns jamais encontrariam. Faça um teste no Antecedente Negócios e se passar pode fazer duas perguntas à Juíza para descobrir se alguém está escondendo alguma informação importante. Essa habilidade pode ser usada só uma vez por sessão.",
    },
]

export default HabilidadesData;