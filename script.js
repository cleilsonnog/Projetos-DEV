// PARTE 1: Lista de perguntas e respostas
perguntas = [
    {
      pergunta: "Quantos livro tem na Biblia ?", //pergunta 1
      respostas: [
        { opcao: "66 livros", correto: true },
        { opcao: "39 livros", correto: false },
        { opcao: "77 livros", correto: false }
      ]
    },
    {
      pergunta: "Em qual evangelho esta escrito ' No principio era verbo e o verbo se tornou carne...' ?", // pergunta 2.....
      respostas:[
        {opcao: "João", correto: true},
        {opcao: "Romanos", correto: false},
        {opcao: "Mateus", correto: false}
      ]
    },
    {
      pergunta: "Quem foi escolhido por Deus para liberta o seu povo do Egito ?", //pergunta 3....
      respostas:[
        {opcao: "Paulo", correto: false},
        {opcao: "Davi", correto: false},
        {opcao: "Moises", correto: true}
        ]
    },
    {
      pergunta: "Por meio de quem nós chegamos a Deus nosso Pai ?", //pergunta 4....
      respostas:[
        {opcao: "Elias", correto: false},
        {opcao: "Jesus Cristo", correto: true},
        {opcao: "Marcos", correto: false}
        ]
    },
  ];
  
  // PARTE 2: Pegando os elementos do HTML
  const perguntaElemento = document.querySelector(".pergunta");
  const respostasElemento = document.querySelector(".respostas");
  const progressoElemento = document.querySelector(".progresso");
  const textoFinal = document.querySelector(".fim span");
  const conteudo = document.querySelector(".conteudo");
  const conteudoFinal = document.querySelector(".fim");
  
  // PARTE 3: Variáveis para controle do jogo
  let indiceAtual = 0; // Índice da pergunta atual
  let acertos = 0; // Contador de acertos
  let mensagemAdicional = ""; // eu inseri
  
  // PARTE 4: Função para carregar uma nova pergunta
  function carregarPergunta() {
    progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
    const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
    perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta
  
    respostasElemento.innerHTML = ""; // Limpa as respostas anteriores
  
    // Percorre todas as respostas da pergunta atual
    for (let i = 0; i < perguntaAtual.respostas.length; i++) {
      // Pega a resposta atual com base no índice 'i'
      const resposta = perguntaAtual.respostas[i];
      // Cria um novo elemento 'button' (botão)
      const botao = document.createElement("button");
      // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
      botao.classList.add("botao-resposta");
      // Define o texto do botão com a opção de resposta (resposta.opcao)
      botao.innerText = resposta.opcao;
      // Adiciona um evento de clique no botão
      botao.onclick = function () {
        // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
        if (resposta.correto) {
          acertos = acertos + 1;
          acertos++; // Incrementa o contador de acertos
        }
  
        // Avança para a próxima pergunta
        indiceAtual++;
        
        // Aviso de nivel de conhecimento
        if(acertos > 6){
            mensagemAdicional = "Parabéns seu conhecimento biblico é otimo, continue assim." // presico resolver e colocar ess mensagem na caixa, tela final
          } else {
              mensagemAdicional = "Sua nota foi baixa, que tal lermos mais a Bíblia."
            };
          
        // Se ainda houver perguntas, carrega a próxima pergunta
        if (indiceAtual < perguntas.length) {
          carregarPergunta(); // Carrega a próxima pergunta
        } else {
          // Se não houver mais perguntas, finaliza o jogo
          finalizarJogo();
        }

        
      };
  
      // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
      respostasElemento.appendChild(botao);
    }
  }
  
    
  // PARTE 5: Função para mostrar a tela final
  function finalizarJogo() {
    textoFinal.innerHTML = `Seu conhecimento lhe deu um total de ${acertos} pontos, de ${perguntas.length} perguntas. ${mensagemAdicional}`; // Exibe o resultado
    conteudo.style.display = "none"; // Esconde as perguntas
    conteudoFinal.style.display = "flex"; // Mostra a tela final
  }
  
  // PARTE 6: Iniciando o jogo pela primeira vez
  carregarPergunta();
  