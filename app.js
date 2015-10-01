var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/");

	$stateProvider
		.state('home', {
			url: "/",
			templateUrl: "modules/home/home.html"
		})
		.state('posts', {
			url: "/posts",
			templateUrl: "modules/posts/posts.html",
			controller: "posts"
		})
		.state('compose', {
			url: "/compose",
			templateUrl: "modules/compose/compose.html",
			controller: "compose"
		})
});


