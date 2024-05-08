//en VS Code debo ejecutar siempre: npx json-server --watch db.json --port 3001

//si salgo del VSCode, para decirle a que DB debe apuntar


import {conexionAPI} from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]");

export default function crearCard(titulo,descripcion,url,imagen){    

    /*construyo este codigo como el html
     <li class="videos__item">
            <iframe width="100%" height="72%" src="https://www.youtube.com/embed/QjOWz9avkg8"
                title="Front-end vs. Back-end: ¡Descubre el lado perfecto para ti!" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <div class="descripcion-video">
                <img src="./img/logo.png" alt="logo canal alura">
                <h3>Front-end vs. Back-end: ¡Descubre el lado perfecto para ti!</h3>
                <p>236 mil visualizaciones</p>
            </div>
        </li> */
    const video = document.createElement('li');
    video.className ='videos__item';
    video.innerHTML =`<iframe width="100%" height="72%" src="${url}"
    title="${titulo}" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
    <div class="descripcion-video">
        <img src="${imagen}" alt="logo canal alura">
        <h3>${titulo}</h3>
        <p>${descripcion}</p>
    </div>`;
    return video;
}

async function listarVideos(){
    try{
        const listaAPI = await conexionAPI.listarVideos();
        listaAPI.forEach(video => 
        lista.appendChild(crearCard(video.titulo, video.descripcion, video.url, video.imagen)));
    }catch {
        lista.innerHTML = `<h2 class='mensaje__titulo'>Ha ocurrido un problema con la conexion</h2>`;
    }

    
}
listarVideos();