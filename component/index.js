'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var cgUtils = require('../utils.js');
var _ = require('underscore');
_.str = require('underscore.string');
_.mixin(_.str.exports());
var chalk = require('chalk');
var path = require('path');
var url = require('url');

var ComponentGenerator = module.exports = function ComponentGenerator(args, options, config) {

    cgUtils.getNameArg(this,args);

    yeoman.generators.Base.apply(this, arguments);

};

util.inherits(ComponentGenerator, yeoman.generators.Base);

ComponentGenerator.prototype.askFor = function askFor() {
    var cb = this.async();

    var prompts = [
        {
            name: 'route',
            message: 'Enter your route url (i.e. /my-comp/:id).  If you don\'t want a route added for you, leave this empty.'
        }
    ];

    cgUtils.addNamePrompt(this,prompts,'component');

    this.prompt(prompts, function (props) {
        if (props.name){
            this.name = props.name;
        }
         this.route = url.resolve('',props.route);
        cgUtils.askForModuleAndDir('component',this,true,cb);
    }.bind(this));

};

ComponentGenerator.prototype.files = function files() {

    this.htmlPath = this.name + '.html';

    cgUtils.processTemplates(this.name,this.dir,'component',this,null,null,this.module);

    if (this.route && this.route.length > 0){
        cgUtils.injectComponentRoute(this.module.file,this.config.get('uirouter'),this.name,this.route,this);
    }

};
