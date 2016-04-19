describe("ToDoController", function() {
  beforeEach(module("ToDoApp"));

  var ctrl, ToDoFactory, httpBackend;
  var toDoData = [{text: "To Do 1", completed: true}, {text: "To Do 2", completed: false}];

  beforeEach(inject(function($httpBackend, $controller, _ToDoFactory_) {
    ctrl = $controller("ToDoController");
    ToDoFactory = _ToDoFactory_;
    httpBackend = $httpBackend;

    httpBackend.expectGET("http://quiet-beach-24792.herokuapp.com/todos.json").respond(toDoData);
    httpBackend.flush();
  }));

  it("initialises with several toDos", function() {
    var toDo1 = new ToDoFactory("To Do 1", true);
    var toDo2 = new ToDoFactory("To Do 2", false);
    expect(ctrl.toDos).toEqual([toDo1, toDo2]);
  });

  it("add a new todo", function() {
    var initialCount = ctrl.toDos.length;
    ctrl.addToDo("New Task");
    var toDo = new ToDoFactory("New Task");
    expect(ctrl.toDos.pop()).toEqual(toDo);
  });

  it("removes the last todo", function() {
    var initialCount = ctrl.toDos.length;
    ctrl.removeToDo();
    expect(ctrl.toDos.length).toEqual(initialCount - 1);
  });

});
