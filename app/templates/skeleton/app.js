var angular = require('angular');

angular.module('<%= _.camelize(appname) %>', [
    require('angular-ui-bootstrap'), 
    require('<%= routerModuleName %>'), 
    require('angular-animate')
]);
<% if (!uirouter) { %>
angular.module('<%= _.camelize(appname) %>').config(function($routeProvider) {

    /* Add New Routes Above */
    $routeProvider.otherwise({redirectTo:'/home'});

});
<% } %><% if (uirouter) { %>
angular.module('<%= _.camelize(appname) %>').config(function($stateProvider, $urlRouterProvider) {

    /* Add New States Above */
    $urlRouterProvider.otherwise('/home');

});
<% } %>

