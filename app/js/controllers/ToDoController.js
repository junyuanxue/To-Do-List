toDoApp.controller('ToDoController', [function () {
  var self = this;

  this.toDos = [
    { text: "Feck off Protractor!", completed: true },
    { text: "Feck off Karma!", completed: false }
  ];

  self.addToDo = function (toDoText) {
    self.toDos.push({ text: toDoText, completed: false });
  };

  self.removeToDo = function () {
    self.toDos.pop();
  };
}]);
