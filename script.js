document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Controle do Modo Escuro por Acessibilidade
    const btnDarkMode = document.getElementById("toggle-dark-mode");
    if (btnDarkMode) {
        btnDarkMode.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
        });
    }

    // 2. Lógica do Jogo de Investigação Dinâmica
    const quizForm = document.getElementById("quiz-form");
    const containerResultado = document.getElementById("resultado-quiz");

    if (quizForm && containerResultado) {
        quizForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Impede recarregamento da página

            // Captura das respostas selecionadas no DOM
            const c1 = document.querySelector('input[name="caso1"]:checked').value;
            const c2 = document.querySelector('input[name="caso2"]:checked').value;
            const c3 = document.querySelector('input[name="caso3"]:checked').value;

            // Processamento aritmético simples dos acertos
            let pontuacao = 0;
            if (c1 === "correto") pontuacao++;
            if (c2 === "correto") pontuacao++;
            if (c3 === "correto") pontuacao++;

            // Modificação estrutural e visual do container de feedback
            containerResultado.classList.remove("hidden", "sucesso", "atencao");

            if (pontuacao === 3) {
                containerResultado.innerHTML = `🏆 <strong>Rank: Detetive Lendário!</strong><br>Você acertou ${pontuacao} de 3 casos. Seu senso crítico está afiado contra mentiras e IA mal-intencionadas!`;
                containerResultado.classList.add("sucesso");
            } else if (pontuacao === 2) {
                containerResultado.innerHTML = `🕵️‍♂️ <strong>Rank: Investigador Atento!</strong><br>Você acertou ${pontuacao} de 3 casos. Bom trabalho, mas um detalhe automatizado quase te pegou!`;
                containerResultado.classList.add("sucesso");
            } else {
                containerResultado.innerHTML = `🚨 <strong>Rank: Alvo Fácil da Desinformação!</strong><br>Você acertou apenas ${pontuacao} de 3 casos. Releia os sinais de alertas e proteja-se mais na internet!`;
                containerResultado.classList.add("atencao");
            }
            
            // Rola a tela suavemente até o resultado do jogo
            containerResultado.scrollIntoView({ behavior: 'smooth' });
        });
    }
});
