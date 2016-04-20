toDoApp.factory('ToDoFactory', [function() {
  function ToDo(toDoText, status) {
    this.text = toDoText;
    this.completed = status || false;
  };

  ToDo.prototype.complete = function() {
    this.completed = true;
  };

  return ToDo;
}]);
