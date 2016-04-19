describe('ToDoController', function() {
  beforeEach(module('ToDoApp'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoController');
  }));

  it('initialises with an array of toDos', function() {
    var toDos = [{ text: "ToDo1", completed: true }, { text: "ToDo2", completed: false }]
    expect(ctrl.toDos).toEqual(toDos);
  });

  it('add a new todo', function() {
    var initialCount = ctrl.toDos.length;
    ctrl.addToDo("New Task");
    expect(ctrl.toDos.length).toEqual(initialCount + 1);
  });

  it('removes the last todo', function() {
    var initialCount = ctrl.toDos.length;
    ctrl.removeToDo();
    expect(ctrl.toDos.length).toEqual(initialCount - 1);
  });

});
