var angular = require('angular');

angular.module('<%= _.camelize(name) %>', [
    require('angular-ui-bootstrap'), 
    require('<%= routerModuleName %>'), 
    require('angular-animate')
]);
<% if (!uirouter) { %>
angular.module('<%= _.camelize(name) %>').config(function($routeProvider) {

    /* Add New Routes Above */

});
<% } %><% if (uirouter) { %>
angular.module('<%= _.camelize(name) %>').config(function($stateProvider) {

    /* Add New States Above */

});
<% } %>
