/**
 * Created by Gustavo on 11/08/2017.
 */
angular.module("SmartHome").controller("websocketController",
    function ($scope, $websocket) {
         
       var dataStream = $websocket('ws://i9.kinghost.net:21210/iot/websocket');
       //   var dataStream = $websocket('ws://localhost:21210/iot/websocket');

        dataStream.onMessage(function (msg) {
            var dados = JSON.parse(msg.data);
           // console.log(dados);
            $scope.estadoAtual = dados;

        });

        $scope.ligar = function () {
            var msg = {
                comando: "LIGAR"
            };

            dataStream.send(msg);
        };

        $scope.desligar = function () {
            var msg = {
                comando: "DESLIGAR"
            };
            dataStream.send(msg);
        };
        
         
           


          
        
    });
