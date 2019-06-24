angular.module("SmartHome")
    .controller("novoAgendamentoController",
        function ($scope, agendamentos, $filter, $location) {

            $scope.salvarAgendamento = function () {
                var data =  $filter('date')($scope.data, 'MM/dd/yyyy');
                var hora =  $filter('date')($scope.hora, 'HH:mm');
                var json =  
                {
                    "ventilador":$scope.ventilador,
                    "sala": $scope.sala,
                    "quarto": $scope.quarto,
                    "tv": $scope.tv,
                    "data":data, 
                    "hora": hora
                };
                agendamentos.postCadastro(json)
                    .then(function (response) {
                        alert("Inserido com sucesso!");
                        $location.path('/agendamentos');
                    })
                    .catch(function (response) {
                        alert(response.date);
                    })
            };

                
        });