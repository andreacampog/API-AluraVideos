//En este archivo realizo todas las actividades de solicitud a la API

//GET, POST, PUT, DELETE 

//Por cada tipo de solicitud creo archivos independientes para
//MOSTRAR, CREAR, MODIFICAR, BORRAR para mantener el orden 


async function listarVideos(){
    //Aqui no lleva coma con parametro porque es un GET, este se entiende por defecto
    const conexion = await fetch("http://localhost:3001/videos");
    //console.log(conexion);
    const conexionConvertida = conexion.json();   
    if(!conexion.ok){
        throw new Error('Ha ocurrido un error al enviar el video');
    }

    //console.log(conexionConvertida);
    return conexionConvertida;      
}


//listarVideos();
//Aqui va el parametro a diferencia del GET
async function enviarVideo(titulo,descripcion,url,imagen){
    const conexion = await fetch("http://localhost:3001/videos",{
        method:'POST',  //que verbo o accion
        headers:{'Content-type': 'application/json'},   //tipo de archivo
        body:JSON.stringify({
            titulo:`${titulo}`,
            descripcion:`${descripcion}mil visualizaciones`,
            url:url,
            imagen:imagen
        })        
    })
    const conexionConvertida= conexion.json();
    return conexionConvertida;
}

async function buscarVideos(palabraClave){    

    const conexion = await fetch(`http://localhost:3001/videos?q=${palabraClave}`);
    const conexionConvertida= conexion.json();        
    return conexionConvertida;   
  
}


export const conexionAPI={
    listarVideos,
    enviarVideo,
    buscarVideos
};


