describe("Todos", function() {
  var mock = require("protractor-http-mock");

  mock([{
    request: {
      path: "http://quiet-beach-24792.herokuapp.com/todos.json",
      method: "GET"
    },
    response: {
      data: [{ text:"Cuddle Sunfish", completed: true },
             { text:"Meditate",completed: false }]
    }
  }]);

  afterEach(function() {
    mock.teardown();
  });

  it("has a title", function() {
    browser.get("/app");
    expect(browser.getTitle()).toEqual("Todos App");
  });

  it ("adds a new todo", function() {
    browser.get("/app");
    $("#todo-text").sendKeys("Let go of Sunfish");
    $("#add-todo").click();
    var todos = $$("#todos p");
    expect(todos.last().getText()).toEqual("Let go of Sunfish: not completed");
  });

  it ("removes the last todo", function() {
    browser.get("/app");
    var todos = $$("#todos p");
    var initalCount = todos.count();
    initalCount.then(function(value){
      $("#remove-todo").click();
      expect(todos.count()).toEqual(value - 1);
    });
  });

  it("completes a todo", function() {
    browser.get("/app");
    var todo = $$("#todos p").last();
    todo.element(by.css(".change-status")).click();
    expect(todo.getText()).toMatch("completed");
  });

  it("clears all completed todos", function() {
    browser.get("/app");
    $("#clear").click();
    var todos = $$("#todos p");
    expect(todos.getText()).not.toContain("completed");
  });
});
