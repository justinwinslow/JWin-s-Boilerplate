/*
	BASIC MODULE DEFINITION
*/

define([
    'jquery', 
    'underscore', 
    'backbone'
], 
function($, _, Backbone) {
	var module = Backbone.Model.extend({  
        initialize: function(defaults){ 
            if (debug) console.log(defaults);
            this.defaults = _.extend(this.defaults, defaults);
            if (debug) console.log(this.defaults.name);
        },
        defaults: {  
            name: 'Default title'
        }  
    });
    
    if (debug) console.log(module);
    
    return module;
});