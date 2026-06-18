document.addEventListener("DOMContentLoaded", () => {
    
    // Alternador de modo escuro
    const btnDarkMode = document.getElementById("toggle-dark-mode");
    if (btnDarkMode) {
        btnDarkMode.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
        });
    }

    // Controle do Formulário/Quiz
    const quizForm = document.getElementById("quiz-form");
    const containerResultado = document.getElementById("resultado-quiz");

    if (quizForm && containerResultado) {
        quizForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const r1 = document.getElementById("pergunta1").value;
            const r2Checked = document.querySelector('input[name="pergunta2"]:checked');
            
            if (!r2Checked) return;
            const r2 = r2Checked.value;

            let acertos = 0;
            if (r1 === "correto") acertos++;
            if (r2 === "correto") acertos++;

            containerResultado.classList.remove("hidden", "sucesso", "atencao");

            if (acertos === 2) {
                containerResultado.textContent = `🎉 Perfeito! Você acertou todas (${acertos}/2).`;
                containerResultado.classList.add("sucesso");
            } else {
                containerResultado.textContent = `⚠️ Você acertou ${acertos} de 2. Revise os conceitos de segurança!`;
                containerResultado.classList.add("atencao");
            }
        });
    }
});
