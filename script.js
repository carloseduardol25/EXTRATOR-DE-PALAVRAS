
const botaoMostrapalavras = document.querySelector("#botao-palavrachave");

botaomostrapalavras.addEventListener("click", mostraPalavrasChave);

function mostraPalavrasChave() {
    const texto = document.querySelector("#entrada-de-texto").value;

     const campoResultado = document.querySelector("#resultado-palavrachave");

     const palavras = texto.split(" ");

     campoResultado.textcontent = palavras;
}



