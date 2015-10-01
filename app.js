var app = angular.module('app', []);

app.controller('main', function($scope, $http){
	$scope.thinking = false;

	$scope.message = 'howdy'
	$http.get('http://localhost:3000/posts').then(function(data){
		$scope.posts = data.data;
	})

	$scope.delete = function(id){
		$scope.thinking = true;
		$http.delete('http://localhost:3000/posts/' +id).then(function(){
			$scope.thinking = false;
			$scope.posts.forEach(function(el,idx){
				if(el.id === id){
					$scope.posts.splice(idx, 1);
				}
			})
		})
	}
})
