const paragraph = document.getElementById("paragraph");
paragraph.style.color = "red";

//1 - Recupere o elemento que contém o título da página e faça algo com ele, como alterá-lo para o nome do seu filme favorito. 

let titulo = document.getElementById('page-title');
titulo.innerText = 'Senhor dos Aneis';

// 2 - Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo. 

let segParf = document.getElementById('second-paragraph');
segParf.innerText = 'Vamos pintar de azul'
segParf.style.background = 'pink'
segParf.style.color = 'blue'

//3 - Por fim, recupere o subtítulo e altere-o também. 

let subtitulo = document.getElementById('subtitle');
subtitulo.innerHTML = '<h3>Alterei a Tag</h3>'