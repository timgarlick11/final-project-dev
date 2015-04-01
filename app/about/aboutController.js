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
  var ifNoImage = 'http://redirect.bigoven.com/pics/rs/256/recipe-no-image.jpg'
 $scope.noImage = 'http://redirect.bigoven.com/pics/rs/256/recipe-no-image.jpg'

   
            // $scope.imageTest = defaultImage
    homeService.loadRecipes('monday').then(function(recipeId) {
        
        
            $scope.recipeInfo = []
        homeService.getRecipe(recipeId).then(function(recipeResults) {
                $scope.imageTest = recipeResults[2]
                if ($scope.imageTest === null) {
                    $scope.imageTest = ifNoImage;
                }
                $scope.recipeInfo.push(recipeResults)
               

        
        })
    })        
            
    homeService.loadRecipes('tuesday').then(function(recipeId) {
                $scope.recipeInfo2 = []
        homeService.getRecipe(recipeId).then(function(recipeResults) {
                console.log("number2: ", recipeResults)
                $scope.imageTest2 = recipeResults[2];
                  if ($scope.imageTest2 === null) {
                    $scope.imageTest2 = ifNoImage;
                }
                $scope.recipeInfo2.push(recipeResults)
        
        })
    })  


    homeService.loadRecipes('wednesday').then(function(recipeId) {
                $scope.recipeInfo3 = []
        homeService.getRecipe(recipeId).then(function(recipeResults) {
                console.log(recipeResults)
                $scope.imageTest3 = recipeResults[2];
                  if ($scope.imageTest3 === null) {
                    $scope.imageTest3 = ifNoImage;
                }
                $scope.recipeInfo3.push(recipeResults)
        
        })
    })  

    homeService.loadRecipes('thursday').then(function(recipeId) {
                 $scope.recipeInfo4 = []       
            homeService.getRecipe(recipeId).then(function(recipeResults) {
                console.log(recipeResults)
                $scope.imageTest4 = recipeResults[2];
                  if ($scope.imageTest4 === null) {
                    $scope.imageTest4 = ifNoImage;
                }
                $scope.recipeInfo4.push(recipeResults)
            })
    })

    homeService.loadRecipes('friday').then(function(recipeId) {
                 $scope.recipeInfo5 = []
            homeService.getRecipe(recipeId).then(function(recipeResults) {
                console.log(recipeResults)
                $scope.imageTest5 = recipeResults[2];
                  if ($scope.imageTest5 === null) {
                    $scope.imageTest5 = ifNoImage;
                }
                $scope.recipeInfo5.push(recipeResults)
            })
    })  
      
    homeService.loadRecipes('saturday').then(function(recipeId) {
                 $scope.recipeInfo6 = []
            homeService.getRecipe(recipeId).then(function(recipeResults) {
                console.log(recipeResults)
                $scope.imageTest6 = recipeResults[2];
                  if ($scope.imageTest6 === null) {
                    $scope.imageTest6 = ifNoImage;
                }
                $scope.recipeInfo6.push(recipeResults)
            })
    })  

    homeService.loadRecipes('sunday').then(function(recipeId) {
                 $scope.recipeInfo7 = []
            homeService.getRecipe(recipeId).then(function(recipeResults) {
                console.log(recipeResults)
                $scope.imageTest7 = recipeResults[2];
                  if ($scope.imageTest7 === null) {
                    $scope.imageTest7 = ifNoImage;
                }
                $scope.recipeInfo7.push(recipeResults)
            })
    }) 

      $scope.addFavorites = function (favorites, recipeId) {
        
        homeService.addFavorites(favorites, recipeId)
    };

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

var weekArr = ['monday','tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
    
$scope.clearWeek = function() {
    for (var i = 0; i < weekArr.length; i++) {
      
        homeService.removeDay(weekArr[i]).then(function(test) {

                $scope.imageTest = defaultImage;
                $scope.recipeInfo = false;
         
                $scope.imageTest2 = defaultImage;
                $scope.recipeInfo2 = false;
            
                $scope.imageTest3 = defaultImage;
                $scope.recipeInfo3 = false;
           
                $scope.imageTest4 = defaultImage;
                $scope.recipeInfo4 = false;
          
                $scope.imageTest5 = defaultImage;
                $scope.recipeInfo5 = false;
           
                $scope.imageTest6 = defaultImage;
                $scope.recipeInfo6 = false;
           
                $scope.imageTest7 = defaultImage;
                $scope.recipeInfo7 = false;
            

        })
    }
    
};






$scope.redirectHome = function() {
    $location.path('/');
}
 $scope.imageTest = defaultImage;
 $scope.imageTest2 = defaultImage;
 $scope.imageTest3 = defaultImage;
 $scope.imageTest4 = defaultImage;
 $scope.imageTest5 = defaultImage;
 $scope.imageTest6 = defaultImage;
 $scope.imageTest7 = defaultImage;



 
})