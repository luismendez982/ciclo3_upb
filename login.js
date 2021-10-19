let registros = [];



function validar_captcha(rcaptcha) {

    pregunta = "¿Cuál es la capital de Colombia?";
    opc1 = "BOGOTÁ";
    opc2 = "BOGOTA";
    valor = rcaptcha.toUpperCase();

    if (valor == opc1 || valor == opc2) {
        return true;
    } else {
        return false;
    }

}

function iniciar_sesion(usuario, contrasena, rcaptcha) {
    validar = usuario + contrasena;

    for (i = 0; i < registros.length; i++) {

        usu_reg = registros[i]["usuario"];
        cont_reg = registros[i]["contrasena"];
        concat = usu_reg + cont_reg;
        //console.log(concat);

        if (validar == concat) {
            vari = validar_captcha(rcaptcha);
            //console.log(vari);
            if (vari) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}
module.exports.registros = registros;
module.exports.validar_captcha = validar_captcha;
module.exports.iniciar_sesion = iniciar_sesion;