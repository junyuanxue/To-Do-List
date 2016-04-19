ToDoApp.controller("ToDoController", ["ToDoService","ToDoFactory", function(ToDoService, ToDoFactory) {
  var self = this;

  ToDoService.getAll().then(function(toDos) {
    self.toDos = toDos;
  });

  self.addToDo = function(toDoText, status) {
    self.toDos.push(new ToDoFactory(toDoText, status));
  };

  self.removeToDo = function() {
    self.toDos.pop();
  };
}]);
