// Speech Synthesis
let utterance = null;

function speak(text) {
    if ('speechSynthesis' in window) {
        if (utterance) speechSynthesis.cancel();
        
        utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'pt-BR';
        utterance.rate = 1.1;
        utterance.pitch = 1;
        speechSynthesis.speak(utterance);
    } else {
        alert("Seu navegador não suporta síntese de voz.");
    }
}

function readPageContent() {
    const mainContent = document.body.innerText;
    speak("Bem-vindo ao site de Robótica do 2º ano B. " + mainContent.substring(0, 1200));
}

function stopVoice() {
    if ('speechSynthesis' in window) {
        speechSynthesis.cancel();
    }
}

// Voice Assistant Button
document.getElementById('voice-btn').addEventListener('click', () => {
    const texts = [
        "Olá! Sou o Assistente Auditivo da turma de Robótica 2B.",
        "Você pode navegar usando as seções do menu.",
        "Clique em Ler Toda a Página para ouvir o conteúdo completo."
    ];
    
    let i = 0;
    const interval = setInterval(() => {
        if (i < texts.length) {
            speak(texts[i]);
            i++;
        } else {
            clearInterval(interval);
        }
    }, 1500);
});

function startVoiceAssistant() {
    speak("Olá! Como posso ajudar você hoje? Experimente clicar em Ler Toda a Página.");
}

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href') !== '#') {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Tecla de atalho (Ctrl + Alt + V)
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.altKey && e.key === 'v') {
        document.getElementById('voice-btn').click();
    }
});

// Animação ao carregar
window.addEventListener('load', () => {
    console.log('%cSite de Robótica 2B carregado com sucesso! 🚀', 'color: #67e8f9; font-size: 14px;');
});
