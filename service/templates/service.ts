import * as angular from 'angular';

export class <%= _s.capitalize(_s.camelize(name)) %> {

}

angular.module('<%= appname %>').service('<%= _s.camelize(name) %>',<%= _s.capitalize(_s.camelize(name)) %>);