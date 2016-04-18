toDoApp.service('toDoFetcher', ['$http', function($http) {
  var self = this;

  self.index = function() {
    var todos = [];
    self._fetchTodosFromApi(todos);
    return todos;
  };

  self._fetchTodosFromApi = function(todos) {
    $http.get('http://quiet-beach-24792.herokuapp.com/todos.json')
      .then(function(resp) {
        self._handleResponseFromApi(resp.data, todos);
      }, function(err) {});
  };

  self._handleResponseFromApi = function(data, todos) {
    for(var i = 0; i < data.length; i++) {
      todos.push(new ToDo(data[i].text));
    }
  };
}]);
