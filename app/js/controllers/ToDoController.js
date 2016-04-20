angular
  .module("toDoApp")
  .controller("ToDoController", ["$http", "ToDoService", "ToDoFactory", function($http, ToDoService, ToDoFactory) {
    var self = this;

    self.todos = [];

    ToDoService.getAll().then(function(toDoData) {
      self.todos = toDoData;
    });

    self.addToDo = function(toDoText) {
      self.todos.push(new ToDoFactory(toDoText));
    };

    self.removeToDo = function() {
      self.todos.pop();
    }
  }]);
