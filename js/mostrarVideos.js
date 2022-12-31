import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

export default function constroiCard(titulo, descricao, url, imagem) {
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = `<iframe width="100%" height="72%" src="${url}"
    title="${titulo}" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
<div class="descricao-video">
    <img src="${imagem}" alt="logo canal alura">
    <h3>${titulo}</h3>
    <p>${descricao}</p>
</div>`

    return video;
}

async function listaVideos() {
    const listaApi = await conectaApi.listaVideos();
    listaApi.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))
}

listaVideos();










// import { conectaApi } from "./conectaApi.js"; //Importou a variável conecta api e as funções dentro.

// const lista = document.querySelector("[data-lista]"); //data atribute que busca a (ul)

// //Function que cria o elemento (li) com a classe e as informações do card de cada vídeo e retorna
// function constroiCard(titulo, descricao, url, imagem) { 
//     const video = document.createElement("li")
//     video.className = "video__item"
//     video.innerHTML = `<iframe width="100%" height="72%" src="${url}"
//     title="${titulo}" frameborder="0"
//     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//     allowfullscreen></iframe>
// <div class="descricao-video">
//     <img src="${imagem}">
//     <h3>${titulo}</h3>
//     <p>${descricao}</p>
// </div>
//     `
//     return video
// }


// // Função que vai consumir as funções dentro da variável conectaApi, porém esta função precisa ser assincrona também, então pegou a variável conectaApi(importada) e fez a assincronicidade, guardando na variável (listaApi).


// async function listaVideos() {
//     const listaApi = await conectaApi.listaVideos();
//     //(abaixo) Para cada elemento (item da lista da api) será criado um novo card, passando novo filho(appendChild) chamando a função constroiCard com a descrição de cada elemento conforme a api.
//     listaApi.forEach(elemento => lista.appendChild(
//         constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))
// }

// listaVideos();