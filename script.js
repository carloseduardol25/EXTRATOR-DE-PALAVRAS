const botaoMostrapalavras = document.querySelector("#botao-palavrachave");

botaomostrapalavras.addEventListener("click", mostraPalavrasChave);

function mostraPalavrasChave() {
    const texto = document.querySelector("#entrada-de-texto").value;
     const campoResultado = document.querySelector("#resultado-palavrachave");
    const palavraschave= processaTexto(texto);
     
    campoResultado.textcontent = palavras.join(",");
}

function processaTexto(texto) {
    let palvras = texto.split(/\P{L}+/u);
    
    let frequencias = {};
    for (let i of palavras) {
        frequencias{1} =0; 
        for(let j of paavras) {
            if(i==j) {
                frequencia[i]++; 
            }
        }
        
    return palavras;
}


