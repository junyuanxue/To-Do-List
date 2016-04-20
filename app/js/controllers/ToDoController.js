toDoApp.controller('ToDoController', [function() {

  var self = this

  self.todos = [{text:'Cuddle Sunfish',completed: true},
                {text:'Meditate',completed: false}];

  self.addToDo = function(toDoText) {
    self.todos.push({text:toDoText,completed: false});
  };

  self.removeToDo = function() {
    self.todos.pop();
  }

}]);
