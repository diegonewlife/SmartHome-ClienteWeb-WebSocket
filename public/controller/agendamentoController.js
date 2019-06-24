angular.module("SmartHome").controller("agendamentoController", function ($scope, $rootScope, agendamentos) {
			 
		 
			agendamentos.getAgendamentos()
			.then(function (response) {
				$rootScope.lista = response.data;
				//console.log(response.data)
		     })
		     .catch(function (response) {
		        alert(response.date);
		     });  
	     	
	     	$scope.remover = function (id){
	     		
	     			console.log($rootScope.lista[id]);
	     	 

	     		agendamentos.delAgendamentos($rootScope.lista[id]._id)
					.then(function (response) {					    
						 console.log(response.date);
				     })
				     .catch(function (response) {
				        alert(response.date);
				     });  
	     		$rootScope.lista.splice(id, 1); 
	     	}
	    	 	
            $scope.editar = function(id){
                $rootScope.id = id;
            }
	          
});