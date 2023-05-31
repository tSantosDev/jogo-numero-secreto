const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1);
}

const elementoMenorValor = document.querySelector('#numero__menor');
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.querySelector('#numero__maior');
elementoMaiorValor.innerHTML = maiorValor;