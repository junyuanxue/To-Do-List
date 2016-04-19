describe('Todos tracker', function() {
  it('has a title', function() {
    browser.get('/app/');
    expect(browser.getTitle()).toEqual('Todos App');
  })
});
