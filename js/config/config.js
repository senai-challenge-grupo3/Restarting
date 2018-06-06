angular.module('restarting', ['ngRoute'])
.config(function($routeProvider) {
	$routeProvider
	.when("/", {
		templateUrl: "view/home.html",
		controller: "homeCtrl"
	});
});