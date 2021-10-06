/*function validar_nombre_usuario (string){
	
	if (string===string.trim() && string[0]===string.charAt(0).toUpperCase()){
         //&& string.length[0]==cadena.length[0])
         return true;
     }
    
     return false;
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
*/

let registros = []

function agregarRegistro(){
    var name = document.getElementById("dato_nombre_usuario");
    var age= document.getElementById("dato_edad_usuario");
    var pass = document.getElementById("dato_contrasena");

    var registro = {
        usuario: name.value,
        edad: age.value,
        contrasena: pass.value
    };

    registros.push(registro);

    OrdenarArreglo(registros)
   
}


function OrdenarArreglo(arreglo){
    
    arreglo.sort( (a, b) => {
    if (a.edad > b.edad) {
        return 1;
    }
    if (a.edad < b.edad) {
        return -1;
    }
    if (a.usuario> b.usuario) {
        return 1;
    }
    if (a.edad < b.edad) {
        return -1;
    }
    return 0;
    
    });
    return arreglo
}

module.exports.registros = registros;
module.exports.OrdenarArreglo = OrdenarArreglo;
module.exports.agregarRegistro = agregarRegistro;
