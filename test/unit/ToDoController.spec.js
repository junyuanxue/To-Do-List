describe("ToDoController", function() {
  beforeEach(module("toDoApp"));

  var ctrl, ToDoFactory, httpBackend, ToDoService;
  var toDoData = [{ text:"Cuddle something", completed:false },{ text:"Wakeup",completed:false }]

  beforeEach(inject(function($controller, _ToDoFactory_, $httpBackend) {
    ctrl = $controller("ToDoController");
    ToDoFactory = _ToDoFactory_;
    httpBackend = $httpBackend;
    httpBackend.expectGET("http://quiet-beach-24792.herokuapp.com/todos.json").respond(toDoData);
    httpBackend.flush();
  }));

  it("fetches a list of todos from API", function() {
    var toDo1 = new ToDoFactory("Cuddle something");
    var toDo2 = new ToDoFactory("Wakeup");

    expect(ctrl.todos).toEqual([toDo1, toDo2]);
  });

  it("adds a new todo to list", function(){
    ctrl.addToDo("newtask");
    var toDo = new ToDoFactory("newtask");
    expect(ctrl.todos.pop()).toEqual(toDo);
  });

  it("removes a task from list", function(){
    var initalCount = ctrl.todos.length;
    ctrl.removeToDo();
    expect(ctrl.todos.length).toEqual(initalCount - 1);
  });
});
