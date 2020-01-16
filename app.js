const http = require('http');

http.createServer(function(resquisicao, resposta){
    resposta.end("Bem VIndo ao meu site");
}).listen(8181);
console.log("Rodando")