describe('Todos tracker', function() {
  it('has a title', function() {
    browser.get('/app/');
    expect(browser.getTitle()).toEqual('Todos App');
  });
  it('has a todo', function() {
    browser.get('/app/');
    var toDo = $('#toDo');
    expect(toDo.getText()).toEqual("ToDo1");
  });
});
