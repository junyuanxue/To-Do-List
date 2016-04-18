describe('Todo app', function(){
  it('displays hello world', function(){
    browser.get('/app');
    expect(browser.getTitle()).toEqual('Todos App');
  });
});
