var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/posts");

	$stateProvider
		.state('posts', {
			url: "/posts",
			templateUrl: "modules/posts/posts.html",
			controller: "posts"
		})
		.state('post',{
			url:"/posts/:id",
			templateUrl: "modules/posts/post/post.html",
			controller: "post"
		})
		.state('compose', {
			url: "/compose",
			templateUrl: "modules/compose/compose.html",
			controller: "compose"
		})
});


