
/** FUNCIONES PARA ICONOS INFORMACION PERSONAL */
document.getElementById('nomyapi').onmouseover=function(){
    document.getElementById('acomDato').innerHTML="NOMBRE Y APELLIDO:"
    document.getElementById('datosPriv').innerHTML="Alejo David, Tarrio Omar"
}

document.getElementById('email').onmouseover=function(){
    document.getElementById('acomDato').innerHTML="E-MAIL: <br>"
    document.getElementById('datosPriv').innerHTML="alejo.david.tarrio@gmail.com"
}

document.getElementById('cumple').onmouseover=function(){
    document.getElementById('acomDato').innerHTML="FECHA DE NACIMIENTO: <br>"
    document.getElementById('datosPriv').innerHTML="04/07/2000"
}

document.getElementById('dire').onmouseover=function(){
    document.getElementById('acomDato').innerHTML="DIRECCIÓN: <br>"
    document.getElementById('datosPriv').innerHTML=" Argentina, Buenos Aires, Monte Grande."
}

document.getElementById('tel').onmouseover=function(){
    document.getElementById('acomDato').innerHTML="TELEFONO: <br>"
    document.getElementById('datosPriv').innerHTML=" +54 112323-0811"
}

document.getElementById('cabeza').onmouseout=function(){
    document.getElementById('acomDato').innerHTML=""
    document.getElementById('datosPriv').innerHTML=""
}

/** FUNCIONES PARA INFORMACION ESTUDIO / PERFIL / EXPERIENCIA */
var ocultar=false, ocultar2=false, ocultar3=false;

document.getElementById('mostrar').onclick=function(){
    if(ocultar){
        document.getElementById('perfil').style='display:none';
        ocultar=false;
        document.getElementById('mostrar').src='img/flecha.png';
    } else {
        document.getElementById('perfil').style='display:block';
        ocultar=true;
        document.getElementById('mostrar').src='img/flecha2.png';
    }
}
 
document.getElementById('mostrar2').onclick=function(){
    if(ocultar2){
        document.getElementById('educacion').style='display:none';
        ocultar2=false;
        document.getElementById('mostrar2').src='img/flecha.png';
    } else {
        document.getElementById('educacion').style='display:block';
        ocultar2=true;
        document.getElementById('mostrar2').src='img/flecha2.png';
    }
}

document.getElementById('mostrar3').onclick=function(){
    if(ocultar3){
        document.getElementById('experiencia').style='display:none';
        ocultar3=false;
        document.getElementById('mostrar3').src='img/flecha.png';
    } else {
        document.getElementById('experiencia').style='display:block';
        ocultar3=true;
        document.getElementById('mostrar3').src='img/flecha2.png';
    }
}

/** FUNCIONES PARA SKILLS */
var ocultar4=true;

document.getElementById('mostrar4').onclick=function(){
    if(ocultar4){
        document.getElementById('competencias').style='display:none';
        ocultar4=false;
        document.getElementById('mostrar4').src='img/flecha.png';
    } else {
        document.getElementById('competencias').style='display:block';
        ocultar4=true;
        document.getElementById('mostrar4').src='img/flecha2.png';
    }
}