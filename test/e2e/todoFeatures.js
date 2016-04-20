describe('Todos', function() {
  it('has a title', function() {
    // We don't need to put in the full url as we set baseUrl in our config
    browser.get('/app');
    expect(browser.getTitle()).toEqual('Todos App');
  });

  it('has todo1', function(){
    browser.get('/app');
    var todo = $('#todo')
    expect(todo.getText()).toEqual('ToDo1')
  });
});
