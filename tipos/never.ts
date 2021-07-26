function error(mensaje:string):never{ //tipo never corta la ejecucion del código y nada de lo que esté por debajo se ejecuta
    
    throw new Error(mensaje);
}

error("Error critico... linea 10 nunca será alcanzada");



console.log("Linea 10");