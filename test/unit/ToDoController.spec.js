describe('ToDoController', function () {
  beforeEach(module('toDoApp'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoController');
  }));

  it('initialises with several todos', function () {
    var toDos = [
      { text: "Feck off Protractor!", completed: true },
      { text: "Feck off Karma!", completed: false }
    ];
    expect(ctrl.toDos).toEqual(toDos);
  });

  it("adds a new todo", function () {
    ctrl.addToDo("New ToDo");

    var toDo = { text: "New ToDo", completed: false };
    expect(ctrl.toDos.pop()).toEqual(toDo);
  })

  it("removes the last todo", function () {
    var initialCount = ctrl.toDos.length;
    ctrl.removeToDo();
    expect(ctrl.toDos.length).toEqual(initialCount - 1);
  });
});
