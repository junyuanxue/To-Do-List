describe('toDoApp', function () {
  it('displays the title', function () {
    browser.get('/app');
    expect(browser.getTitle()).toEqual('Todos App');
  });

  it('lists todos', function () {
    browser.get('/app');
    var toDos = $$("#todos p");

    expect(toDos.get(0).getText()).toEqual("Feck off Protractor!: completed");
    expect(toDos.get(1).getText()).toEqual("Feck off Karma!: not completed");
  });

  it("adds todos", function () {
    browser.get("/app");
    $("#new-todo-name").sendKeys("New ToDo");
    $("#add-todo").click();

    var todo = $$("#todos p").last().getText();
    expect(todo).toEqual("New ToDo: not completed");
  });

  it("removes the last todo", function () {
    browser.get("/app");
    var toDos = $$("#todos p");
    var initialCount = toDos.count();
    initialCount.then(function (value) {
      $("#remove-todo").click();
      expect(toDos.count()).toEqual(value - 1);
    });
  });
});
