'use strict';
var yeoman = require('yeoman-generator');
var cgUtils = require('../utils.js');
var _ = require('underscore');
var _s = require('underscore.string');
var chalk = require('chalk');
var path = require('path');
var url = require('url');

module.exports = yeoman.Base.extend({

    constructor: function() {
        yeoman.Base.apply(this, arguments);
        cgUtils.getNameArg(this);
        this._s = _s;
    },

    prompting: function() {
        var cb = this.async();

        var prompts = [
            {
                name: 'route',
                message: 'Enter your route url (i.e. /my-comp/:id).  If you don\'t want a route added for you, leave this empty.'
            }
        ];

        cgUtils.addNamePrompt(this,prompts,'component');

        this.prompt(prompts).then(function (props) {
            if (props.name){
                this.name = props.name;
            }
            this.route = url.resolve('',props.route);
            cgUtils.askForModuleAndDir('component',this,true,cb);
        }.bind(this));

    },

    writing: function() {

        this.htmlPath = this.name + '.html';

        cgUtils.processTemplates(this.name,this.dir,'component',this,null,null,this.module);

        if (this.route && this.route.length > 0){
            cgUtils.injectComponentRoute(this.module.file,this.config.get('uirouter'),this.name,this.route,this);
        }

    }

});
