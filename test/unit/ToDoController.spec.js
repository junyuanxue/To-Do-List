describe('ToDoController', function() {
  beforeEach(module('toDoApp'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoController');
  }));

  it('initialises with several todos', function() {
    var todos =[ {text:'Cuddle Sunfish',completed: true},
                  {text:'Meditate',completed: false}]
    expect(ctrl.todos).toEqual(todos);
  });

  it('adds a new todo to list', function(){
    ctrl.addToDo('newtask');
    expect(ctrl.todos.pop()).toEqual({text:'newtask',completed: false});
  });

  it('removes a task from list', function(){
    var initalCount = ctrl.todos.length;
    ctrl.removeToDo();
    expect(ctrl.todos.length).toEqual(initalCount -1);
  })

});
