ToDoApp.factory('ToDoFactory', function() {
  var ToDo = function(text) {
    this.text = text;
    this.completed = false;
  }

  ToDo.prototype.complete = function() {
    this.completed = true;
  }
  return ToDo;
});
