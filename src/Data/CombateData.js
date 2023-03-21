const CombateData = [ 
    {
        Title: "INICIATIVA",
        Description: `A Iniciativa serve para definir a ordem que as coisas acontecem no combate. Quem vezes o combate pode começar de forma inesperada como uma emboscada para o grupo. Quando isso acontece, consideramos que os atacantes fazem suas ações primeiro. Mas quando a treta é olho no olho, todos os envolvidos fazem suas jogadas. Rola-se 1d6 + Agilidade, aquele que tiver o resultado mais alto é o primeiro a agir e segue assim vai por ordem descendente. O Juiz pode rolar iniciativa por um único NPC ou por um grupo deles para agilizar o processo. No caso de empate entre duas personagens, aquela que tiver mais Agilidade age primeiro e se o empate for com um NPC o Juiz sempre tem a vantagem.`,
    }, {
        Title: "TURNO",
        Description: "Em cada turno uma personagem pode agir de algumas formas, as principais delas são o ataque e o movimento, mas existem diversas outras coisasque a personagem pode fazer. Na ficção cada turno leva em média 10 segundos para acontecer. Dentro do seu turno, você escolhe realizar algumas ações, lembrando que cada personagem começa com uma ação em combate mais uma para cada ponto de Agilidade, e o número de ações a serem realizadas no seu turno é igual a esse valor total. Ou seja, se sua personagem tem 2 pontos em Agilidade, você pode fazer até 4 ações no seu turno."
    }, 
    {
        Title: "MOVIMENTO",
        Description: "Dentro do Combate, sua personagem pode escolher se mover para mais perto ou mais longe do inimigo, pode procurar cobertura, sair correndo em desespero ou usar o ambiente paraconseguir alguma vantagem tática. Para mover-se a uma distância de até 10 passos sua personagem usa uma das ações que tem. Avançar para mais longe, ou fugir, pode “consumir” o equivalente a duas ou mais ações de seu turno, dependendo da lonjura para onde quer se mover."
    },
    {
        Title: "ATIRAR",
        Description: "Cada disparo conta como uma ação no combate. Algumas habilidades podem dar mais disparos por ação, como aLet´s Dance, onde a personagem martela o cão para acertar dois tiros em uma única ação. Para acertar o tiro no oponente é preciso fazer uma rolagem de 1d6 somados aos pontos do Antecedente Disparo. Se o resultado for igual ou maior do que a defesa do oponente, o tiro acerta o alvo e é feita uma rolagem de dano. Atenção! Independente de quantos pontos tiver em seus Antecedentes, rolar o número 1 no dado sempre configura falha."
    },
    {
        Title: "RECARREGAR",
        Description: "Se suas balas acabarem voce precisa recarregar. Pense que para recarregar um revólver, por exemplo: várias coisas precisam acontecer: abrir o tambor, pegar as balas do cinto, colocar bala por bala no tambor, fechar o tambor e final-mente, recomeçar a atirar. O mesmo vale para as outras armas: rifles, escopetas, metralhadoras e por aí vai… "
    },
    {
        Title: "DANO",
        Description: "Quando um ataque acerta o alvo, o dano da arma é jogado por quem acertou o ataque. Portanto, se mais ataques acertarem o alvo, mais dados são jogados. A soma final dos dados é subtraída da Vida de quem tomou o ataque."
    },
    {
        Title: "MORTE",
        Description: "Quando a Vida de uma personagem chega a ZERO ela está morrendo. MAS CALMA! ELA AINDA NÃO ESTÁ NA TERRA DO PÉ JUNTO! Role seu último dado. Se o resultado for 1 ou 6 sua personagem retorna ao combate no turno seguinte com apenas 1 ponto de Vida para continuar lutando. Caso contrário ela dá seu último suspiro e proporciona uma nova vingança para seus companheiros de viagem. Faça outra ficha, crie outra personagem e siga no jogo."
    },
    {
        Title: "RECUPERANDO PONTOS DE VIDA",
        Description: "Nada melhor para curar corpo e alma do que uma visita ao mundo dos sonhos. Sempre que sua personagem descansar durante 6 horas ou mais, ela pode curar alguns pontos de vida dependendo de ondetirar sua pestana. Se for no meio do mato, apenas com seu saco de dormir, o descanso pode curar até 1d3 pontos de vida por noite. Caso o descanso seja numa cama macia e fofinha, sua personagem pode curar 1d6. Unguentos, pomadas e outros remédios adicionam outro mais pontos ou rolagens de dados na recuperação."
    },
]

export default CombateData;