async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos"); //chamando a api (requisição)
    const conexaoConvertida = await conexao.json(); // json() converte em objeto

    return conexaoConvertida; //fazer tudo lá dentro da função e depois vai retornar o valor da variável conexão convertida
}

// Esta função faz uma requisição POST
async function criaVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST", //indica o método/tipo de requisição.
        headers: { // cabeçalho das configurações.
            "Content-type": "application/json" // Especifica que tipo de arquivo que está sendo enviado, ou recebido.
        },
        body: JSON.stringify({ //dados cadastrastrados na requisição, convertidos em string.
            titulo: titulo,
            descricao: `${descricao} mil visualizações`, // variável contendo as visualições atualizadas.
            url: url,
            imagem: imagem
        })
    });
    if (!conexao.ok) { // caso a conexao não estaja funcionando (não ok)
        throw new Error("Não foi possível carregar o novo vídeo")//Será jogado um novo erro.
    }

    const conexaoConvertida = conexao.json();  //convertendo em json

    return conexaoConvertida; // retornando 
}

// Faz requisição com termo especificado na variável termoDeBusca
async function buscaVideo(termoDeBusca) {
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`);
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}


//Com o intuito de tornar o código mais legível e separar funções e arquivos de acordo com a sua responsabilidade no projeto, foi utilizado o import e export 

export const conectaApi = { // exporta a variável conectaApi, que vai receber as func listaVideo, criaVideo e buscaVideo
    listaVideos,
    criaVideo,
    buscaVideo
}