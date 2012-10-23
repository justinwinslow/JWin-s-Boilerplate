/* 
	APP CONFIG & INIT
*/
console.log('init');
// Config
requirejs.config({
    paths: {
        jquery: 'lib/jquery',
        _: 'lib/underscore',
        backbone: 'lib/backbone'
    },
    shim: {
    	backbone: {
            deps: ['_', 'jquery'],
            exports: 'Backbone'
        },
        _: {
            deps: ['jquery'],
            exports: '_'
        },
    }
});

// Start app
requirejs(['jquery', '_', 'backbone'], function   ($, _, Backbone) {
	console.log($);
	console.log(_);
	console.log(Backbone);
});