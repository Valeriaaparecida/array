
//ESSE CÓDIGO UTILIZA O FOR CLÁSSICO PARA CALCULAR MÉDIA 

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

//primeira expressão: executada apenas uma vez
//segunda expressão: condição de execução
//terceira expressão: executada sempre ao final do bloco

for(let i = 0; i < notas.length; i++){
    somaDasNotas += notas [i];
}

const media = somaDasNotas / notas.length;
console.log(`a média das notas é ${media}`);




// ESSE CÓDICO UTILIZA O MÉTODO FOR OF PARA CALCULAR MÉDIA 

/*const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for(let nota of notas){
    somaDasNotas += nota;
}

const media = somaDasNotas / notas.length;
console.log(`a média das motas é ${media}`);*/
