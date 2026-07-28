// ===============================
// Síntese de Voz
// ===============================
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
    const textos = [
`Bem-vindo ao site da turma de Robótica do segundo ano B.

Este projeto foi desenvolvido para apresentar os trabalhos realizados durante as aulas de Robótica e tornar o conteúdo acessível para pessoas com deficiência visual.`,

`Projeto LED Fade-In.

Aprendemos a controlar a intensidade de um LED utilizando PWM no Arduino.

Projeto LED RGB.

Exploramos a mistura das cores vermelho, verde e azul utilizando um LED RGB.

Projeto Arco-Íris.

Desenvolvemos um sistema capaz de reproduzir diversas cores através do LED RGB.`,

`Projeto Disco de Newton.

Construímos um disco de Newton acionado por um motor DC para demonstrar a composição da luz branca.

Projeto Semáforo de Carros.

Simulamos o funcionamento de um semáforo utilizando LEDs e programação no Arduino.`,

`Projeto Sensor de Movimento e Presença.

Utilizamos um sensor PIR para detectar movimentos e acionar um LED.

Projeto Sensor de Gás e Fumaça.

Desenvolvemos um sistema de alerta utilizando o sensor MQ-2 e um buzzer.`,

`Projeto Seguidor de Linha.

Construímos um robô capaz de seguir uma linha utilizando sensores infravermelhos.

Na seção Assistente Auditivo você pode ouvir todo o conteúdo do site utilizando síntese de voz.

Esperamos que aproveite a visita.

Obrigado por conhecer o projeto da turma de Robótica do segundo ano B.`
    ];

    speechSynthesis.cancel();

    textos.forEach((texto) => {
        const fala = new SpeechSynthesisUtterance(texto);
        fala.lang = "pt-BR";
        fala.rate = 1;
        fala.pitch = 1;
        fala.volume = 1;
        speechSynthesis.speak(fala);
    });
}

function stopVoice() {
    if ('speechSynthesis' in window) {
        speechSynthesis.cancel();
    }
}

// ===============================
// Assistente de voz (botão do fone)
// ===============================
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

// ===============================
// Scroll suave
// ===============================
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

// ===============================
// Atalho de teclado (Ctrl + Alt + V)
// ===============================
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.altKey && e.key === 'v') {
        document.getElementById('voice-btn').click();
    }
});

// ===============================
// Animação ao carregar
// ===============================
window.addEventListener('load', () => {
    console.log('%cSite de Robótica 2B carregado com sucesso! 🚀', 'color: #67e8f9; font-size: 14px;');
});

// ===============================
// Abrir código em nova janela
// ===============================
function abrirCodigo(titulo, codigo) {
    const janela = window.open('', '_blank', 'width=750,height=550,scrollbars=yes,resizable=yes');
    
    janela.document.write(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <title>${titulo} - Código Arduino</title>
            <style>
                * { margin: 0; padding: 0; box-sizing: border-box; }
                body {
                    font-family: Consolas, Monaco, 'Courier New', monospace;
                    background: #0f172a;
                    color: #e2e8f0;
                    padding: 25px;
                }
                h2 {
                    color: #67e8f9;
                    margin-bottom: 15px;
                    font-family: 'Segoe UI', sans-serif;
                }
                pre {
                    background: #1e2937;
                    padding: 20px;
                    border-radius: 12px;
                    border: 1px solid #334155;
                    overflow-x: auto;
                    white-space: pre-wrap;
                    line-height: 1.6;
                    font-size: 14px;
                }
            </style>
        </head>
        <body>
            <h2>${titulo}</h2>
            <pre>${codigo}</pre>
        </body>
        </html>
    `);
    janela.document.close();
}

// ===============================
// Códigos dos projetos
// ===============================

const codigoLedFadeIn = `// LED Fade-In
// Controla a intensidade do LED com PWM

void setup() {
  pinMode(9, OUTPUT); // Pino PWM do LED
}

void loop() {
  // Acende gradualmente
  for (int i = 0; i <= 255; i++) {
    analogWrite(9, i);
    delay(10);
  }

  // Apaga gradualmente
  for (int i = 255; i >= 0; i--) {
    analogWrite(9, i);
    delay(10);
  }
}`;

const codigoLedRgb = `// LED RGB
// Controle das cores vermelho, verde e azul

int vermelho = 9;
int verde = 10;
int azul = 11;

void setup() {
  pinMode(vermelho, OUTPUT);
  pinMode(verde, OUTPUT);
  pinMode(azul, OUTPUT);
}

void loop() {
  // Vermelho
  analogWrite(vermelho, 255);
  analogWrite(verde, 0);
  analogWrite(azul, 0);
  delay(1000);

  // Verde
  analogWrite(vermelho, 0);
  analogWrite(verde, 255);
  analogWrite(azul, 0);
  delay(1000);

  // Azul
  analogWrite(vermelho, 0);
  analogWrite(verde, 0);
  analogWrite(azul, 255);
  delay(1000);
}`;

const codigoArcoIris = `// Arco-íris
// Sequência de cores do arco-íris com LED RGB

int vermelho = 9;
int verde = 10;
int azul = 11;

void setup() {
  pinMode(vermelho, OUTPUT);
  pinMode(verde, OUTPUT);
  pinMode(azul, OUTPUT);
}

void setCor(int r, int g, int b) {
  analogWrite(vermelho, r);
  analogWrite(verde, g);
  analogWrite(azul, b);
}

void loop() {
  setCor(255, 0, 0);     // Vermelho
  delay(500);
  setCor(255, 127, 0);   // Laranja
  delay(500);
  setCor(255, 255, 0);   // Amarelo
  delay(500);
  setCor(0, 255, 0);     // Verde
  delay(500);
  setCor(0, 0, 255);     // Azul
  delay(500);
  setCor(75, 0, 130);    // Índigo
  delay(500);
  setCor(148, 0, 211);   // Violeta
  delay(500);
}`;

const codigoDiscoNewton = `// Disco de Newton
// Motor DC gira o disco com as cores do arco-íris

int motorPin = 9; // Pino PWM ligado ao driver L298N

void setup() {
  pinMode(motorPin, OUTPUT);
}

void loop() {
  // Gira o motor em velocidade média
  analogWrite(motorPin, 180);
  delay(5000);

  // Para o motor
  analogWrite(motorPin, 0);
  delay(2000);
}`;

const codigoSemaforo = `// Semáforo de carros
// Dois semáforos com LEDs

// Semáforo 1
int verde1 = 2;
int amarelo1 = 3;
int
