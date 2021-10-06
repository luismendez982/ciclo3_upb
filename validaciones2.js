let registros = []
const User=document.getElementById('dato_nombre_usuario').value;
const Age=document.getElementById('dato_edad_usuario').value;
const Pass=document.getElementById('dato_contrasena').value;
const btt=document.getElementById('enviar_registro').value;

function agregarRegistro(){
    let Datos={
        usuario:User,
        edad:Age,
        contrasena:Pass,
    };
    
    registros.push(Datos);
    console.log(registros);
    }
function OrdenarArreglo(arreglo){
    
    arreglo.sort(function (a , b){
        if(a.edad>b.edad) return 1;
        if(a.edad<b.edad) return -1;
        return 0;
    });
   console.log(arreglo)
   return arreglo;
 }

 

// module.exports.registros = registros;
// module.exports.OrdenarArreglo = OrdenarArreglo;
// module.exports.agregarRegistro = agregarRegistro;
