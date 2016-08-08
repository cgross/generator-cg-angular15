import * as angular from 'angular';

angular.module('<%= appname %>').component('<%= _s.camelize(name) %>', {
    template: require('./<%= htmlPath %>'),
    bindings: {

    },
    controller: class <%= _s.capitalize(_s.camelize(name)) %>Ctrl {

        constructor() {

        }
    }
});
