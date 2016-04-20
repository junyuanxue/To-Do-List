describe('ToDoController', function() {
  beforeEach(module('toDoApp'));

  var ctrl, ToDoFactory;

  beforeEach(inject(function($controller, _ToDoFactory_) {
    ctrl = $controller('ToDoController');
    ToDoFactory = _ToDoFactory_;
  }));

  it('initialises with several todos', function() {
    var toDo1 = new ToDoFactory('Cuddle Sunfish', true);
    var toDo2 = new ToDoFactory('Meditate');
    var todos = [toDo1, toDo2];
    expect(ctrl.todos).toEqual(todos);
  });

  it('adds a new todo to list', function(){
    ctrl.addToDo('newtask');
    var toDo = new ToDoFactory('newtask');
    expect(ctrl.todos.pop()).toEqual(toDo);
  });

  it('removes a task from list', function(){
    var initalCount = ctrl.todos.length;
    ctrl.removeToDo();
    expect(ctrl.todos.length).toEqual(initalCount - 1);
  });
});
