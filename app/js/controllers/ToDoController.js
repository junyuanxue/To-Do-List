ToDoApp.controller('ToDoController', ['ToDoFactory', function(ToDoFactory) {
  var self = this;

  self.toDos = [
    { text: "ToDo1", completed: true },
    { text: "ToDo2", completed: false }
  ]

  self.addToDo = function(toDoText) {
    self.toDos.push({ text: toDoText, completed: false })
  };

  self.removeToDo = function() {
    self.toDos.pop();
  };
}]);
