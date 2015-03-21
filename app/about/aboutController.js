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
  var defaultImage = 'http://bed56888308e93972c04-0dfc23b7b97881dee012a129d9518bae.r34.cf1.rackcdn.com/sites/default/files/imagecache/standard/imagefield_default_images/no-recipe-image.jpg'
   $scope.imageTest = defaultImage;
    var days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
   
    for (var i = 0; i < days.length; i++) {
       
         
        homeService.loadRecipes(days[i]).then(function(recipeId) {
            console.log(recipeId.$id)
            for (var i = 0; i < recipeId.length; i++) {
                console.log(recipeId[i].$id)
            }
        });
        
        //     $scope.recipeInfo = [];
        // homeService.getRecipe(recipeId).then(function(recipeResults) {
        //         $scope.imageTest = recipeResults[2];
        //         $scope.recipeInfo.push(recipeResults);
   
               

        
    };
    // })        
            
    // homeService.loadRecipes('tuesday').then(function(recipeId) {

    //     homeService.getRecipe(recipeId).then(function(recipeResults) {
    //             console.log(recipeResults)
    //             $scope.imageTest2 = recipeResults[2]
        
    //     })
    // })  


    // homeService.loadRecipes('wednesday').then(function(recipeId) {

    //     homeService.getRecipe(recipeId).then(function(recipeResults) {
    //             console.log(recipeResults)
    //             $scope.imageTest3 = recipeResults[2]
        
    //     })
    // })  

    // homeService.loadRecipes('thursday').then(function(recipeId) {
       
    //         homeService.getRecipe(recipeId).then(function(recipeResults) {
    //             console.log(recipeResults)
    //             $scope.imageTest4 = recipeResults[2]
    //         })
    // })

    // homeService.loadRecipes('friday').then(function(recipeId) {
       
    //         homeService.getRecipe(recipeId).then(function(recipeResults) {
    //             console.log(recipeResults)
    //             $scope.imageTest5 = recipeResults[2]
    //         })
    // })  
      
    // homeService.loadRecipes('saturday').then(function(recipeId) {
       
    //         homeService.getRecipe(recipeId).then(function(recipeResults) {
    //             console.log(recipeResults)
    //             $scope.imageTest6 = recipeResults[2]
    //         })
    // })  

    // homeService.loadRecipes('sunday').then(function(recipeId) {
       
    //         homeService.getRecipe(recipeId).then(function(recipeResults) {
    //             console.log(recipeResults)
    //             $scope.imageTest7 = recipeResults[2]
    //         })
    // }) 

$scope.removeMonday = function(day) {

    homeService.removeDay(day).then(function(test) {
           console.log(test)
           $scope.imageTest = defaultImage;
           $scope.recipeInfo = !$scope.recipeInfo && test1
           // $scope.recipeInfo = [[{Name:null},{Quantity:0},{Unit:null}], null];
    }) 
}

// $scope.displayRecipe = function(recipeIndex){
//      $scope.showRecipe = true;

//      $scope.currentRecipe = $scope.recipeArr[recipeIndex];
//      console.log($scope.currentRecipe);
// }

// $scope.hideRecipe = function(){
//     $scope.showRecipe = false;

//     $scope.currentRecipe = null;
// }

// $scope.createRecipeObj = function(recipeResults) {
//     var defaultImage = 'http://bed56888308e93972c04-0dfc23b7b97881dee012a129d9518bae.r34.cf1.rackcdn.com/sites/default/files/imagecache/standard/imagefield_default_images/no-recipe-image.jpg'

//     var recipeObj = {
//         image: recipeResults[2],
//         info: recipeResults
//     };

//     return recipeObj;
// }

 
 
//     $scope.recipeArr = [];
   
//     homeService.loadRecipes('monday').then(function(recipeId) {
//         homeService.getRecipe(recipeId).then(function(recipeResults) {
//             $scope.recipeArr.push($scope.createRecipeObj(recipeResults));
//         })
//     })        
            
//     homeService.loadRecipes('tuesday').then(function(recipeId) {
//         homeService.getRecipe(recipeId).then(function(recipeResults) {
//             $scope.recipeArr.push($scope.createRecipeObj(recipeResults));
//         })
//     })  


//     homeService.loadRecipes('wednesday').then(function(recipeId) {

//         homeService.getRecipe(recipeId).then(function(recipeResults) {
//                 $scope.recipeArr.push($scope.createRecipeObj(recipeResults));
        
//         })
//     })  

//     homeService.loadRecipes('thursday').then(function(recipeId) {
       
//             homeService.getRecipe(recipeId).then(function(recipeResults) {
//                 $scope.recipeArr.push($scope.createRecipeObj(recipeResults));
//             })
//     })

//     homeService.loadRecipes('friday').then(function(recipeId) {
       
//             homeService.getRecipe(recipeId).then(function(recipeResults) {
//                 $scope.recipeArr.push($scope.createRecipeObj(recipeResults));
//             })
//     })  
      
//     homeService.loadRecipes('saturday').then(function(recipeId) {
       
//             homeService.getRecipe(recipeId).then(function(recipeResults) {
//                 $scope.recipeArr.push($scope.createRecipeObj(recipeResults));
//             })
//     })  

//     homeService.loadRecipes('sunday').then(function(recipeId) {
       
//             homeService.getRecipe(recipeId).then(function(recipeResults) {
//                 $scope.recipeArr.push($scope.createRecipeObj(recipeResults));
//             })
//     }) 

// $scope.removeMonday = function(day) {

//     homeService.removeDay(day).then(function(test) {
//            console.log(test)
//            $scope.imageTest = defaultImage;
//            $scope.recipeInfo = !$scope.recipeInfo;
//            // $scope.recipeInfo = [[{Name:null},{Quantity:0},{Unit:null}], null];
//     }) 
// }

// this.loadRecipes = function(day) {
//         var deferred = $q.defer() 
//         var firebaseUrl = 'https://food-calendar.firebaseio.com/';
//         var ref = new Firebase(firebaseUrl);
//         var dateRef = $firebase(ref.child(day)).$asArray();
                    
//         dateRef.$loaded().then(function (results) {
              
//            var recipeId = ((results[results.length -1]).$value);
//            console.log(recipeId)
//             deferred.resolve(recipeId)
//         })
//         return deferred.promise
//     };

 
})