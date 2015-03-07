var app = angular.module('theHomeLife')
 
app.controller('homeController', function ($scope, homeService, $firebase) {
 

    $scope.submitQuery = function () {
 
        homeService.getData($scope.searchRecipe).then(function (resultArr) {
            // console.log(resultArr)
 			for (var i = 0; i < 3; i++) {
 				console.log(resultArr[i])
 			
            // var first = resultArr[0]
            // var second = resultArr[1]
            // $scope.thirdId = resultArr[2]
            // console.log(first, second, $scope.thirdId)
            $scope.searchRecipe = '';
 			
				
				var test = []
            
            homeService.getRecipe(resultArr[i]).then(function (recipeResults) {
 	
	 			console.log(test)
				 
				for (var i = 0; i <= 8; i++) {
 					
 				  test.push(recipeResults[i])
	 				 
	 			};
				console.log(test[19])
 				
                $scope.firstIngredients = test[0]
                $scope.firstInstructions = test[1];
                $scope.firstImage = test[2];
                 if(test[2] === null) {
                 	$scope.secondImage = "http://redirect.bigoven.com/pics/rs/256/recipe-no-image.jpg";
                 }
                $scope.firstServings = test[3];
                $scope.firstTime = test[4];
                $scope.firstTitle = test[5];
                $scope.firstReviews = test[6];
                $scope.firstStarRating = test[7];
                $scope.firstUrl = test[8]
                $scope.secondIngredients = test[9];
                $scope.secondInstructions = test[10];
                $scope.secondImage = test[11];
                if(test[11] === null) {
                 	$scope.secondImage = "http://redirect.bigoven.com/pics/rs/256/recipe-no-image.jpg";
                 }
                $scope.secondServings = test[12];
                $scope.secondTime = test[13];
                $scope.secondTitle = test[14];
                $scope.secondReviews = test[15];
                $scope.secondStarRating = test[16];
                $scope.firstUrl = test[17]
                $scope.thirdIngredients = test[18];
               
                $scope.thirdInstructions = test[19];
				$scope.thirdImage = test[20];
                 if(test[20] === null) {
                 	$scope.thirdImage = "http://redirect.bigoven.com/pics/rs/256/recipe-no-image.jpg";
                 }
                $scope.thirdServings = test[21];
                $scope.thirdTime = test[22];
                $scope.thirdTitle = test[23];
                $scope.thirdReviews = test[24];
                $scope.thirdStarRating = test[25];
                $scope.thirdtUrl = test[26]
               
                var sync = homeService.firebaseData();
                $scope.recipe = sync.$asArray();
                // console.log(sync)
            })

	 }


            $scope.addData = function (day) {
                var firebaseUrl = 'https://food-calendar.firebaseio.com/';
                var ref = new Firebase(firebaseUrl);
                var dateRef = $firebase(ref.child('days').child(day)).$asArray(); //inside child used to hold the value of $scope.date
 
                dateRef.$loaded().then(function () {
                    dateRef.$add($scope.thirdId);
                    // console.log(dateRef)
                    $scope.recipes = dateRef;
                });
 
            }
 
        })
 
    };
   
   $scope.loadRecipes = function (test) {
   	console.log(test)
                var firebaseUrl = 'https://food-calendar.firebaseio.com/';
                var ref = new Firebase(firebaseUrl);
                var dateRef = $firebase(ref.child('dates').child('monday')).$asArray();
             
                dateRef.$loaded().then(function (results) {
                    // console.log(results)
                    // console.log(dateRef)
                  homeService.getRecipe(results[0].$value).then(function (data) {
                    // console.log(data[2])
                    $scope.image = data[2] });
           
	 });
 }
 




});
 
            // {firstIngredients:test[0], firstInstructions: test[1], firstImage: test[2],
            //                      firstServings: test[3], firstTime: test[4], firstTitle: test[5],
            //                      firstReviews: test[6], firstStarRating: test[7]}
            //.then(function(data) {
            //      console.log('data: ', data);
            // });
            // newFriend.status = "cool";
            // $scope.friends.$add(newFriend);
            // $scope.newFriend = '';
            // {firstIngredients:test[0], firstInstructions: test[1], firstImage: test[2],
            //      firstServings: test[3], firstTime: test[4], firstTitle: test[5],
            //      firstReviews: test[6], firstStarRating: test[7]}
 
 
            // homeService.getRecipe(second).then(function (test) {
 
            //     console.log(test);
            //     $scope.secondIngredients = test[0];
            //     $scope.secondInstructions = test[1];
            //     $scope.secondImage = test[2];
            //     if(test[2] === null) {
            //      	$scope.secondImage = "http://redirect.bigoven.com/pics/rs/256/recipe-no-image.jpg";
            //      }
            //     $scope.secondServings = test[3];
            //     $scope.secondTime = test[4];
            //     $scope.secondTitle = test[5];
            //     $scope.secondReviews = test[6];
            //     $scope.secondStarRating = test[7];
            // });
 
 
            // homeService.getRecipe($scope.thirdId).then(function (test) {
 	
            //     console.log(test[2]);
            //     $scope.thirdIngredients = test[0];
            //     $scope.thirdInstructions = test[1];

            //     $scope.thirdImage = test[2];
            //      if(test[2] === null) {
            //      	$scope.thirdImage = "http://redirect.bigoven.com/pics/rs/256/recipe-no-image.jpg";
            //      }
            //     $scope.thirdServings = test[3];
            //     $scope.thirdTime = test[4];
            //     $scope.thirdTitle = test[5];
            //     $scope.thirdReviews = test[6];
            //     $scope.thirdStarRating = test[7];
            // })
 
 