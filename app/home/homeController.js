var app = angular.module('theHomeLife')
 
app.controller('homeController', function ($scope, homeService, $firebase, $location) {
 
        //on load = get weekOfReceipes 
        //loop through those and make a "homeService.getData(receipe) for each one."

    //call this method for every recipeId for the week
    //also call this mehtod from inside submitQuery
    //this is your one way to get a single full recipe
    //it should return a full recipe back to whoever called it.
    // function getReceipe(id) {
    //         homeService.getRecipe(id).then(function (recipeResults) {
    //         return recipeResults
    //     } } 
            // var firstRecipe = [];
            // var secondRecipe = [];
            // var thirdRecipe = []

                //    homeService.addData('monday',recipeId)
               //  var firebaseUrl = 'https://food-calendar.firebaseio.com/';
               //  var ref = new Firebase(firebaseUrl);
               //  var dateRef = $firebase(ref.child(day)).$asArray();
                    
               //      dateRef.$loaded().then(function (results) {
                        
               //          var recipeId = ((results[results.length -1]).$value)
               //          console.log(recipeId)
                //         homeService.getRecipe(recipeId).then(function (recipeResults) {
                //         console.log('recipeResults1: ',recipeResults[2]);
                //         $scope.imageTest = recipeResults;
                // })
 
               // })






             $scope.toggle = function() {
        $scope.myVar = !$scope.myVar;
    };


                         $scope.addRecipe = function (day, recipeId) {
    console.log(day)
    console.log(recipeId)
                            homeService.addData(day, recipeId)
              

                 homeService.getRecipe(recipeId).then(function (recipeResults) {
                        console.log('recipeResults1: ',recipeResults[2]);
                        $scope.imageTest = recipeResults;
                })
                    
    

 }

            $scope.monday = function(recipeId) {

                homeService.addData('monday',recipeId)

                  
               
            }
             $scope.tuesday = function(recipeId) {

                homeService.addData('tuesday',recipeId)
            }
             $scope.wednesday = function(recipeId) {

                homeService.addData('wednesday',recipeId)
            }
             $scope.thursday = function(recipeId) {

                homeService.addData('thursday',recipeId)
            }
             $scope.friday = function(recipeId) {

                homeService.addData('friday',recipeId)
            }
             $scope.saturday = function(recipeId) {

                homeService.addData('saturday',recipeId)
            }
             $scope.sunday = function(recipeId) {

                homeService.addData('sunday',recipeId)
            }


            $scope.enterKey = function(keyEvent) {
                if (keyEvent.which === 13) {
                       homeService.getData($scope.searchRecipe).then(function (resultArr) {
      
            
          
            $scope.searchRecipe = '';
            
            // getRecipe(resultsArr[i]);
            //don't call this here. getRecipe instead. Cleaner.
            //take the results from that call and push them in a common $scope.recipes array. Then Ng-repeat over that.
            //push all the receipes into a common array
            //then ng-repeat over thoser receipes to avoid duplicating code like below =)
            $scope.recipes = [];
            for (var i = 0; i < (resultArr.length >= 3 ? 3 : resultArr.length); i++) {
                homeService.getRecipe(resultArr[i]).then(function (recipeResults) {
                    console.log('recipeResults1: ',recipeResults);
                  $scope.recipes.push(recipeResults);
                }, function(err) {
                    console.log('FAILED!!!: ', err);
                })
            }
        })
    }
}

           
    $scope.submitQuery = function () {

           
        homeService.getData($scope.searchRecipe).then(function (resultArr) {
       
          
            $scope.searchRecipe = '';
 			
            // getRecipe(resultsArr[i]);
            //don't call this here. getRecipe instead. Cleaner.
            //take the results from that call and push them in a common $scope.recipes array. Then Ng-repeat over that.
            //push all the receipes into a common array
            //then ng-repeat over thoser receipes to avoid duplicating code like below =)
            $scope.recipes = [];
            for (var i = 0; i < (resultArr.length >= 3 ? 3 : resultArr.length); i++) {
                homeService.getRecipe(resultArr[i]).then(function (recipeResults) {
                    console.log('recipeResults1: ',recipeResults);
                  $scope.recipes.push(recipeResults);
                }, function(err) {
                    console.log('FAILED!!!: ', err);
                })
            }

        })
  
    };


var testing = homeService.loadRecipes('monday')

console.log(testing)

  
});


//     var loadRecipes = function (day) {
           
                
//                 var firebaseUrl = 'https://food-calendar.firebaseio.com/';
//                 var ref = new Firebase(firebaseUrl);
//                 var dateRef = $firebase(ref.child(day)).$asArray();
                    
//                     dateRef.$loaded().then(function (results) {
                        
//                         var recipeId = ((results[results.length -1]).$value)
//                         console.log(recipeId)
//                         homeService.getRecipe(recipeId).then(function (recipeResults) {
//                         console.log('recipeResults1: ',recipeResults[2]);
//                         $scope.imageTest = recipeResults;
//                 })
                        
//                })
            
                    
    

//  }
// loadRecipes('monday')
            
           
     //        homeService.getRecipe(first).then(function (recipeResults1) {
                  
     //            var firstRecipe = [];
                // firstRecipe.push(recipeResults1)
     //            console.log('recipeResults1: ',recipeResults1)
           //    $scope.recipe1 = firstRecipe
     //          $scope.firstIngredients = recipeResults1[0]
               
    
     //        })

     //        homeService.getRecipe(second).then(function (recipeResults2) {
                  
     //            var secondRecipe = [];
     //            secondRecipe.push(recipeResults2);
     //            console.log('recipeResults2: ', recipeResults2);
     //          $scope.recipe2 = secondRecipe;
     //          $scope.secondIngredients = recipeResults2[0];
               
    
     //        })

     //        homeService.getRecipe(third).then(function (recipeResults3) {
                  
     //            var thirdRecipe = [];
     //            thirdRecipe.push(recipeResults3);
     //            console.log('recipeResults3: ', recipeResults3);
     //          $scope.recipe1 = thirdRecipe;
     //          $scope.thirdIngredients = recipeResults3[0];
               
    
     //        })
          







 
            // {firstIngredients:recipeInfo[0], firstInstructions: recipeInfo[1], firstImage: recipeInfo[2],
            //                      firstServings: recipeInfo[3], firstTime: recipeInfo[4], firstTitle: recipeInfo[5],
            //                      firstReviews: recipeInfo[6], firstStarRating: recipeInfo[7]}
            //.then(function(data) {
            //      console.log('data: ', data);
            // });
            // newFriend.status = "cool";
            // $scope.friends.$add(newFriend);
            // $scope.newFriend = '';
            // {firstIngredients:recipeInfo[0], firstInstructions: recipeInfo[1], firstImage: recipeInfo[2],
            //      firstServings: recipeInfo[3], firstTime: recipeInfo[4], firstTitle: recipeInfo[5],
            //      firstReviews: recipeInfo[6], firstStarRating: recipeInfo[7]}
 
 
            // homeService.getRecipe(second).then(function (recipeInfo) {
 
            //     console.log(recipeInfo);
            //     $scope.secondIngredients = recipeInfo[0];
            //     $scope.secondInstructions = recipeInfo[1];
            //     $scope.secondImage = recipeInfo[2];
            //     if(recipeInfo[2] === null) {
            //      	$scope.secondImage = "http://redirect.bigoven.com/pics/rs/256/recipe-no-image.jpg";
            //      }
            //     $scope.secondServings = recipeInfo[3];
            //     $scope.secondTime = recipeInfo[4];
            //     $scope.secondTitle = recipeInfo[5];
            //     $scope.secondReviews = recipeInfo[6];
            //     $scope.secondStarRating = recipeInfo[7];
            // });
 
 
            // homeService.getRecipe($scope.thirdId).then(function (recipeInfo) {
 	
            //     console.log(recipeInfo[2]);
            //     $scope.thirdIngredients = recipeInfo[0];
            //     $scope.thirdInstructions = recipeInfo[1];

            //     $scope.thirdImage = recipeInfo[2];
            //      if(recipeInfo[2] === null) {
            //      	$scope.thirdImage = "http://redirect.bigoven.com/pics/rs/256/recipe-no-image.jpg";
            //      }
            //     $scope.thirdServings = recipeInfo[3];
            //     $scope.thirdTime = recipeInfo[4];
            //     $scope.thirdTitle = recipeInfo[5];
            //     $scope.thirdReviews = recipeInfo[6];
            //     $scope.thirdStarRating = recipeInfo[7];
            // })
            
    //             $scope.firstIngredients = recipeInfo[0]
    //             $scope.firstInstructions = recipeInfo[1];
    //             $scope.firstImage = recipeInfo[2];
    //              if(recipeInfo[2] === null) {
    //                  $scope.secondImage = "http://redirect.bigoven.com/pics/rs/256/recipe-no-image.jpg";
    //              }
    //             $scope.firstServings = recipeInfo[3];
    //             $scope.firstTime = recipeInfo[4];
    //             $scope.firstTitle = recipeInfo[5];
    //             $scope.firstReviews = recipeInfo[6];
    //             $scope.firstStarRating = recipeInfo[7];
    //             $scope.firstUrl = recipeInfo[8]
    //             $scope.secondIngredients = recipeInfo[9];
    //             $scope.secondInstructions = recipeInfo[10];
    //             $scope.secondImage = recipeInfo[11];
    //             if(recipeInfo[11] === null) {
    //                  $scope.secondImage = "http://redirect.bigoven.com/pics/rs/256/recipe-no-image.jpg";
    //              }
    //             $scope.secondServings = recipeInfo[12];
    //             $scope.secondTime = recipeInfo[13];
    //             $scope.secondTitle = recipeInfo[14];
    //             $scope.secondReviews = recipeInfo[15];
    //             $scope.secondStarRating = recipeInfo[16];
    //             $scope.firstUrl = recipeInfo[17]
    //             $scope.thirdIngredients = recipeInfo[18];
               
    //             $scope.thirdInstructions = recipeInfo[19];
                // $scope.thirdImage = recipeInfo[20];
    //              if(recipeInfo[20] === null) {
    //                  $scope.thirdImage = "http://redirect.bigoven.com/pics/rs/256/recipe-no-image.jpg";
    //              }
    //             $scope.thirdServings = recipeInfo[21];
    //             $scope.thirdTime = recipeInfo[22];
    //             $scope.thirdTitle = recipeInfo[23];
    //             $scope.thirdReviews = recipeInfo[24];
    //             $scope.thirdStarRating = recipeInfo[25];
    //             $scope.thirdtUrl = recipeInfo[26]
               
    //             var sync = homeService.firebaseData();
    //             $scope.recipe = sync.$asArray();
    //            console.log(recipeInfo[19])
 