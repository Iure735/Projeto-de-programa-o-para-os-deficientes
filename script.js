// ===============================
// Síntese de Voz
// ===============================
// ===============================
// LEITURA AUTOMÁTICA
// ===============================

let tempoLeitura;
let leituraAtiva = true;

// Lê um texto
function lerTexto(texto){

    if(!leituraAtiva) return;

    speechSynthesis.cancel();

    const fala = new SpeechSynthesisUtterance(texto);

    fala.lang = "pt-BR";
    fala.rate = 1;
    fala.pitch = 1;
    fala.volume = 1;

    speechSynthesis.speak(fala);

}

// Botão Parar Leitura
function stopVoice(){

    leituraAtiva = false;

    speechSynthesis.cancel();

}

// Caso queira ativar novamente futuramente
function startVoice(){

    leituraAtiva = true;

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

window.addEventListener('load', () => {
    console.log('%cSite de Robótica 2B carregado com sucesso! 🚀', 'color: #67e8f9; font-size: 14px;');
});



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



// ==============================
// LEITURA AUTOMÁTICA DOS CARDS
// ==============================

document.querySelectorAll(".project-card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        clearTimeout(tempoLeitura);

        tempoLeitura=setTimeout(()=>{

            lerTexto(card.innerText);

        },500);

    });

});


// ==============================
// LEITURA DOS DEMAIS TEXTOS
// ==============================

document.querySelectorAll(
".feature,.about-text,.stat,h1,h2,h3,p,li"
)
.forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        if(item.closest(".project-card")) return;

        clearTimeout(tempoLeitura);

        tempoLeitura=setTimeout(()=>{

            lerTexto(item.innerText);

        },500);

    });

});
