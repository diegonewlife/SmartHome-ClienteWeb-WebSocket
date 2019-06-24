angular.module("SmartHome").config(["$routeProvider", function ($routeProvider) {

    $routeProvider.when("/smartHome", {
        templateUrl: "view/SmartHome.html",
        controller: "smartHomeController"
    });
    
    $routeProvider.when("/agendamentos", {
        templateUrl: "view/agendamentos.html",
        controller: "agendamentoController"
    });

    $routeProvider.when("/novoAgendamento", {
        templateUrl: "view/novoAgendamento.html",
        controller: "novoAgendamentoController"
    });
     $routeProvider.when("/editarAgendamento", {
        templateUrl: "view/editarAgendamento.html",
        controller: "editarAgendamentoController"
    });
}]);