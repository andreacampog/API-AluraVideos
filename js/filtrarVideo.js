import { conexionAPI } from "./conexionAPI.js";  //importe te todos los elementos indicados en el export

import crearCard from "./mostrarVideos.js"  // importe de la funcion unicamente 

//capturo los valores del input y la accion
//para enviarlos atraves de la funcion buscarVideos
const boton = document.querySelector('[data-boton-busqueda]');

const inputEle = document.getElementById('buscar');

async function filtrarVideo(evento){
    evento.preventDefault();
    
    const datosDeBusqueda = document.querySelector("[data-busqueda]").value; 
    //console.log(datosDeBusqueda);
    
    //aqui almaceno la respuesta del servidor en la variable busqueda
    const busqueda = await conexionAPI.buscarVideos(datosDeBusqueda);         
    
    const lista = document.querySelector('[data-lista]');

    while(lista.firstChild){  //verifica si existen elementos hijo en un contenedor
        lista.removeChild(lista.firstChild);  //elimina elementos hijo en un contenedor
    }

    busqueda.forEach(video =>lista.appendChild(crearCard(video.titulo, video.descripcion, video.url, video.imagen)));

    if(busqueda.length == 0){
        lista.innerHTML= `<h2 class="mensaje__titulo">No fueron encontrados elementos para ${datosDeBusqueda}</h2>`
    }
           

    //console.log(busqueda);     
}

boton.addEventListener('click', evento=> filtrarVideo(evento));

inputEle.addEventListener('keydown', function(e){
        if(e.code == 'Enter'){
            filtrarVideo(e);
        }
});
    

