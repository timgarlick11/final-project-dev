var app = angular.module('theHomeLife')

app.controller('aboutController', function($scope, homeService, $firebase, $location) {

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
  var defaultImage = 'http://bed56888308e93972c04-0dfc23b7b97881dee012a129d9518bae.r34.cf1.rackcdn.com/sites/default/files/imagecache/standard/imagefield_default_images/no-recipe-image.jpg'
 
   
            // $scope.imageTest = defaultImage
    homeService.loadRecipes('monday').then(function(recipeId) {
        
        
            $scope.recipeInfo = []
        homeService.getRecipe(recipeId).then(function(recipeResults) {
                $scope.imageTest = recipeResults[2]
                $scope.recipeInfo.push(recipeResults)
               

        
        })
    })        
            
    homeService.loadRecipes('tuesday').then(function(recipeId) {
                $scope.recipeInfo2 = []
        homeService.getRecipe(recipeId).then(function(recipeResults) {
                console.log("number2: ", recipeResults)
                $scope.imageTest2 = recipeResults[2]
                $scope.recipeInfo2.push(recipeResults)
        
        })
    })  


    homeService.loadRecipes('wednesday').then(function(recipeId) {
                $scope.recipeInfo3 = []
        homeService.getRecipe(recipeId).then(function(recipeResults) {
                console.log(recipeResults)
                $scope.imageTest3 = recipeResults[2]
                $scope.recipeInfo3.push(recipeResults)
        
        })
    })  

    homeService.loadRecipes('thursday').then(function(recipeId) {
                 $scope.recipeInfo4 = []       
            homeService.getRecipe(recipeId).then(function(recipeResults) {
                console.log(recipeResults)
                $scope.imageTest4 = recipeResults[2]
                $scope.recipeInfo4.push(recipeResults)
            })
    })

    homeService.loadRecipes('friday').then(function(recipeId) {
                 $scope.recipeInfo5 = []
            homeService.getRecipe(recipeId).then(function(recipeResults) {
                console.log(recipeResults)
                $scope.imageTest5 = recipeResults[2]
                $scope.recipeInfo5.push(recipeResults)
            })
    })  
      
    homeService.loadRecipes('saturday').then(function(recipeId) {
                 $scope.recipeInfo6 = []
            homeService.getRecipe(recipeId).then(function(recipeResults) {
                console.log(recipeResults)
                $scope.imageTest6 = recipeResults[2]
                $scope.recipeInfo6.push(recipeResults)
            })
    })  

    homeService.loadRecipes('sunday').then(function(recipeId) {
                 $scope.recipeInfo7 = []
            homeService.getRecipe(recipeId).then(function(recipeResults) {
                console.log(recipeResults)
                $scope.imageTest7 = recipeResults[2]
                $scope.recipeInfo7.push(recipeResults)
            })
    }) 

$scope.removeDay = function(day) {

    homeService.removeDay(day).then(function(test) {
           console.log(test)
           if (day === 'monday') {
                $scope.imageTest = defaultImage;
                $scope.recipeInfo = false;
            }
            if (day === 'tuesday') {
                $scope.imageTest2 = defaultImage;
                $scope.recipeInfo2 = false;
            }
            if (day === 'wednesday') {
                $scope.imageTest3 = defaultImage;
                $scope.recipeInfo3 = false;
            }
            if (day === 'thursday') {
                $scope.imageTest4 = defaultImage;
                $scope.recipeInfo4 = false;
            }
            if (day === 'friday') {
                $scope.imageTest5 = defaultImage;
                $scope.recipeInfo5 = false;
            }
             if (day === 'saturday') {
                $scope.imageTest6 = defaultImage;
                $scope.recipeInfo6 = false;
            }
             if (day === 'sunday') {
                $scope.imageTest7 = defaultImage;
                $scope.recipeInfo7 = false;
            }
       

          
           // $scope.recipeInfo = [[{Name:null},{Quantity:0},{Unit:null}], null];
    }) 
}

$scope.redirectHome = function() {
    $location.path('/');
}


 
})