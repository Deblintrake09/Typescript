let esAquaman:boolean = true;
let esBatman:boolean;
let esSuperman:boolean=false;

if(esSuperman){
    console.log("Estamos Salvados!");
}else {
    console.log("Ohhh! oh!");
}

esSuperman = convertirClark();
if(esSuperman){
    console.log("Estamos Salvados!");
}else {
    console.log("Ohhh! oh!");
}

function convertirClark(){
    return false;
}

