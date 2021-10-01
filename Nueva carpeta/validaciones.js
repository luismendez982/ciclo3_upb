let registros = []


function agregarRegistro(){
    let usuario=document.getElementById('dato_nombre_usuario').value;
    let edad=document.getElementById('dato_edad_usuario').value;
    let contrasena=document.getElementById('dato_contrasena').value;
    registros.push(usuario,edad,contrasena);
    // console.log(dato_edad_usuario);
    // console.log(dato_contrasena);
    // console.log(registros);
    }
function OrdenarArreglo(arreglo){
    
    registros=arreglo;
    arreglo.sort();
     console.log(arreglo);
   
 }

 

module.exports.registros = registros;
module.exports.OrdenarArreglo = OrdenarArreglo;
module.exports.agregarRegistro = agregarRegistro;
