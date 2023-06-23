//  função para colocar numero na tela onde ja esta concatenado 

function inserir(num) {
    document.querySelector('.tela').innerHTML += num;
}

// função que limpa os numero colocados de uma vez 
function clean() {
    document.querySelector('.tela').innerHTML = "";
}
// limpar numero por numero 

function back() {
    let tela = document.querySelector('.tela').innerHTML;
    document.querySelector('.tela').innerHTML = tela.substring(0, tela.length - 1);

}

// função que faz os resultados  
function somar() {
    let tela = document.querySelector('.tela').innerHTML;
    let resultado = eval(tela);
    if (resultado) {
        document.querySelector('.tela').innerHTML = parseFloat(resultado.toFixed(4));
    } else {
        document.querySelector('.tela').innerHTML = "Nenhum comando.";
    }
}