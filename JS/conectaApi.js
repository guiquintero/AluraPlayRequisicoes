async function listaVideos(){
    const conexaoApi = await fetch('http://localhost:3000/videos');
    const conexaoConvertida = await conexaoApi.json();
    
    return conexaoConvertida;
}

async function criaVideos(title, description, url, image){
    const conexaoApi = await fetch('http://localhost:3000/video', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            titulo: title,
            descricao: `${description} mil visualizações`,
            url: url,
            imagem: image
        })
    });

    if(!conexaoApi.ok){
        throw new Error('Não foi possível criar o vídeo');
    }
    const conexaoConvertida = await conexaoApi.json();
    return conexaoConvertida;
}


async function buscaVideo(termoDeBusca){
    const conexaoApi = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`);
    const conexaoConvertida = conexaoApi.json();
    
    return conexaoConvertida;
}


export const conectaApi = {
    listaVideos,
    criaVideos,
    buscaVideo
}