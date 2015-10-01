app.controller('posts', function($scope, articles){
	$scope.loading = true;

	articles.get().then(function(data){
		$scope.loading = false;
		$scope.posts = data.data;
	});

	$scope.delete = function(id){
		articles.remove(id).then(function(){
			$scope.posts.forEach(function(el,idx){
				if(el.id === id){
					$scope.posts.splice(idx, 1);
				}
			})
		})
	}
})
