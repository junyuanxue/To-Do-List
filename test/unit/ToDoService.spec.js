describe("ToDoService", function () {
  beforeEach(module("ToDoApp"));

  var ToDoService, httpBackend;

  var toDoData = [{ text: "To Do 1", completed: true},
                  {text: "To Do 2", completed: false }];

  beforeEach(inject(function(_ToDoService_, _ToDoFactory_, $httpBackend) {
    ToDoService = _ToDoService_;
    ToDoFactory = _ToDoFactory_;
    httpBackend = $httpBackend;
  }));

  it("fetches a list of todos", function () {
    httpBackend.expectGET("http://quiet-beach-24792.herokuapp.com/todos.json").respond(toDoData);

    var toDo1 = new ToDoFactory("To Do 1", true);
    var toDo2 = new ToDoFactory("To Do 2", false);

    ToDoService.getAll().then(function(toDos) {
      expect(toDos).toEqual([toDo1, toDo2]);
    });

    httpBackend.flush();
  })
});
