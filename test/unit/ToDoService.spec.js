describe('ToDoService', function(){
  beforeEach(module('toDoApp'));

  var httpBackend, ToDoFactory, ToDoService
  var toDoData = [{text:'Cuddle something', completed:false},{text:'Wakeup',completed:false}]

  beforeEach(inject(function(_ToDoService_, _ToDoFactory_, $httpBackend){
    ToDoService = _ToDoService_;
    ToDoFactory = _ToDoFactory_;
    httpBackend = $httpBackend;
  }));

  it('fetches the api data and processes todos', function(){
    httpBackend.expectGET('http://quiet-beach-24792.herokuapp.com/todos.json').respond(toDoData);
    var toDo1 = new ToDoFactory('Cuddle something');
    var toDo2 = new ToDoFactory('Wakeup');

    ToDoService.getAll().then(function(toDoData){
      expect(toDoData).toEqual([toDo1,toDo2]);
    });

    httpBackend.flush();
  })
});
