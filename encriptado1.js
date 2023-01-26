var enviado;
var para_copiar;
var letras='abcdefghijklmnñopqrstuvwxyz';
function verificar(){
   var texto_enviado=document.getElementById('texto').value;
   enviado=texto_enviado;
}
function encriptar(){
    for(var i=0; i<enviado.length;i++){
        if(letras.indexOf(enviado.charAt(i),0)==-1){
            alert('Tienes una letra en mayúscula o con acento');
            ingresodetexto.reset();
        }
        else if(letras.indexOf(enviado.charAt(i))!=-1){
            var textCifrado=enviado.replaceAll('a','ai').replaceAll('e','enter').replaceAll('i','imes').replaceAll('o','ober').replaceAll('u','ufat');
            document.getElementById('muñeco').style.display='none';
            document.getElementById('mensaje').innerHTML='';
            textoEncrip=document.getElementById('encriptado').innerHTML=textCifrado;
            var copiado=document.getElementById('copiar').style.display='block';
            ingresodetexto.reset();
        }
    }
}
function desemcriptar(){
    for(var i=0; i<enviado.length;i++){
        if(letras.indexOf(enviado.charAt(i),0)==-1){
            alert('Tienes una letra en mayúscula o letra con acento');
            ingresodetexto.reset();
        }
    else if(letras.indexOf(enviado.charAt(i))!=-1){
    var textCifrado=enviado.replaceAll('ai','a').replaceAll('enter','e').replaceAll('imes','i').replaceAll('ober','o').replaceAll('ufat','u');
    document.getElementById('muñeco').style.display='none';
    document.getElementById('mensaje').innerHTML='';
    document.getElementById('encriptado').innerHTML=textCifrado;
    ingresodetexto.reset();
    }
}
}
function copiar(){
    var encriptado=document.getElementById('encriptado');
    navigator.clipboard.writeText(encriptado.textContent);
    alert('copiado en el portapapeles');
}
