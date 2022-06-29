const paragraph = document.getElementById("paragraph");
paragraph.style.color = "red";

//1 - Adicione uma classe igual para os dois parágrafos.

//2 - Recupere os seus parágrafos via código JavaScript, usando a função getElementsByClassName; 
let paragrafo = document.getElementsByClassName('teste');

for (let key in paragrafo) {
    console.log(paragrafo[key]);
};

// 3 - Altere algum estilo do primeiro deles. 

paragrafo[0].style.color = 'blue';

// 4 - Recupere o subtítulo e altere a cor dele usando a função getElementsByTagName. 
let subTitulo = document.getElementsByTagName('h4');
console.log(subTitulo[0]);
subTitulo[0].style.color = 'red'