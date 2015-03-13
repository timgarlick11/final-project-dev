var app = angular.module('theHomeLife')

app.controller('contactController', function($scope, homeService) {


  	homeService.loadFavorites('favorites').then(function(recipeId) {
  		$scope.recipes = []
  		for (var i = 0; i < recipeId.length; i++) {
  			console.log(recipeId[i])
  	
        	homeService.getRecipe(recipeId[i]).then(function(recipeResults) {
        		console.log(recipeResults)
        		$scope.recipes.push(recipeResults)
        	
        	})	
                // console.log(recipeResults)
        }       
    })   

})
 