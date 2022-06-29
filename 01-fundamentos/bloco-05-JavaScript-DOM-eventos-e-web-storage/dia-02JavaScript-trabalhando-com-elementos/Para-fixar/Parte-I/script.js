// 1 - Acesse o elemento elementoOndeVoceEsta. 

let ondeVoceEsta = document.querySelector('#elementoOndeVoceEsta');

// 2 - Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele. 

ondeVoceEsta.parentNode.style.color = 'red'

// 3 - Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso? 

ondeVoceEsta.firstElementChild.innerText = 'Primeiro Filho Do Filho';

// 4 - Acesse o primeiroFilho a partir de pai. 
let pai = document.querySelector('#pai');
console.log(pai.firstElementChild);
// 5 - Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
console.log(ondeVoceEsta.previousElementSibling);
// 6 - Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
console.log(ondeVoceEsta.nextSibling);
// 7 - Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
console.log(ondeVoceEsta.nextElementSibling);
// 8 - Agora acesse o terceiroFilho a partir de pai. 
console.log(pai.children[2]);