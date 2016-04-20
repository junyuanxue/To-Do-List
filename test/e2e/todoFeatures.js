describe('Todos', function() {
  it('has a title', function() {
    // We don't need to put in the full url as we set baseUrl in our config
    browser.get('/app');
    expect(browser.getTitle()).toEqual('Todos App');
  });


  it ('has 2 tasks', function(){
    browser.get('/app');
    var todos = $$('#todos p');
    expect(todos.get(0).getText()).toEqual('Cuddle Sunfish: completed');
    expect(todos.get(1).getText()).toEqual('Meditate: not completed');
  });

  it ('adds a new todo', function(){
    browser.get('/app');
    $('#todo-text').sendKeys('Let go of Sunfish');
    $('#add-todo').click();
    var todos = $$('#todos p');
    expect(todos.last().getText()).toEqual('Let go of Sunfish: not completed');
  });

  it ('removes the last todo', function(){
    browser.get('/app');
    var todos = $$('#todos p');
    var initalCount = todos.count();
    initalCount.then(function(value){
      $('#remove-todo').click();
      expect(todos.count()).toEqual(value -1);
    });
  });
});
