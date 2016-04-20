angular
  .module("toDoApp")
  .service("ToDoService", ["$http", "ToDoFactory", function($http,ToDoFactory){

    this.getAll = function(){
      return $http.get("http://quiet-beach-24792.herokuapp.com/todos.json")
        .then(function(response){
            return _handleResponseFromApi(response.data);
          });
    }

    function _handleResponseFromApi(data) {
      return data.map(function(toDoData){
        return new ToDoFactory(toDoData.text,toDoData.completed);
      });
    };
  }]);
