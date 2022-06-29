// 1 - Crie um irmão para elementoOndeVoceEsta.
let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta')
let irmao = document.createElement('p');

elementoOndeVoceEsta.parentElement.appendChild(irmao);

// 2 - Crie um filho para elementoOndeVoceEsta.
let estouAqui = document.createElement('p');
estouAqui.innerText = 'Estou Aqui';
elementoOndeVoceEsta.appendChild(estouAqui);

// 3 - Crie um filho para primeiroFilhoDoFilho. 
let maisUmFilho = document.createElement('p');
maisUmFilho.innerText = 'Mais Um Filho'
elementoOndeVoceEsta.firstElementChild.appendChild(maisUmFilho);
// 4 - A partir desse filho criado, acesse terceiroFilho.
console.log(maisUmFilho.parentElement.parentElement.nextElementSibling);