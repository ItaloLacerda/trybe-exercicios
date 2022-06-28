let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1 - Ordene o array numbers em ordem crescente e imprima seus valores;

for (let i = 1; i < numbers.length; i += 1) {
    for (let index = 0; index < i; index += 1) {
        if (numbers[i] < numbers[index]) {
            let menor = numbers[i]
            numbers[i] = numbers[index]
            numbers[index] = menor
        }
    }
}

console.log(numbers);

// outra forma de solucinar

numbers.sort((a, b) = a - b);

console.log(numbers);
