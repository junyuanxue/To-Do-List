describe('ToDoFactory', function() {
  beforeEach(module('toDoApp'));

  var toDo;

  beforeEach(inject(function(ToDoFactory) {
    toDo = new ToDoFactory("Cuddle Fishy");
  }));

  it('has todo text', function() {
    expect(toDo.text).toEqual("Cuddle Fishy");
  });

  it('is not completed by default', function() {
    expect(toDo.completed).toBe(false);
  });

  it('completes a todo', function() {
    toDo.complete();
    expect(toDo.completed).toBe(true);
  });
});
