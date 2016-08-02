#generator-cg-angular15

>Yeoman Generator for Enterprise Angular 1.5 Projects with npm, Webpack, ES6, and SASS.

Features

* Component-Oriented.  Develop using Angular 1.5's new `component()` helper to create component-centric apps.
* Includes a complete Webpack configuration using npm for package management. Modules are loaded via CommonJS's `require()`.
* Use ES6/ES2015.
* Provides a directory structure geared towards large Angular projects.
    * Each component, service, filter, and directive are placed in their own file.
    * All files related to a conceptual unit are placed together.  For example, the controller, HTML, SCSS, and unit test for a component are placed together in the same directory.
* Includes Yeoman subgenerators for components, services, filters, and modules.
* Integrates SASS and includes Bootstrap via the source SCSS files allowing you to reuse Bootstrap vars/mixins/etc.
* Easily Testable - Each sub-generator creates a skeleton unit test.  Unit tests can be run via `npm test`.

Directory Layout
-------------
All subgenerators prompt the user to specify where to save the new files.  Thus you can create any directory structure you desire, including nesting.  The generator will create a handful of files in the root of your project including `index.html`, `app.js`, `app.scss`, etc.  You determine how the rest of the project will be structured.

In this example, the user has chosen to group the app into an `admin` folder, a `search` folder, and a `service` folder.

    index.html ..................... main HTML file
    index.js ....................... main JS file that includes the require()s for the app's components
    index.scss ..................... main SCSS file that includes the @import's for the components' styles
    app.js ......................... angular module initialization and route setup
    app.scss ....................... main app-wide styles
    /search ........................ example search feature folder
      my-filter.js ................. example filter
      my-filter-spec.js ............ example filter unit test
      /search-component ............ example component
        search-component.html ...... example component html
        search-component.js ........ example component configuration/controller
        search-component.scss ...... example component SCSS
        search-component-spec.js ... example component unit test
    /admin ......................... example admin module folder
      admin.js ..................... admin module initialization and route setup
      admin.scss ................... admin module SCSS
      /admin-directive1 ............ angular directives folder
        admin-directive1.js ........ example simple directive
        admin-directive1-spec.js.... example simple directive unit test
      /admin-directive2 ............ example complex directive (contains external partial)
        admin-directive2.js ........ complex directive javascript
        admin-directive2.html ...... complex directive partial
        admin-directive2.scss ...... complex directive SCSS
        admin-directive2-spec.js ... complex directive unit test
    /service ....................... angular services folder
        my-service.js .............. example service
        my-service-spec.js ......... example service unit test
        my-service2.js ............. example service
        my-service2-spec.js ........ example service unit test
    /dist .......................... distributable version of app built using `npm run build`.

Getting Started
-------------

Prerequisites: Node, Yeoman, Webpack, and Karma.  Once Node is installed, do:

    npm install -g yo karma webpack webpack-dev-server generator-cg-angular15

To create a project:

    mkdir MyNewAwesomeApp
    cd MyNewAwesomeApp
    yo cg-angular15

NPM Scripts
-------------

Now that the project is created, you have 3 simple npm commands available:

    npm start       #This will run a development server with livereload (i.e. the webpack-dev-server).
    npm test        #Runs unit tests with Karma.
    npm run build   #Places a fully optimized (minified, concatenated, and more) in /dist

Yeoman Subgenerators
-------------

There are a set of subgenerators to initialize empty Angular components.  Each of these generators will:

* Create one or more skeleton files (javascript, scss, html, spec etc) for the component type.
* Update index.js and include the necessary `require()`s.
* Update app.scss and add the `@import` as needed.
* For components, update the app.js, adding the necessary route call if a route was entered in the generator prompts.

There are generators for `component`, `directive`, `service`, `filter`, `module`, and `modal`.

Running a generator:

    yo cg-angular15:component my-awesome-component
    yo cg-angular15:directive my-directive
    yo cg-angular15:service my-service
    yo cg-angular15:filter my-filter
    yo cg-angular15:module my-module
    yo cg-angular15:modal my-modal

The name paramater passed (i.e. 'my-awesome-component') will be used as the file names.  The generators will derive appropriate class names from this parameter (ex. 'my-awesome-component' will convert to a class name of 'MyAwesomeComponent').  Each sub-generator will ask for the folder in which to create the new skeleton files.  You may override the default folder for each sub-generator in the `.yo-rc.json` file.

The modal subgenerator is a convenient shortcut to create partials that work as modals for Bootstrap v3 and Angular-UI-Bootstrap (both come preconfigured with this generator).  If you choose not to use either of these libraries, simply don't use the modal subgenerator.

Submodules
-------------

Submodules allow you to more explicitly separate parts of your application.  Use the `yo cg-angular15:module my-module` command and specify a new subdirectory to place the module into.  Once you've created a submodule, running other subgenerators will now prompt you to select the module in which to place the new component.

Preconfigured Libraries
-------------

The new app will have a handful of preconfigured libraries included.  This includes Angular 1.5, Bootstrap 3, AngularUI Bootstrap, FontAwesome, JQuery, Lodash, SASS, and Moment.  You may of course add to or remove any of these libraries.

Release History
-------------
* 07/99/2016 - v1.0 - First release.

