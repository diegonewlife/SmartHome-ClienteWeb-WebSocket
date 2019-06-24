/**
 * Created by Gustavo on 10/08/2017.
 */
const sockjs = require('sockjs');
const server = sockjs.createServer();
const dateFormat = require('dateformat');
const registro = require('../model/Agendamentos');
var clientes = [];
    var json =  
                {
                    "ventilador":false,
                    "sala": false,
                    "quarto": false,
                    "tv": false,
                };
               
server.on('connection', function (socket) {

    adicionarNaListaDeClientes(socket);
    socket.on('data', broadcast);
    socket.on('close', sair);
    socket.write(JSON.stringify(json));
             
setInterval(function () {
            
       
        var data=dateFormat(new Date(), "mm-dd-yyyy");
        var h = (dateFormat(new Date(), "HH")-1);
        var m = dateFormat(new Date(), "MM");
        if (h>=0 && h<10) {
            h = '0'+h;
        }
        var hora = h+":"+m;
        registro.find({"data": data, "hora":hora}).then(function (dados) {
            if (dados.length == 0 || dados == null) {
                console.log(hora);
                 //socket.write(JSON.stringify(json));
            }else{
             json = {
                "ventilador": dados[0].ventilador,
                "sala": dados[0].sala,
                "quarto": dados[0].quarto,
                "tv": dados[0].tv
             };

             socket.write(JSON.stringify(json));
            }
         });
        
        
     
 }, 1000);


});

var adicionarNaListaDeClientes = function (socket) {
    var cliente = {
        socket: socket
    };
    clientes.push(cliente);
};

var broadcast = function (dados) {
    for (var i in clientes) {
        clientes[i].socket.write(dados);
    }
};

var sair = function () {
    console.log("Clientes saiu");
};

module.exports = server;
