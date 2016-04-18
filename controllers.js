toDoApp.controller('ToDoController', ["toDoFactory", function(toDoFactory) {

  this.todos = [];

  this.addToDo = function (toDoText) {
    this.todos.push(new ToDo(toDoText));
  };

  this.removeToDo = function () {
    this.todos.pop();
  };
}]);
