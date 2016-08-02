describe('<%= _.camelize(name) %>', function() {

  beforeEach(angular.mock.module('<%= appname %>'));

  var $componentController;

  beforeEach(inject(function(_$componentController_) {
    $componentController = _$componentController_;
  }));

  it('should ...', function() {

    /* 
    var bindings = {};
    var injectionOverrides = {};
    var ctrl = $componentController('<%= _.camelize(name) %>', injectionOverrides, bindings);
    ... now test ctrl ...
    */

  });
});