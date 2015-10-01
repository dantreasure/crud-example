app.controller('compose', function($scope, articles){
	$scope.article = {};

	$scope.cancel = function(){
		$scope.article = {};
	}

	$scope.submit = function(){
		articles.post($scope.article).then(function(){
			$scope.cancel();
		})
	}
})
