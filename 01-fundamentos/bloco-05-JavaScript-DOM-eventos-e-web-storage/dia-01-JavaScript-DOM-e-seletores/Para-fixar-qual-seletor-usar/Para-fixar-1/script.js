const paragraph = document.querySelector("#paragraph");
paragraph.style.color = "red";

let paragrafo = document.querySelectorAll('.teste');

for (let key in paragrafo) {
    console.log(paragrafo[key]);
};


paragrafo[0].style.color = 'blue';

let subTitulo = document.querySelector('h4');
console.log(subTitulo);
subTitulo.style.color = 'red'