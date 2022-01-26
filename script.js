

 const quebraDeLinha = () => document.write("<br>");

const linhaDeSeparacao = () => document.write("<hr>");

const oqueVaiParecerEscrito = (trabalho) => {

    document.write(trabalho);
    quebraDeLinha();                
}

const quebraDeLinhaDepois = () => {

    num == 1;
    while( 4 > num){
        document.write("<br>");
        num++
    }
}

// //--------minha base de sempre---------------

// function cifraComCifraDeCesar( deslocamento, mensagem ){

//     var numReceb = 0;
//     var mensagemEncriptada = "";

//     for ( var i = 0; i < mensagem.length; i++){

//         numReceb = mensagem[i].charCodeAt();
//         mensagemEncriptada += String.fromCharCode(numReceb + deslocamento);

//     }
//     return mensagemEncriptada;
// }

// function decifraCifraDeCesar( deslocamento, mensagemCifrada )
// {

//     var numReceb = 0;
//     var mensagemDecifrada = "";

//     for ( var i = 0; i < mensagemCifrada.length; i++ ){

//         numReceb = mensagemCifrada[i].charCodeAt();
//         mensagemDecifrada += String.fromCharCode(numReceb - deslocamento);
//     }

//     return mensagemDecifrada;

// }

// var qualquerCoisa = prompt("escreva algo em maiusculo");

// var qualquerCoisa2 = qualquerCoisa;

// oqueVaiParecerEscrito(cifraComCifraDeCesar( 7, qualquerCoisa));
// linhaDeSeparacao()
// oqueVaiParecerEscrito(decifraCifraDeCesar( 0, qualquerCoisa2));

var nome = prompt("ESCREVA ALGO!");
var deslocamento = 1;

function cifraComCifraDeCesar(deslocamento, nom) {

    var msg = []
    var criptograf = []

    var cod = 65; //numero da letra A
    var tamA = 26; //tamanho alfabeto

    for (var i = 0; i < nom.length; i++) {
        msg.push(((nom.charCodeAt(i) - cod + deslocamento) % tamA) + cod)

    }

    for (var i = 0; i < nom.length; i++) {
        criptograf.push(String.fromCharCode(msg[i]))
    }

    return criptograf.join("")
}

function decifraCifraDeCesar(deslocamento, nome) {
    var msg = []
    var criptograf = []

    var cod = 65;
    var tamA = 26;

    for (var i = 0; i < nome.length; i++) {
        msg.push(((nome.charCodeAt(i) + cod - deslocamento) % tamA) + cod)
    }

    for (var i = 0; i < nome.length; i++) {
        criptograf.push(String.fromCharCode(msg[i]))
    }

    return criptograf.join("")
}

oqueVaiParecerEscrito(cifraComCifraDeCesar(deslocamento, nome.toUpperCase()))
oqueVaiParecerEscrito(decifraCifraDeCesar(deslocamento, cifraComCifraDeCesar(deslocamento, nome.toUpperCase())))

console.log(cifraComCifraDeCesar(deslocamento, nome.toUpperCase()))
console.log(decifraCifraDeCesar(deslocamento, cifraComCifraDeCesar(deslocamento, nome.toUpperCase())))