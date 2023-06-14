import { conectaApi } from "./conectaApi.js";
import  constroiCard  from "./mostrarVideos.js";

async function buscaVideo(evento) {
    evento.preventDefault();

    const termoDeBusca = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaVideo(termoDeBusca);

    const lista = document.querySelector('[data-lista]');

    while(lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem))
    )

    if(busca.length === 0) {
        lista.innerHTML = `<h2 class="mensagem__titulo">Nenhum vídeo encontrado</h2>`;
    }

}

const formulario = document.querySelector("[data-botao-pesquisa]");
formulario.addEventListener("click", evento => buscaVideo(evento));