import * as angular from 'angular';

angular.module('<%= appname %>').filter('<%= _s.camelize(name) %>', function() {
    return function(input,arg) {
        return 'output';
    };
});