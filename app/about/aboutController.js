var app = angular.module('theHomeLife')

app.controller('aboutController', function($scope, homeService, $firebase) {

// var today = new Date();
// var dd = today.getDate();
// var mm = today.getMonth()+1; //January is 0!
// var yyyy = today.getFullYear();

// if(dd<10) {
//     dd='0'+dd
// } 

// if(mm<10) {
//     mm='0'+mm
// } 

// var today = mm+'/'+dd+'/'+yyyy;
// $scope.date = today;

 // $scope.showMe = function(event) {
 //    $(event.target).find('.info').toggle();
 //  };

    
    homeService.loadRecipes('monday').then(function(recipeId) {

        homeService.getRecipe(recipeId).then(function(recipeResults) {
                $scope.imageTest = recipeResults[2]
                console.log(recipeResults)
                // $scope.recipe1 = []
                // for (var i = 0; i < recipeResults.length; i++) {
                //    $scope.recipe1.push(recipeResults[i])
                //    console.log($scope.recipe1[i])
                // };
        
        })
    })        
            
    homeService.loadRecipes('tuesday').then(function(recipeId) {

        homeService.getRecipe(recipeId).then(function(recipeResults) {
                console.log(recipeResults)
                $scope.imageTest2 = recipeResults[2]
        
        })
    })  


    homeService.loadRecipes('wednesday').then(function(recipeId) {

        homeService.getRecipe(recipeId).then(function(recipeResults) {
                console.log(recipeResults)
                $scope.imageTest3 = recipeResults[2]
        
        })
    })  

    homeService.loadRecipes('thursday').then(function(recipeId) {
       
            homeService.getRecipe(recipeId).then(function(recipeResults) {
                console.log(recipeResults)
                $scope.imageTest4 = recipeResults[2]
            })
    })

    homeService.loadRecipes('friday').then(function(recipeId) {
       
            homeService.getRecipe(recipeId).then(function(recipeResults) {
                console.log(recipeResults)
                $scope.imageTest5 = recipeResults[2]
            })
    })  
      
    homeService.loadRecipes('saturday').then(function(recipeId) {
       
            homeService.getRecipe(recipeId).then(function(recipeResults) {
                console.log(recipeResults)
                $scope.imageTest6 = recipeResults[2]
            })
    })  

    homeService.loadRecipes('sunday').then(function(recipeId) {
       
            homeService.getRecipe(recipeId).then(function(recipeResults) {
                console.log(recipeResults)
                $scope.imageTest7 = recipeResults[2]
            })
    }) 

 
})