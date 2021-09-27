function validar_nombre_usuario (string){

    if (string == string.toUpperCase() && string== string.trim()&& (string = capitalize(string))){
        
        return true;
    }
    return false;
    // if (string =capitalize(string) && string== string.trim()){
    //     return true;
    // }
    // return false;
}

function validar_edad_usuario (edad){
    if (isNaN(edad)==false && (edad>0) && (edad>13 && edad <110)){
        return true;
    }
    return false;
}

function validar_contrasena (string){
    if (string.length>5 && string.length>5 && (/\W/.test(string)==false)){
        return true;
    }
    return false;
}


module.exports.validar_nombre_usuario = validar_nombre_usuario;
module.exports.validar_contrasena = validar_contrasena;
module.exports.validar_edad_usuario = validar_edad_usuario;