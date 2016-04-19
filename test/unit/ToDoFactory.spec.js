describe("ToDoFactory", function() {
  beforeEach(module("ToDoApp"));

  var toDo;

  beforeEach(inject(function(ToDoFactory){
    toDo = new ToDoFactory("New Task");
  }));

  it("has text", function() {
    expect(toDo.text).toEqual("New Task");
  });

  it("is not completed by default", function() {
    expect(toDo.completed).toBe(false);
  });

  it("completes the task", function() {
    toDo.complete();
    expect(toDo.completed).toBe(true);
  });

});
