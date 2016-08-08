import * as angular from 'angular';

angular.module('<%= _s.camelize(appname) %>', [
    require('angular-ui-bootstrap'), 
    require('<%= routerModuleName %>'), 
    require('angular-animate')
]);
<% if (!uirouter) { %>
angular.module('<%= _s.camelize(appname) %>').config(function($routeProvider:ng.route.IRouteProvider) {

    /* Add New Routes Above */
    $routeProvider.otherwise({redirectTo:'/home'});

});
<% } %><% if (uirouter) { %>
angular.module('<%= _s.camelize(appname) %>').config(function($stateProvider, $urlRouterProvider) {

    /* Add New States Above */
    $urlRouterProvider.otherwise('/home');

});
<% } %>

