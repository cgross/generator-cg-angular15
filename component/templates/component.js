var angular = require('angular');

angular.module('<%= appname %>').component('<%= _.camelize(name) %>', {
    template: require('./<%= htmlPath %>'),
    bindings: {

    },
    controller: function() {


    }
});
