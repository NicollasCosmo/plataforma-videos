import { conectaApi } from "./conectaApi.js"; // importando a variável 
import constroiCard from "./mostrarVideos.js"; // importando exatamente a função constroiCard

async function buscarVideo(evento) {
    evento.preventDefault(); // bloqueia o comportamento do botão pesquisar
    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaVideo(dadosDePesquisa); // coloca na val busca a val importada 

    const lista = document.querySelector("[data-lista]");
    
    
    //Enquanto a lista tiver um primeiro filho, quer dizer que tem coisa lá dentro, enquanto isso for verdadeiro será removido o primeiro filho da lista, então fica nesse looping até apagar todos os filhos que a lista tem. 
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(elemento => lista.appendChild( // para cada elemento, coloca um filho
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))

    if (busca.length == 0) { // caso o termo de busca retornar zero, será exibida a mensagem abaixo
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existe vídeo com este termo</h2>`
    }
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

botaoDePesquisa.addEventListener("click", evento => buscarVideo(evento)) // no click chama a func buscarVideo













// import { conectaApi } from "./conectaApi"; // importando a variável 
// import constroiCard from "./mostrarVideos"; // importando exatamente a função constroiCard

// async function buscarVideo(evento) {
//     evento.preventDefault();
//     const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
//     const busca = await conectaApi.buscarVideo(dadosDePesquisa);

//     const lista = document.querySelector("[data-lista]");

//     //Enquanto a lista tiver um primeiro filho, quer dizer que tem coisa lá dentro, enquanto isso for verdadeiro será removido o primeiro filho da lista, então fica nesse looping até apagar todos os filhos que a lista tem. 
//     while (lista.firstChild) {
//         lista.removeChild(lista.firstChild);
//     }

//     busca.forEach(elemento => lista.appendChild(
//         constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))
// }

// const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]")

// botaoDePesquisa.addEventListener('click', evento => buscarVideo(evento))