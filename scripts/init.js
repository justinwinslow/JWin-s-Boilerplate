/* 
	APP CONFIG & INIT
*/

// Config
requirejs.config({
    paths: {
        jquery: 'lib/jquery',
        _: 'lib/underscore',
        backbone: 'lib/backbone'
    }
});

// Start app
requirejs(['jquery', '_', 'backbone'], function   ($, _, backbone) {

});