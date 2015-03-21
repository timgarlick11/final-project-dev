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
              
           var recipeId = ((results[results.length -1]).$value);
           console.log(recipeId)
         	deferred.resolve(recipeId)
		})
        return deferred.promise
	};


	this.loadFavorites = function(day) {
		var deferred = $q.defer() 
		var firebaseUrl = 'https://food-calendar.firebaseio.com/';
	    var ref = new Firebase(firebaseUrl);
	    var dateRef = $firebase(ref.child(day)).$asArray();
	                
        dateRef.$loaded().then(function (results) {
        	console.log(results)
              var recipeId = []
              for (var i = 0; i < results.length; i++) {
              	recipeId.push(results[i].$value)
              };
          
           console.log(recipeId)
         	deferred.resolve(recipeId)
		})
        return deferred.promise
	};

  	this.addData = function (day, recipeId) {
                var firebaseUrl = 'https://food-calendar.firebaseio.com/calendar';
                var ref = new Firebase(firebaseUrl);
                var dateRef = $firebase(ref.child(day)).$asArray();
                var dateRemove = $firebase(ref);
                dateRemove.$remove(day) 
 				dateRef.$add(recipeId).then(function(test) {
 					console.log(test)
 				})
 				
	}
    
    this.addFavorites = function (favorites, recipeId) {
		var favoritesUrl = 'https://food-calendar.firebaseio.com/';
        var ref = new Firebase(favoritesUrl);
        var favRef = $firebase(ref.child(favorites)).$asArray();
        favRef.$add(recipeId).then(function(test) {
        	console.log(test)
        })


    }

	

this.removeDay = function(day) { 
    var deferred = $q.defer() 
    var firebaseUrl = 'https://food-calendar.firebaseio.com/';
    var ref = new Firebase(firebaseUrl);
    var dateRef = $firebase(ref);
    	
    	dateRef.$remove(day).then(function(test) {
			console.log(test)
      		deferred.resolve(test)
    	})
    		return deferred.promise
}
// var recId;
//  this.setId = function(newId) {
//  	recId = newId;
//  }
//  this.getId = function() {
//  	return recId;
//  }

   // this.loadRecipes = function (day) {
   			
   //      var firebaseUrl = 'https://food-calendar.firebaseio.com/';
   //      var ref = new Firebase(firebaseUrl);
   //      var dateRef = $firebase(ref.child(day)).$asArray();

   //          dateRef.$loaded().then(function (results) {
                 	
   //              var recipeId = ((results[results.length -1]).$value)
   //              console.log(recipeId)
   //              return recipeId
                 		
   //      	})
			
   //  }


    


})


// this.firebaseData = function() {
// 	var firebaseUrl = 'https://food-calendar.firebaseio.com/recipes';
// 	var ref = new Firebase(firebaseUrl);
// 	var sync = $firebase(ref);
// 	return sync;

// }

               //  var firebaseUrl = 'https://food-calendar.firebaseio.com/';
               //  var ref = new Firebase(firebaseUrl);
               //  var dateRef = $firebase(ref.child(day)).$asArray();
                    
               //      dateRef.$loaded().then(function (results) {
                        
               //          var recipeId = ((results[results.length -1]).$value)
               //          console.log(recipeId)
               
                        
               // })

