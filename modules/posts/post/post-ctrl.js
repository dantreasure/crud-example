app.controller('post', function($scope, $stateParams, articles){
	$scope.loading = true;

	articles.getOne($stateParams.id).then(function(data){
		$scope.loading = false;
		$scope.post = data.data;
	})
})
