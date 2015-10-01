app.controller('posts', function($scope, articles){
	articles.get().then(function(data){
		$scope.posts = data.data;
	})
})
