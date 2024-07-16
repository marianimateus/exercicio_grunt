function getRandomInt(min, max) {
    // Gera um número inteiro aleatório entre min (inclusivo) e max (exclusivo)
    return Math.floor(Math.random() * (max - min)) + min;
}

function multiply(a, b) {
    return a * b;
}

// Gera dois números inteiros aleatórios entre 0 e 10
let num1 = getRandomInt(0, 10);
let num2 = getRandomInt(0, 10);

let resultado = multiply(num1, num2);

// Mostra os números aleatórios e o resultado no terminal
console.log(`${num1} e ${num2}`);
console.log(resultado); 