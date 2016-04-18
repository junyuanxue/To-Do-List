toDoApp.controller('ToDoController', ['toDoFetcher',"toDoFactory", function(toDoFetcher, toDoFactory) {

  this.todos = toDoFetcher.index();

  this.addToDo = function (toDoText) {
    this.todos.push(new ToDo(toDoText));
  };

  this.removeToDo = function () {
    this.todos.pop();
  };
}]);
