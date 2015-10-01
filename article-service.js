app.service('articles', function($http){
	this.get = function(){
		return $http.get('http://localhost:3000/posts');
	}

	this.getOne = function(id){
		return $http.get('http://localhost:3000/posts/' + id);
	}

	this.post = function(article){
		return $http.post('http://localhost:3000/posts', article);
	}

	this.remove = function(id){
		return $http.delete('http://localhost:3000/posts/' + id);
	}
})
