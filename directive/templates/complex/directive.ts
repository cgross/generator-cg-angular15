import * as angular from 'angular';

angular.module('<%= appname %>').directive('<%= _s.camelize(name) %>', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {

        },
        template: require('./<%= htmlPath %>'),
        link: class <%= _s.capitalize(_s.camelize(name)) %> {

            constructor(scope: ng.IScope, instanceElement: ng.IAugmentedJQuery, instanceAttributes: ng.IAttributes, controller: {}, transclude: ng.ITranscludeFunction) {
                            
            }
        }
    };
});
