describe('Todo app', function(){
  it('displays the title', function(){
    browser.get('/app');
    expect(browser.getTitle()).toEqual('Todos App');
  });

  it('lists a todo', function() {
    browser.get('/app');

    var toDoList = element.all(by.repeater('todo in controller.todos'));
    expect(toDoList.get(0).getText()).toEqual('Feck off Protractor!');
  });
});
