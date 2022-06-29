// Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho. 

let pai = document.getElementById('pai');
let ondeVoceEsta = document.getElementById('elementoOndeVoceEsta');

pai.removeChild(pai.firstElementChild);
pai.removeChild(pai.lastElementChild);
pai.removeChild(pai.lastElementChild);
ondeVoceEsta.removeChild(ondeVoceEsta.lastElementChild)
