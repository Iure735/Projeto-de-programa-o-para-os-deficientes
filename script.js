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
document.querySelectorAll(
".feature,.about-text,.stat,h1,h2,h3,p,li,.btn"
)
.forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        if(item.closest(".project-card")) return;

        speechSynthesis.cancel();

        clearTimeout(tempoLeitura);

        tempoLeitura=setTimeout(()=>{

           const texto = item.getAttribute("aria-label") || item.innerText;
lerTexto(texto);

        },500);

    });

});

window.addEventListener('load', () => {
    console.log('%cSite de Robótica 2B carregado com sucesso! 🚀', 'color: #67e8f9; font-size: 14px;');
});




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
