angular
  .module("toDoApp")
  .factory("ToDoFactory", [function() {
    function ToDo(toDoText, status) {
      this.text = toDoText;
      this.completed = status || false;
    };

    ToDo.prototype.changeStatus = function() {
      this.completed = !this.completed;
    };
    
    return ToDo;
  }]);
