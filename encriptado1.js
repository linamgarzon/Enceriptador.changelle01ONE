var enviado;
var para_copiar;
var letras='abcdefghijklmnñopqrstuvwxyz ';
var miarray=new Array();
var mayus;
function verificar(){
   var texto_enviado=document.getElementById('texto').value;
   enviado=texto_enviado;
}
function VerificarMayus(){
    console.log(enviado)
    for(var i=0; i<enviado.length;i++){
         miarray.push(letras.indexOf(enviado.charAt(i),0))
         console.log(miarray)
    }
    mayus=miarray.find(elemento => elemento == -1);
    console.log(mayus);
    while(miarray.length>0){
        miarray.pop();
    }
    if(mayus==-1){
        alert('Tienes mayusculas o acentos en tu texto');
        ingresodetexto.reset();
    }
    else{
        encriptar();
    }
}
function Verificaracentos(){
    console.log(enviado)
    for(var i=0; i<enviado.length;i++){
         miarray.push(letras.indexOf(enviado.charAt(i),0))
         console.log(miarray)
    }
    mayus=miarray.find(elemento => elemento == -1);
    console.log(mayus);
    while(miarray.length>0){
        miarray.pop();
    }
    if(mayus==-1){
        alert('Tienes mayusculas o acentos en tu texto');
        ingresodetexto.reset();
    }
    else{
        desemcriptar();
    }
}
function encriptar(){
    var textCifrado=enviado.replaceAll('e','enter').replaceAll('i','imes').replaceAll('o','ober').replaceAll('u','ufat').replaceAll('a','ai');
    document.getElementById('mucheco').style.display='none';
    document.getElementById('mensaje').innerHTML='';
    textoEncrip=document.getElementById('encriptado').innerHTML=textCifrado;
    var copiado=document.getElementById('copiar').style.display='block';
    ingresodetexto.reset();
}
function desemcriptar(){
    var textCifrado=enviado.replaceAll('ai','a').replaceAll('enter','e').replaceAll('imes','i').replaceAll('ober','o').replaceAll('ufat','u');
    document.getElementById('mucheco').style.display='none';
    document.getElementById('mensaje').innerHTML='';
    document.getElementById('encriptado').innerHTML=textCifrado;
    ingresodetexto.reset();
}
function copiar(){
    var encriptado=document.getElementById('encriptado');
    navigator.clipboard.writeText(encriptado.textContent);
    alert('copiado en el portapapeles');
}
