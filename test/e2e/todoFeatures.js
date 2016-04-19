describe('Todos tracker', function() {
  it('has a title', function() {
    browser.get('/app');
    expect(browser.getTitle()).toEqual('Todos App');
  });

  it('lists multiple todos', function() {
    browser.get('/app');
    var toDos = $$('#toDo ul li');
    expect(toDos.get(0).getText()).toEqual("ToDo1: completed");
    expect(toDos.get(1).getText()).toEqual("ToDo2: not completed");
  });

  it('adds a new todo', function() {
    browser.get('/app');
    $('#new-todo-text').sendKeys("New Task")
    $('#add-todo').click();
    var toDos = $$('#toDo ul li');
    expect(toDos.last().getText()).toEqual("New Task: not completed");
  });

  it('removes the last todo', function() {
    browser.get('/app');
    var toDos = $$('#toDo ul li');
    var initialCount = toDos.count();
    initialCount.then(function(value) {
      $('#remove-todo').click();
      expect(toDos.count()).toEqual(value - 1);
    });
  });
});
