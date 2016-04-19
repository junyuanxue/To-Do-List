ToDoApp.factory('ToDoFactory', function() {
  var ToDo = function(text, status) {
    this.text = text;
    this.completed = status || false;
    // this.completed = (typeof status !== "undefined") ? status : false;
  }

  ToDo.prototype.complete = function() {
    this.completed = true;
  }
  return ToDo;
});
