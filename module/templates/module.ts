import * as angular from 'angular';

angular.module('<%= _s.camelize(name) %>', [
    require('angular-ui-bootstrap'), 
    require('<%= routerModuleName %>'), 
    require('angular-animate')
]);
<% if (!uirouter) { %>
angular.module('<%= _s.camelize(name) %>').config(function($routeProvider:ng.route.IRouteProvider) {

    /* Add New Routes Above */

});
<% } %><% if (uirouter) { %>
angular.module('<%= _s.camelize(name) %>').config(function($stateProvider) {

    /* Add New States Above */

});
<% } %>
