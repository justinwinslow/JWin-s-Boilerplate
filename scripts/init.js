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
        jquery: 'lib/jquery',
        underscore: 'lib/underscore',
        backbone: 'lib/backbone',
        handlebars: 'lib/handlebars',
        // Modules
        somemodule: 'modules/module'
    },
    shim: {
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        underscore: {
            deps: ['jquery'],
            exports: '_'
        },
        handlebars: {
            deps: [],
            exports: 'Handlebars'
        }
    }
});

// Start app
requirejs(['jquery', 'underscore', 'backbone', 'handlebars', 'somemodule'], function   ($, _, Backbone, Handlebars, somemodule) {
    if(!window.myApp){
        myApp = {};
    }

    if (debug) console.log($);
    if (debug) console.log(_);
    if (debug) console.log(Backbone);
    if (debug) console.log(Handlebars);
    if (debug) console.log(somemodule);

    myApp.myModule = new somemodule.view[1]({name: 'My New Module'});
    myApp.myModule.trigger('myEvent', {event: 'myEvent'});
});