var app = angular.module('theHomeLife', ['ngRoute', 'firebase', 'datePicker', 'starApp'])

app.config(function($routeProvider ) {
// $httpProvider.defaults.headers.common('Access-Control-Allow-Headers') = *;
// $httpProvider.interceptors.push('httpRequestInterceptor')

$routeProvider.when('/', {

	templateUrl:'app/home/homeTmpl.html',
	controller: 'homeController'

}).when('/about', {
	templateUrl:'app/about/aboutTmpl.html',
	controller: 'aboutController'

}).when('/contact', {
	templateUrl: 'app/contact/contactTmpl.html',
	controller: 'contactController'

}).otherwise({

	redirectTo:'/'
})



})

