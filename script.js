/*function saltoLinea (){
    document.write("br")
}
function imprimir (texto){
    document.write(texto);
}

function copiar(){
    document.getElementById("text2").value=document.getElementById("text1").value;
}

var input = document.getElementsByName("textbox");

function desencriptador (){
    input =input.value
    desencriptado = input.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");
    imprimir(desencriptado);
    }

    input.focus();
    var button = document.querySelector("button")
    button.onclick=desencriptador;

*/

    function saltoLinea (){
        document.write("br")
    }
    function imprimir (texto){
        document.write(texto);
    }

    function intercambiarTexto(){
        document.getElementById("texto").value = document.getElementById("textoResultado").value;
    }



    function verificarMinusculas(){

        input=document.getElementById("texto").value;

        //alert(input.toLowerCase());

        if(input.toLowerCase()==input){
            return true;
        } else{
            return false;
        }

    }

    function verificarNumeros(){
        var input=document.getElementById("texto").value;
        //var input= "asgh4djkh";
        var x= input.length;
        var tieneNum=false;


   

        for(var i=0; i<x; i++){

            if(!isNaN(input[i])){
                tieneNum = true;
            }

        }

        return tieneNum;


    }


    function desencriptador(){
        //var textoValido=verificarMinusculas();
        if(verificarMinusculas() && !verificarNumeros()){
            input=document.getElementById("texto").value;  //obteniendo texto a desencriptar
            desencriptado = input.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");
            document.getElementById("textoResultado").innerHTML = desencriptado;
            ocultarImagen();
            input.value="";
            input.focus();

        } else{
            input=document.getElementById("texto");
            input.value="";
            input.placeholder="El texto debe estar en minusculas y no debe tener numeros";
            input.focus();
        }

    }




    function encriptador(){

        var textoValido=verificarMinusculas();
        var numeroValido=verificarNumeros();

        if (textoValido && !numeroValido){
            input=document.getElementById("texto").value;  //obteniendo texto a encriptar
            encriptado = input.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
            document.getElementById("textoResultado").innerHTML = encriptado;
            ocultarImagen();
            input.value="";
            input.focus();
        } else{
            input=document.getElementById("texto");
            input.value="";
            input.placeholder="El texto debe estar en minusculas y no debe tener numeros";
            input.focus();
        }

    }



    function copiar() {
    var copyText = document.getElementById("textoResultado");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    copyText.innerHTML = "¡Texto copiado!"
    }
    
    function ocultarImagen() {

        var x = document.getElementById("img");

        if(document.getElementById("texto").value == ""){

            x.style.display = 'block';
        }else{
            x.style.display = 'none';
        }

/*
    
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
    x.style.display = 'none';
        }


        */
    }

        