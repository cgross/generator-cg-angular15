import {<%= _s.capitalize(_s.camelize(name)) %>} from './<%= name %>.ts';

describe('<%= _s.camelize(name) %>', function() {

  beforeEach(angular.mock.module('<%= appname %>'));

  it('should ...', inject(function(<%= _s.camelize(name) %>:<%= _s.capitalize(_s.camelize(name)) %>) {

    //expect(<%= _s.camelize(name) %>.doSomething()).toEqual('something');

  }));

});
