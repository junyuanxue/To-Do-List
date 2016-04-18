toDoApp.controller('ToDoController', function() {
  this.todos = [
    { text: "Throw away banana", completed: true },
    { text: "Squash pineapple", completed: false }];

    this.addToDo = function() {
      this.todos.push({ text: this.toDoText, completed: false });
      this.toDoText = '';
    };

    this.removeToDo = function() {
      this.todos.pop();
    };
});
