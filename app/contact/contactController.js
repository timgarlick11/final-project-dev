var app = angular.module('theHomeLife')

app.controller('contactController', function($scope, homeService) {
// var recipeSync = homeService.removeFavorite();
// $scope.recipes1 = recipeSync.$asArray()

  	homeService.loadFavorites('favorites').then(function(recipeId) {
  		$scope.recipes = []
  		for (var i = 0; i < recipeId.length; i++) {
  			console.log(recipeId[i])
  	
        	homeService.getRecipe(recipeId[i]).then(function(recipeResults) {
        		console.log(recipeResults)
        		$scope.recipes.push(recipeResults)
        	
        	})	
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

  // $scope.deleteFavorite = function(id) {
  //     console.log(id[9])
  //     console.log($scope.recipes1)
  //    $scope.recipes1.$remove($value.id[9]);

  // } 

$scope.deleteFav = function(id) {
  console.log(id);
  homeService.removeFavorite(id)
  $scope.recipes = [];
}

})
 