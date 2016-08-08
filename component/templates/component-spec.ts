describe('<%= _s.camelize(name) %>', function() {

  beforeEach(angular.mock.module('<%= appname %>'));

  var $componentController:ng.IComponentControllerService;

  beforeEach(inject(function(_$componentController_:ng.IComponentControllerService) {
    $componentController = _$componentController_;
  }));

  it('should ...', function() {

    /* 
    var bindings = {};
    var injectionOverrides = {};
    var ctrl = $componentController('<%= _s.camelize(name) %>', injectionOverrides, bindings);
    ... now test ctrl ...
    */

  });
});