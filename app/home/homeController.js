var app = angular.module('theHomeLife')
 
app.controller('homeController', function ($scope, homeService, $firebase, $location) {
 





$scope.addRecipe = function (day, recipeId, favorites) {
        
    homeService.addData(day, recipeId, favorites)
         
        homeService.loadRecipes(day).then(function(recipeId) {

            homeService.getRecipe(recipeId).then(function (recipeResults) {
                if (day === 'monday') {
                    $scope.imageTest = recipeResults[2];
                }
                if (day === 'tuesday') {
                    $scope.imageTest2 = recipeResults[2];
                }
                 if (day === 'wednesday') {
                    $scope.imageTest3 = recipeResults[2];
                }
                 if (day === 'thursday') {
                    $scope.imageTest4 = recipeResults[2];
                }
                 if (day === 'friday') {
                    $scope.imageTest5 = recipeResults[2];
                }
                 if (day === 'saturday') {
                    $scope.imageTest6 = recipeResults[2];
                }
                 if (day === 'sunday') {
                    $scope.imageTest7 = recipeResults[2];
                }
            }); 
        });
   
        
};

    $scope.addFavorites = function (favorites, recipeId) {
        
        homeService.addFavorites(favorites, recipeId)
    };


    $scope.enterKey = function(keyEvent) {
        if (keyEvent.which === 13) {
             
            homeService.getData($scope.searchRecipe).then(function (resultArr) {
            $scope.searchRecipe = '';

           
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
    };

           
    $scope.submitQuery = function () {

           
        homeService.getData($scope.searchRecipe).then(function (resultArr) {
       
          $scope.searchRecipe = '';
 			
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
    
    var preLoaded = function() {
        var preLoad = [158384, 167421, 168641]
        $scope.recipes = [];
        
        for (var i = 0; i < preLoad.length; i++) {
            homeService.getRecipe(preLoad[i]).then(function (recipeResults) {
                console.log('recipeResults1: ',recipeResults);
                $scope.recipes.push(recipeResults);
            });         
        };
    };
    preLoaded();


        
    
    homeService.loadRecipes('monday').then(function(recipeId) {

        homeService.getRecipe(recipeId).then(function (recipeResults) {
                 
                 $scope.imageTest = recipeResults[2]
        });
    }); 
     homeService.loadRecipes('tuesday').then(function(recipeId) {

        homeService.getRecipe(recipeId).then(function (recipeResults) {
                 
                 $scope.imageTest2 = recipeResults[2]
        });
    }); 
      homeService.loadRecipes('wednesday').then(function(recipeId) {

        homeService.getRecipe(recipeId).then(function (recipeResults) {
                 
                 $scope.imageTest3 = recipeResults[2]
        });
    }); 
       homeService.loadRecipes('thursday').then(function(recipeId) {

        homeService.getRecipe(recipeId).then(function (recipeResults) {
                 
                 $scope.imageTest4 = recipeResults[2]
        });
    }); 
        homeService.loadRecipes('friday').then(function(recipeId) {

        homeService.getRecipe(recipeId).then(function (recipeResults) {
                 
                 $scope.imageTest5 = recipeResults[2]
        });
    }); 
         homeService.loadRecipes('saturday').then(function(recipeId) {

        homeService.getRecipe(recipeId).then(function (recipeResults) {
                 
                 $scope.imageTest6 = recipeResults[2]
        });
    }); 
          homeService.loadRecipes('sunday').then(function(recipeId) {

        homeService.getRecipe(recipeId).then(function (recipeResults) {
                 
                 $scope.imageTest7 = recipeResults[2]
        });
    }); 

     
  $scope.redirectCalendar= function() {
    $location.path('/about');
}
var defaultImage = 'http://bed56888308e93972c04-0dfc23b7b97881dee012a129d9518bae.r34.cf1.rackcdn.com/sites/default/files/imagecache/standard/imagefield_default_images/no-recipe-image.jpg'
 $scope.image = defaultImage;
 // $scope.image = defaultImage;
 // $scope.imageTest3 = defaultImage;
 // $scope.imageTest4 = defaultImage;
 // $scope.imageTest5 = defaultImage;
 // $scope.imageTest6 = defaultImage;
 // $scope.imageTest7 = defaultImage;
   



});

// things to to complete in order for my code to be demo ready.

// -clear calendar week.
// -clear flip cards refactored and smalled for favorites.
// -week days clicked and show a slide down div
// -load content in favorites smoothly.
// -add wording content to search menu
// -figure out a way to text message recipe ingredients.
// -fix calendar buttons
// -fix submit buttons
            
           // 3 questions,


           // how do I refactor my code to when I push on the calendar button it only opens up that options on that specific card?
           // how do I refactor my code so when I click a day of the week and push 'add to calendar' It adds it to that specific div
           // how do I refactor my code so that my load recipes takes place in firebase I just envoke it in my controller?
       // var loadRecipes = function (day) {
            
    //     var firebaseUrl = 'https://food-calendar.firebaseio.com/';
    //     var ref = new Firebase(firebaseUrl);
    //     var dateRef = $firebase(ref.child(day)).$asArray();
        
    //     dateRef.$loaded().then(function (results) {
                        
    //         var recipeId = ((results[results.length -1]).$value)
    //         console.log(recipeId)
                
    //             homeService.getRecipe(recipeId).then(function(recipeResults) {
    //                 $scope.imageTest = recipeResults;

    //             })
    //     })
    // }               
        // loadRecipes('tuesday') 





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
 