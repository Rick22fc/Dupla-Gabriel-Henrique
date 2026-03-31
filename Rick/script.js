let Errada = [];
let Correta = [];

function habilitarBtIniciar() {
    const palavra = document.getElementById("segredo").value.trim();
    const btIniciar = document.getElementById("btInicia");

    btIniciar.disabled = palavra.length < 1;
}

function iniciarOJogo() {
    const palavra = document.getElementById("segredo").value.toLowerCase().trim();
    const painel = document.getElementById("painel");
    const erradas_ = document.getElementById("erradas_");
    const botao = document.getElementById("btVerifica");

    Errada = [];
    Correta = [];

    painel.textContent = "_ ".repeat(palavra.length).trim();
    erradas_.textContent = "";
    document.getElementById("tentativa").value = "";

    botao.disabled = false;
}

function verificarLetra() {
    const tentativaInput = document.getElementById("tentativa");
    const tentativa = tentativaInput.value.toLowerCase().trim();
    const painel = document.getElementById("painel");
    const erradas = document.getElementById("erradas_");
    const secreta = document.getElementById("segredo").value.toLowerCase().trim();

    if (!tentativa) return;

    if (Errada.includes(tentativa) || Correta.includes(tentativa)) {
        tentativaInput.value = "";
        return;
    }

    let painelArray = painel.textContent.split(" ");
    let acertou = false;

    for (let i = 0; i < secreta.length; i++) {
        if (secreta[i] === tentativa) {
            painelArray[i] = tentativa;
            acertou = true;
        }
    }

    painel.textContent = painelArray.join(" ");

    if (acertou) {
        Correta.push(tentativa);
    } else {
        Errada.push(tentativa);
        erradas.textContent = Errada.join(" ");
    }

    tentativaInput.value = "";
}

function resetarJogo() {
    const painel = document.getElementById("painel");
    const erradas_ = document.getElementById("erradas_");
    const btVerifica = document.getElementById("btVerifica");
    const btInicia = document.getElementById("btInicia");
    const segredo = document.getElementById("segredo");
    const tentativa = document.getElementById("tentativa");

    Errada = [];
    Correta = [];

    painel.textContent = "";
    erradas_.textContent = "";
    segredo.value = "";
    tentativa.value = "";

    btVerifica.disabled = true;
    btInicia.disabled = true;
}

document.getElementById("reset").addEventListener("click", resetarJogo);