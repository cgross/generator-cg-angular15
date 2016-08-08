'use strict';
var util = require('util');
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
        this.uirouter = this.config.get('uirouter');
        this.routerModuleName = this.uirouter ? 'angular-ui-router' : 'angular-route';
    },

    prompting: function() {
        var cb = this.async();
        var that = this;

        var prompts = [
            {
                name:'dir',
                message:'Where would you like to create the module (must specify a subdirectory)?',
                default: function(data){
                    return path.join(that.name || data.name,'/');
                },
                validate: function(value) {
                    value = _.str.trim(value);
                    if (_.isEmpty(value) || value[0] === '/' || value[0] === '\\') {
                        return 'Please enter a subdirectory.';
                    }
                    return true;
                }
            }
        ];

        cgUtils.addNamePrompt(this,prompts,'module');

        this.prompt(prompts).then(function (props) {
            if (props.name){
                this.name = props.name;
            }        
            this.dir = path.join(props.dir,'/');
            cb();
        }.bind(this));
    },

    writing: function() {
        var module = cgUtils.getParentModule(path.join(this.dir,'..'));

        var root = path.dirname(module.file);
        var requireFile = this.dir + 'index.ts';
        requireFile = path.posix.relative(root,path.posix.resolve(process.cwd(), requireFile));

        module.dependencies.modules.push("require('./"+requireFile+"')");
        module.save();
        this.log.writeln(chalk.green(' updating') + ' %s',path.basename(module.file));

        cgUtils.processTemplates(this.name,this.dir,'module',this,null,null,module);

        var modules = this.config.get('modules');
        if (!modules) {
            modules = [];
        }
        modules.push({name:_.camelize(this.name),file:path.join(this.dir,this.name + '.ts')});
        this.config.set('modules',modules);
        this.config.save();        
    },    

});