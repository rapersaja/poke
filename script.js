var pokemon = angular.module("pokemon",[]);
//controler creation
pokemon.controller("ListadoPokemon",function($scope,$http) {
	$scope.poke=[];
	$scope.conteo = 0;

		for(var y=0; y<=50; y++){

			$scope.conteo = $scope.conteo + 1 


// esta llamando a la api
				$http ({
					method:"POST",
					url: "https://www.pokeapi.co/api/v2/pokemon/"+ $scope.conteo


				}).then(function successcallback(objeto){
		//llamamos al pokemon 
					$scope.poke.push(objeto)
					console.log($scope.poke)	
		

				})
		}		
})
