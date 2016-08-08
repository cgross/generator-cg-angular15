describe('<%= _s.camelize(name) %>', function() {

  beforeEach(angular.mock.module('<%= appname %>'));

  var scope:ng.IScope,compile:ng.ICompileService;

  beforeEach(inject(function($rootScope:ng.IScope,$compile:ng.ICompileService) {
    scope = $rootScope.$new();
    compile = $compile;
  }));

  it('should ...', function() {

    /* 
    To test your directive, you need to create some html that would use your directive,
    send that through compile() then compare the results.

    var element = compile('<div mydirective name="name">hi</div>')(scope);
    expect(element.text()).toBe('hello, world');
    */

  });
});