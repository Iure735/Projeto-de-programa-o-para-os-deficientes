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
".feature,.about-text,.stat,h1,h2,h3,p,li,.btn,.copy-btn"
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

function copiarCodigo() {

    const bloco = document.getElementById("codigoProjeto");

    if (!bloco) {
        alert("Código não encontrado.");
        return;
    }

    const codigo = bloco.innerText;

    const areaTexto = document.createElement("textarea");

    areaTexto.value = codigo;

    areaTexto.style.position = "fixed";
    areaTexto.style.left = "-9999px";
    areaTexto.style.top = "0";

    document.body.appendChild(areaTexto);

    areaTexto.focus();
    areaTexto.select();

    try {

        document.execCommand("copy");

        const botao = document.querySelector(".copy-btn");

        if (botao) {

            botao.innerHTML =
                '<i class="fas fa-check"></i> Código Copiado!';

            setTimeout(() => {

                botao.innerHTML =
                    '<i class="fas fa-copy"></i> Copiar Código';

            }, 2000);
        }

    } catch (erro) {

        alert("Não foi possível copiar o código.");

    }

    document.body.removeChild(areaTexto);
}
