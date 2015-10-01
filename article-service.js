app.service('articles', function($http){
	this.get = function(){
		return $http.get('http://localhost:3000/posts');
	}

	this.post = function(article){
		return $http.post('http://localhost:3000/posts', article);
	}
})
