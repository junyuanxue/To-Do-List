ToDoApp.service("ToDoService", ["$http", "ToDoFactory", function($http, ToDoFactory) {
  var self = this;

  self.getAll = function () {
    return $http.get("http://quiet-beach-24792.herokuapp.com/todos.json").then(_handleResponseFromApi);
  };

  function _handleResponseFromApi(response) {
    // CAN ALSO USE FOREACH:
    // var todos = [];
    // response.data.forEach(function(toDoData) {
    //   todos.push(new ToDoFactory(toDoData.text, toDoData.completed));
    // });
    // return todos;

    return response.data.map(function(toDoData) {
      return new ToDoFactory(toDoData.text, toDoData.completed);
    });
  };
}]);
