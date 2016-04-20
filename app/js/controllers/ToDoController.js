toDoApp.controller('ToDoController', ['ToDoFactory', function(ToDoFactory) {

  var self = this

  self.todos = [new ToDoFactory('Cuddle Sunfish', true),
                new ToDoFactory('Meditate')];

  self.addToDo = function(toDoText) {
    self.todos.push(new ToDoFactory(toDoText));
  };

  self.removeToDo = function() {
    self.todos.pop();
  }

}]);
