var app = angular.module('theHomeLife')


app.service('homeService', function($http, $q, $firebase) {
  
// var test = this


this.getData = function(userSearch) {
	var deferred = $q.defer()

		$http({
			method:'GET',
			url:'http://api.bigoven.com/recipes?title_kw=' + userSearch + '&pg=1&rpp=20&api_key=dvx51ehi7INBAt70is6nz04gOvJmD4lt'
		}).then(function(results) {
			// console.log(results)
				var recipeIdArr = [results.data.Results[0].RecipeID, results.data.Results[1].RecipeID,results.data.Results[2].RecipeID];

			deferred.resolve(recipeIdArr)
			
			})
				return deferred.promise

}

	this.getRecipe = function(recipeID) {
	 	// console.log(recipeID)
	 	var deferred = $q.defer()
		
		$http({
			method:'GET',
			url:'http://api.bigoven.com/recipe/' + recipeID + '?api_key=dvx51ehi7INBAt70is6nz04gOvJmD4lt'

		}).then(function(recipeResults) {
			console.log(recipeResults)
  


			var firstRecipeResultsArr = 
		   [recipeResults.data.Ingredients, recipeResults.data.Instructions, 
			recipeResults.data.ImageURL, recipeResults.data.YieldNumber, 
			recipeResults.data.TotalMinutes, recipeResults.data.Title, 
			recipeResults.data.ReviewCount, recipeResults.data.StarRating, recipeResults.data.WebURL, recipeResults.data.RecipeID];
			
				deferred.resolve(firstRecipeResultsArr)
			})
				return deferred.promise
	}

	this.loadRecipes = function(day) {
		var deferred = $q.defer() 
		var firebaseUrl = 'https://food-calendar.firebaseio.com/';
	    var ref = new Firebase(firebaseUrl);
	    var dateRef = $firebase(ref.child(day)).$asArray();
	                
        dateRef.$loaded().then(function (results) {
              var recipeId = results[0].$value;
              console.log(recipeId);
              deferred.resolve(recipeId);
		})
        return deferred.promise;
	};


	this.loadFavorites = function(day) {
		var deferred = $q.defer() 
		var firebaseUrl = 'https://food-calendar.firebaseio.com/';
	    var ref = new Firebase(firebaseUrl);
	    var dateRef = $firebase(ref.child(day)).$asArray();
	                
        dateRef.$loaded().then(function (results) {
        	console.log(results.$value)
              var recipeId = []
              for (var i = 0; i < results.length; i++) {
              	recipeId.push(results[i].$value)
              };
          
           console.log(recipeId)
         	deferred.resolve(recipeId)
		})
        return deferred.promise
	};
this.removeFavorite = function() { 
  
    var firebaseUrl = 'https://food-calendar.firebaseio.com/';
    return $firebase(new Firebase(firebaseUrl + 'favorites'))
}
  //   var deferred = $q.defer() 
  //   var firebaseUrl = 'https://food-calendar.firebaseio.com/';
    // var ref = new Firebase(firebaseUrl);
  //   var dateRef = $firebase(ref.child('favorites')).$asArray();
  //   var testerRef = $firebase(ref)
 
  // dateRef.$loaded().then(function(test) {
  //  var tester = dateRef[0].$value;
  //   console.log(tester)
  //    console.log(testerRef)
  // })
    

  
      
      // dateRef.$remove().then(function(test) {
      // console.log(test)
      //     deferred.resolve(test)
      // })
      //   return deferred.promise


  	this.addData = function (day, recipeId) {
                var firebaseUrl = 'https://food-calendar.firebaseio.com/';
                var ref = new Firebase(firebaseUrl);
                var dateRef = $firebase(ref.child(day)).$asArray();
                var dateRemove = $firebase(ref);

                dateRemove.$remove(day) 
 				dateRef.$add(recipeId).then(function(test) {
 					console.log(test)
 				})
 				
	}

		this.addFavorites = function (favorites, recipeId) {
                var firebaseUrl = 'https://food-calendar.firebaseio.com/';
                var ref = new Firebase(firebaseUrl);
                var dateRef = $firebase(ref.child(favorites)).$asArray();
                // var dateRemove = $firebase(ref);
                // console.log(dateRemove.$remove('favorites'))
 				dateRef.$add(recipeId).then(function(test) {
 					console.log(test)
 				})
 				
	}

	

this.removeDay = function(day) { 
    var deferred = $q.defer() 
    var firebaseUrl = 'https://food-calendar.firebaseio.com/';
    var ref = new Firebase(firebaseUrl);
    var dateRef = $firebase(ref);
    console.log(dateRef[2])
    	dateRef.$remove(day).then(function(test) {
			console.log(test)
      		deferred.resolve(test)
    	})
    		return deferred.promise
}



    // this.removeFavorites = function (favorites, recipeId) {
    //             var firebaseUrl = 'https://food-calendar.firebaseio.com/';
    //             var ref = new Firebase(firebaseUrl);
    //             var dateRef = $firebase(ref.child(favorites.[0].$value)).$asArray();
    //             // var dateRemove = $firebase(dateRef);
    //             console.log(dateRef)
    //     dateRef.$remove(recipeId).then(function(test) {
    //       console.log(test)
    //     })
        
  // }
    /*var frac = 1.25;
var num = frac.toString().split(".");
var fracPart = "." + num[1];
console.log(parseFloat(fracPart));*/

// var gcd = function (a, b) {
//     if (b < 0.0000001) return a; // Since there is a limited precision we need to limit the value.
//      return gcd(b, Math.floor(a % b)); // Discard any fractions due to limitations in precision.
// };

// var fraction = 3.66;
// var num = fraction.toString().split(".");
// var fracPart = "." + num[1];

// //fracPart = parseFloat(fracPart)
// var len = fracPart.length - 1;

// var denominator = Math.pow(10, len);

// var numerator = fracPart * denominator;
// var divisor = gcd(numerator, denominator);

// numerator /= divisor;

// denominator /= divisor;

// if(num[0] === "0"){
//     var mixedNum = Math.floor(numerator) + '/' + Math.floor(denominator);
//     if (mixedNum === "33/100") {
//         mixedNum = "1/3";
//     }
//     else if(mixedNum === "33/50") {
//         mixedNum = "2/3";
//     }
// }
// else {
//     var mixedNum = Math.floor(numerator) + '/' + Math.floor(denominator);
//     if (mixedNum === "33/100") {
//         mixedNum = "1/3";
//     }
//     else if(mixedNum === "33/50") {
//         mixedNum = "2/3";
//     }
//     mixedNum = num[0] + " " + mixedNum;
// }

// console.log(mixedNum);


})




