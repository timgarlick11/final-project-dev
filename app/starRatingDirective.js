var app = angular.module('theHomeLife')

app.directive('starRating', function () {
    return {
        restrict: 'EA',
        template:
            "<div style='display: inline-block; margin: 0px; padding: 0px; cursor:pointer' ng-repeat='idx in maxRatings track by $index'> \
				<img ng-src='{{(rating <= $index) && \"http://www.codeproject.com/script/ratings/images/star-empty-lg.png\" || \"http://www.codeproject.com/script/ratings/images/star-fill-lg.png\" }}'></img> \
            </div>",
        scope: {
        	rating: '='
        },
        controller: function ($scope) {
            $scope.maxRatings = [];

            for (var i = 1; i <= 5; i++) {
                $scope.maxRatings.push({});
            };

            $scope.click = function (param) {
                $scope.rating = param + 1;
            };
        }
    };
});

// ng-click=\"click($index)\"