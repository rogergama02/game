// Função que exibe o X vermelho quando a resposta estiver errada
function wrongAnswer() {
    const wrongAnswerEl = document.getElementById('wrongAnswer');
    wrongAnswerEl.style.display = 'block';

    // Esconde o X após 1,5 segundos
    setTimeout(() => {
        wrongAnswerEl.style.display = 'none';
    }, 1500);
}

// Função que redireciona para outra página quando a resposta correta for clicada
function correctAnswer(nextQuestionUrl) {
    window.location.href = nextQuestionUrl; // Redireciona para a próxima pergunta
}
