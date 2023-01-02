
import { conectaApi } from "./conectaApi.js";// importando a variável conectaApi
const formulario = document.querySelector("[data-formulario]");


// Função que busca os seletores do formulário para enviar dados do video API
async function criarVideo(evento) {
    evento.preventDefault();    // Previne/bloqueia para que o (evento) padrão de envio não aconteça

    
    const imagem = document.querySelector("[data-imagem]").value;
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random() * 10).toString(); // simulação de visualiações com números aleatórios
    
    try { // tenta criar novo vídeo na lista
        
        //chamou a variável conectaApi
        await conectaApi.criaVideo(titulo, descricao, url, imagem); //a ordem dos parâmetros é a mesma da conexão com api
        window.location.href = "../pages/envio-concluido.html";

    } catch(e) { // caso não consiga, chama o erro
        alert(e);
    }
    
}


// No evento (submit) será chamada a função criarVideo
formulario.addEventListener("submit", evento => criarVideo(evento))
