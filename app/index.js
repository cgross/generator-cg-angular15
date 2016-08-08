'use strict';
var path = require('path');
var yeoman = require('yeoman-generator');
var htmlWiring = require('html-wiring');
var cgUtils = require('../utils.js');
var _s = require('underscore.string');

module.exports = yeoman.Base.extend({

    constructor: function() {
        yeoman.Base.apply(this, arguments);
        this.pkg = JSON.parse(htmlWiring.readFileAsString(path.join(__dirname, '../package.json')));
        this._s = _s;
    },

    prompting: function() {
        var cb = this.async();

        var prompts = [{
            name: 'appname',
            message: 'What would you like the angular app/module name to be?',
            default: path.basename(process.cwd())
        }];

        this.prompt(prompts).then(function (props) {
            this.appname = props.appname;
            cb();
        }.bind(this));
   
        //maybe add ui router support
        this.uirouter = false;
        this.routerJs = 'bower_components/angular-route/angular-route.js';
        this.routerModuleName = 'angular-route';
        this.routerViewDirective = 'ng-view';
        this.config.set('uirouter',this.uirouter);

    },

    install: function() {

        this.directory('skeleton/','./'); 
        
        this.config.set('modalDirectory','modal/');
        this.config.set('directiveDirectory','directive/');
        this.config.set('filterDirectory','filter/');
        this.config.set('serviceDirectory','service/');
        this.config.set('componentDirectory','component/');
        var inject = {
            ts: {
                file: 'index.ts',
                template: 'import \'./<%= filename %>\';',
                relativeToModule: true
            },
            scss: {
                relativeToModule: true,
                file: 'index.scss',
                marker: cgUtils.SCSS_MARKER,
                template: '@import "<%= filename.substring(0,filename.lastIndexOf(\'.\')) %>";'
            }
        };
        this.config.set('inject',inject);
        this.config.save();
        this.installDependencies({ bower: false, callback: () => {
            this.spawnCommandSync('typings', ['install']);
        } });        
    }

});

