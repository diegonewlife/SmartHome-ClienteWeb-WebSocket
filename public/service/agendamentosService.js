angular.module("SmartHome").service("agendamentos", function ($http) {
	this.getAgendamentos = function () {
		return   $http.get("/banco/lista/");
	};
	this.delAgendamentos = function(id){
		return  $http.delete('/banco/remove/'+id);
	};
	this.postCadastro = function (json) {
		return  $http.post("/banco/cadastro", {param: json}, {headers: {'Content-Type': 'application/json'} });
	};
	this.putAgendamento = function (json) {
		return  $http.put("/banco/update", {param: json}, {headers: {'Content-Type': 'application/json'} });
	};
	
});
