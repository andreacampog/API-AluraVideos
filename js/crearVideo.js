import {conexionAPI} from "./conexionAPI.js"

const formulario = document.querySelector('[data-formulario]');

async function crearVideo(evento){

    evento.preventDefault(); //evita que se recargue la pagina automaticamente

    //capturo todos los input y con el .value capturo el valor dentro del elemento
    const titulo = document.querySelector("[data-titulo]").value;
    const url = document.querySelector("[data-url]").value;
    const imagen = document.querySelector("[data-imagen]").value;
    
    //Genero un valor aleatorio entre 1 y 10 y lo convierto a texto para fines de simular los click que 
    //los usuarios hacen en los videos 
    const descripcion = Math.floor(Math.random*10).toString();

    try{
        await conexionAPI.enviarVideo(titulo,descripcion,url,imagen);    
        //redirijo al usuario a otra página manipulando el DOM
        window.location.href = "../pages/envio-concluido.html";
    }catch(e){
        alert(e);
    }  
}

//el submit es el evento que activa el envio del formulario
formulario.addEventListener('submit', evento=> crearVideo(evento));

