import * as angular from 'angular';

angular.module('<%= appname %>').directive('<%= _s.camelize(name) %>', function() {
    return {
        restrict: 'A',
        link: class <%= _s.capitalize(_s.camelize(name)) %> {

            constructor(scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, controller: {}, transclude: ng.ITranscludeFunction) {
                            
            }
        }
    };
});