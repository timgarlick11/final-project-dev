var datePicker = angular.module('datePicker', []);



datePicker.directive('jqdatepicker', function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, ctrl) {
            $(element).datepicker({
                dateFormat: 'mm-dd-yy',
                onSelect: function(date) {
                    ctrl.$setViewValue(date);
                    ctrl.$render();
                    scope.$apply();
                }
            });
        }
    };
});





// datePicker.directive('jqdatepicker', function () {
//     return {
//         restrict: 'A',
//         require: 'ngModel',
//          link: function (scope, element, attrs, ngModelCtrl) {
//             element.datepicker({
//                 dateFormat: 'DD, d  MM, yy',
//                 onSelect: function (date) {
//                     scope.date = date;
//                     scope.$apply();
//                 }
//             });
//         }
//     };
// });