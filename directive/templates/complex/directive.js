var angular = require('angular');

angular.module('<%= appname %>').directive('<%= _.camelize(name) %>', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {

        },
        template: require('./<%= htmlPath %>'),
        link: function(scope, element, attrs, ctrl) {


        }
    };
});
