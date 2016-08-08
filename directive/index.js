'use strict';
var yeoman = require('yeoman-generator');
var path = require('path');
var cgUtils = require('../utils.js');
var chalk = require('chalk');
var _ = require('underscore');
var fs = require('fs');

_.str = require('underscore.string');
_.mixin(_.str.exports());

module.exports = yeoman.Base.extend({

    constructor: function() {
        yeoman.Base.apply(this, arguments);
        cgUtils.getNameArg(this);
        this._s = _.str;
    },

    prompting: function() {
        var cb = this.async();

        var prompts = [{
            type:'confirm',
            name: 'needpartial',
            message: 'Does this directive need an external html file (i.e. partial)?',
            default: true
        }];

        cgUtils.addNamePrompt(this,prompts,'directive');

        this.prompt(prompts).then(function (props) {
            if (props.name){
                this.name = props.name;
            }
            this.needpartial = props.needpartial;
            cgUtils.askForModuleAndDir('directive',this,this.needpartial,cb);
        }.bind(this));

    },

    writing: function() {
        var configName = 'directiveSimpleTemplates';
        var defaultDir = 'templates/simple';
        if (this.needpartial) {
            configName = 'directiveComplexTemplates';
            defaultDir = 'templates/complex';
        }

        this.htmlPath = this.name + '.html';

        cgUtils.processTemplates(this.name,this.dir,'directive',this,defaultDir,configName,this.module);

    }

});