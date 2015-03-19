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

    $scope.addRecipe = function (day, recipeId) {
        console.log(day)
        console.log(recipeId)
        homeService.addData(day, recipeId)

            homeService.getRecipe(recipeId).then(function (recipeResults) {
                console.log('recipeResults1: ',recipeResults[2]);
                $scope.imageTest = recipeResults[2];
            });
    };   

})
 