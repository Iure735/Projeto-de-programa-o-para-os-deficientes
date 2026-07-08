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

    const texto = `
    Bem-vindo ao site da turma de Robótica do segundo ano B.

    Este projeto foi desenvolvido com o objetivo de apresentar os trabalhos realizados durante as aulas de robótica e tornar o conteúdo acessível para pessoas com deficiência visual.

    Na seção Projetos você encontrará os seguintes trabalhos:

    Projeto LED Fade-In.
    Aprendemos a controlar a intensidade de um LED utilizando PWM no Arduino.

    Projeto LED RGB.
    Exploramos a mistura das cores vermelho, verde e azul utilizando um LED RGB.

    Projeto Arco-Íris.
    Desenvolvemos um sistema capaz de reproduzir diversas cores através do LED RGB.

    Projeto Disco de Newton.
    Construímos um disco de Newton acionado por um motor DC para demonstrar a composição da luz branca.

    Projeto Semáforo de Carros.
    Simulamos o funcionamento de um semáforo utilizando LEDs e programação no Arduino.

    Projeto Sensor de Movimento e Presença.
    Utilizamos um sensor PIR para detectar movimentos e acionar um LED.

    Projeto Sensor de Gás e Fumaça.
    Desenvolvemos um sistema de alerta utilizando o sensor MQ-2 e um buzzer.

    Projeto Seguidor de Linha.
    Construímos um robô capaz de seguir uma linha utilizando sensores infravermelhos.

    Na seção Assistente Auditivo você pode ouvir todo o conteúdo do site utilizando síntese de voz.

    Esperamos que aproveite a visita. Obrigado por conhecer nosso projeto de Robótica do segundo ano B.
    `;

    speak(texto);
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
