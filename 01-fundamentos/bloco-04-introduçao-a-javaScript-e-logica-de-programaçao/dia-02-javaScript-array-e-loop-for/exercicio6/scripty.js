let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1- Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

for (let i of numbers) {
    console.log('Exercicio 1:' + i)
}

//2- Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let soma = 0;

for (let i of numbers) {
    soma = soma + i
}

console.log('Exercicio 2:' + soma);


//3- Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let media = soma / numbers.length

console.log('exercicio 3:' + media);

//4-Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
if (media > 20) {
    console.log('Exercicio 4: valor maior que 20')
} else {
    console.log('Exercicio 4: valor menor ou igual a 20')
}

//5- 🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let maior = 0;
for (let index = 0; index < numbers.length; index += 1) {
    if (maior < numbers[index]) {
        maior = numbers[index]
    }
}

console.log('Exercicio 5: ' + maior);

//6- Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let impares = [];
let pares = [];

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 !== 0) {
        impares.push(numbers[i])
    }
}

if (impares.length !== 0) {
    console.log('Exercicio 6:' + impares);
} else {
    console.log('Exercicio 6: nenhum valor ímpar encontrado');
}

// 7 - Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let menor = numbers[0];
for (let index = 0; index < numbers.length; index += 1) {
    if (menor > numbers[index]) {
        menor = numbers[index]
    }
}

console.log('Exercicio 7:' + menor);

// 8 - Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

let cont = [];

for (let i = 1; i <= 25; i += 1) {
    cont.push(i)
};

console.log('Exercicio 8:' + cont);

//9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.
let divisao = []
for (let index = 0; index < cont.length; index += 1) {
    divisao.push(cont[index] / 2)

};

console.log('Exercicio 9:' + divisao);