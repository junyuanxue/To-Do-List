ToDoApp.controller('ToDoController', ['ToDoFactory', function(ToDoFactory) {
  var self = this;

  self.toDos = [new ToDoFactory("To Do 1", true), new ToDoFactory("To Do 2")]

  self.addToDo = function(toDoText, status) {
    self.toDos.push(new ToDoFactory(toDoText, status));
  };

  self.removeToDo = function() {
    self.toDos.pop();
  };
}]);
