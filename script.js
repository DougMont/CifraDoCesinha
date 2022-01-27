

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