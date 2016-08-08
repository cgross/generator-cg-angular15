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

        var prompts = [];

        cgUtils.addNamePrompt(this,prompts,'service');

        this.prompt(prompts).then(function (props) {
            if (props.name){
                this.name = props.name;
            }
            cgUtils.askForModuleAndDir('service',this,false,cb);
        }.bind(this));
    },

    writing: function() {
        cgUtils.processTemplates(this.name,this.dir,'service',this,null,null,this.module);
    },  

});
