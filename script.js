// Aguarda o DOM carregar completamente para evitar erros de execução
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Funcionalidade de Modo Escuro (Acessibilidade)
    const btnDarkMode = document.getElementById("toggle-dark-mode");
    
    btnDarkMode.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        
        // Altera o texto do botão dinamicamente para melhorar a UX
        if (document.body.classList.contains("dark-mode")) {
            btnDarkMode.textContent = "☀️ Modo Claro";
        } else {
            btnDarkMode.textContent = "🌓 Modo Escuro";
        }
    });

    // 2. Validação Dinâmica do Quiz e Manipulação do DOM
    const quizForm = document.getElementById("quiz-form");
    const containerResultado = document.getElementById("resultado-quiz");

    quizForm.addEventListener("submit", (event) => {
        // Impede que a página recarregue ao submeter o formulário
        event.preventDefault();

        // Captura os valores selecionados pelo usuário
        const r1 = document.getElementById("pergunta1").value;
        const r2 = document.querySelector('input[name="pergunta2"]:checked').value;

        // Processamento das respostas usando variáveis
        let acertos = 0;

        if (r1 === "correto") acertos++;
        if (r2 === "correto") acertos++;

        // Exibe e customiza o container de resultado dinamicamente
        containerResultado.classList.remove("hidden", "sucesso", "atencao");

        if (acertos === 2) {
            containerResultado.textContent = `🎉 Excelente! Você acertou ${acertos} de 2 perguntas. Você está pronto para combater a desinformação!`;
            containerResultado.classList.add("sucesso");
        } else {
            containerResultado.textContent = `⚠️ Atenção! Você acertou ${acertos} de 2 perguntas. Fique mais atento aos detalhes das mídias compartilhadas!`;
            containerResultado.classList.add("atencao");
        }
    });
});
