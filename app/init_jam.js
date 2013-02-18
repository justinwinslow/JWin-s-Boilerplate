/*
    APP CONFIG & INIT
*/

// Set debug mode [think about modifying this to be dynamic]
window.debug = true;

if (debug) console.log('init');

// Require config
requirejs.config({
    paths: {
        // Libraries
        jquery: 'lib/jquery/dist/jquery',
        //underscore: 'lib/underscore', I left this as a comment so you can see how aliasing paths can make "upgrades" easier
        underscore: 'lib/lodash/lodash',
        backbone: 'lib/backbone/backbone',
        handlebars: 'lib/handlebars/handlebars',
        modernizr: 'lib/modernizr/modernizr-2.6.2.min',
        excanvas: 'lib/excanvas',
        text: 'lib/text/text',
        css: 'lib/css/css',
        // Modules
        somemodule: 'modules/module'
    },
    shim: {
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        },
        handlebars: {
            exports: 'Handlebars'
        },
        modernizr: {
            exports: 'Modernizr'
        }
    }
});

// Start app
requirejs(
    [
        'jquery',
        'underscore',
        'backbone',
        'handlebars',
        'somemodule'
    ],
    function ($, _, Backbone, Handlebars, somemodule) {
        if (debug) console.log($);
        if (debug) console.log(_);
        if (debug) console.log(Backbone);
        if (debug) console.log(Handlebars);
        if (debug) console.log(somemodule);

        window.myApp = window.myApp = {};

        myApp.myModule = new somemodule.view.main({name: 'My New Module'});
        myApp.myModule.trigger('myEvent', {event: 'myEvent'});
    }
);