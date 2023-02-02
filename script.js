const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

/*
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"
*/

let matrizCodigo = [["e" , "enter"] , ["i" , "imes"], ["a" , "ai"], [ "o" , "ober"] , ["u" , "ufat"]];
//console.table(matrizCodigo);


function btnEncriptar(){
    const textoEncriptado = Criptografar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}


function Criptografar(StringEncriptada){
    
    StringEncriptada = StringEncriptada.toLowerCase();

    for( let i = 0; i < matrizCodigo.length; i++){
        if(StringEncriptada.includes(matrizCodigo[i][0])){
            StringEncriptada = StringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);

        }

    }
    //console.log(StringEncriptada);
    return StringEncriptada;

}

function btnDesEncriptar(){
    const textoEncriptado = DesCriptografar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}


function DesCriptografar(StringEncriptada){
    
    StringEncriptada = StringEncriptada.toLowerCase();

    for( let i = 0; i < matrizCodigo.length; i++){
        if(StringEncriptada.includes(matrizCodigo[i][1])){
            StringEncriptada = StringEncriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);

        }

    }
    //console.log(StringEncriptada);
    return StringEncriptada;

}

