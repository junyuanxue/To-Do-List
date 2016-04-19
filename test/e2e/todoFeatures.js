describe('Todos tracker', function() {
  it('has a title', function() {
    browser.get('/app');

    expect(browser.getTitle()).toEqual('Todos App');
  });

  it('lists multiple todos', function() {
    browser.get('/app');
    var toDos = $$('#todos ul li');

    expect(toDos.get(0).getText()).toMatch("To Do 1: completed");
    expect(toDos.get(1).getText()).toMatch("To Do 2: not completed");
  });

  it('adds a new todo', function() {
    browser.get('/app');
    $('#new-todo-text').sendKeys("New Task")
    $('#add-todo').click();
    var toDos = $$('#todos ul li');

    expect(toDos.last().getText()).toMatch("New Task: not completed");
  });

  it('removes the last todo', function() {
    browser.get('/app');
    var toDos = $$('#todos ul li');
    var initialCount = toDos.count();
    initialCount.then(function(value) {
      $('#remove-todo').click();

      expect(toDos.count()).toEqual(value - 1);
    });
  });

  it("can mark a todo as complete", function () {
    browser.get("/app");
    var todo = $$("#todos ul li").last();
    todo.element(by.css(".complete")).click();

    expect(todo.getText()).toMatch("To Do 2: completed");
  })
});
