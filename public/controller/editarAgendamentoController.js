angular.module("SmartHome")
    .controller("editarAgendamentoController",
        function ($scope, $rootScope, agendamentos, $filter, $location) {
            
            $scope.editarAgendamento = function () {
             
                var hora =  $filter('date')($scope.hora, 'HH:mm');
                var json =  
                {   
                    "_id": $scope.agendamento._id,
                    "ventilador":$scope.agendamento.ventilador,
                    "sala": $scope.agendamento.sala,
                    "quarto": $scope.agendamento.quarto,
                    "tv": $scope.agendamento.tv,
                    "data": $scope.data, 
                    "hora": hora
                };
               
                agendamentos.putAgendamento(json)
                    .then(function (response) {
                         alert("Atualizado com sucesso!");
                         $location.path('/agendamentos');
                    })
                    .catch(function (response) {
                        console.log(response);
                    })
            };

           
           
               
                $scope.agendamento = $rootScope.lista[$rootScope.id];

                
                 
        });