const quizData = [
  {
    question: "Qual lei brasileira garante os direitos das pessoas com deficiência?",
    options: [
      "Lei Maria da Penha",
      "Estatuto da Criança e do Adolescente",
      "Lei Brasileira de Inclusão (LBI)",
      "Código de Defesa do Consumidor"
    ],
    correct: 2
  },
  {
    question: "O símbolo internacional de acessibilidade representa:",
    options: [
      "Somente pessoas cadeirantes",
      "Todas as pessoas com deficiência",
      "Somente idosos",
      "Profissionais da saúde"
    ],
    correct: 1
  },
  {
    question: "Qual tecnologia auxilia pessoas com deficiência visual a acessarem computadores?",
    options: [
      "Leitores de tela",
      "Mouse óptico",
      "Scanner comum",
      "Projetor"
    ],
    correct: 0
  },
  {
    question: "O que significa PCD?",
    options: [
      "Pessoa com deficiência",
      "Programa de capacitação digital",
      "Projeto de inclusão comunitária",
      "Pessoa com direitos"
    ],
    correct: 0
  },
  {
    question: "Qual habilidade é essencial para quem quer trabalhar com programação?",
    options: [
      "Resolução de problemas",
      "Dança",
      "Culinária",
      "Fotografia"
    ],
    correct: 0
  },
  {
    question: "O que a acessibilidade digital busca promover?",
    options: [
      "Inclusão de todas as pessoas na internet e tecnologia",
      "Acesso exclusivo para profissionais",
      "Privacidade total dos dados",
      "Cursos de design gráfico"
    ],
    correct: 0
  },
  {
    question: "Qual ferramenta facilita a comunicação de pessoas com dificuldade de fala?",
    options: [
      "Softwares de comunicação alternativa",
      "Impressoras 3D",
      "Planilhas eletrônicas",
      "Redes sociais"
    ],
    correct: 0
  },
  {
    question: "Qual programa qualifica e inclui PCDs no desenvolvimento e na programação?",
    options: [
      "Aceleradora Inclusiva",
      "Aceleradora Excluída",
      "Aceleradora Incapacita",
      "Aceleradora Individualista"
    ],
    correct: 0
  },
  {
    question: "Qual recurso ajuda pessoas com deficiência auditiva a acompanhar vídeos?",
    options: [
      "Legendas e transcrição de áudio",
      "Tela sensível ao toque",
      "Scanner de documentos",
      "Mouse óptico"
    ],
    correct: 0
  },
  {
    question: "Por que a inclusão de PCDs no mercado de trabalho é importante?",
    options: [
      "Promove diversidade, oportunidades e igualdade de direitos",
      "Reduz custos para empresas",
      "Aumenta apenas a produtividade sem diversidade",
      "Não tem impacto significativo"
    ],
    correct: 0
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  q.options.forEach((option, index) => {
    const label = document.createElement("label");
    label.innerHTML = `
      <input type="radio" name="option" value="${index}">
      ${option}
    `;
    optionsEl.appendChild(label);
  });
}

nextBtn.addEventListener("click", () => {
  const selected = document.querySelector("input[name='option']:checked");
  if (!selected) return alert("Por favor, selecione uma resposta!");

  if (parseInt(selected.value) === quizData[currentQuestion].correct) {
    score++;
  }

  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    questionEl.textContent = "Quiz Finalizado!";
    optionsEl.innerHTML = "";
    nextBtn.style.display = "none";
    scoreEl.textContent = `Você acertou ${score} de ${quizData.length} perguntas.`;
  }
});

loadQuestion();