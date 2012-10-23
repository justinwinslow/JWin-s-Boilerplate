/* 
    APP CONFIG & INIT
*/
window.debug = true;

if (debug) console.log('init');

// Config
requirejs.config({
    paths: {
        // Libraries
        jquery: 'lib/jquery',
        underscore: 'lib/underscore',
        backbone: 'lib/backbone',
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
    }
});

// Start app
requirejs(['jquery', 'underscore', 'backbone', 'somemodule'], function   ($, _, Backbone, somemodule) {
    if(!window.myApp){
        myApp = {};
    }

    if (debug) console.log($);
    if (debug) console.log(_);
    if (debug) console.log(Backbone);
    if (debug) console.log(somemodule);

    myApp.myModule = new somemodule.view({name: 'My New Module'});
    myApp.myModule.trigger('event', {event: 'myEvent'});
});