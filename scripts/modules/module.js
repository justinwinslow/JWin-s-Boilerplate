/*
	BASIC MODULE DEFINITION
*/

define([
    'jquery', 
    'underscore', 
    'backbone'
], 
function($, _, Backbone) {
    var module = {};

	module.model = Backbone.Model.extend({  
        initialize: function(options){ 
            this.events();
        },
        events: function(){
            this.on('event', function(data){
                console.log('An event on model', data);
            })
        },
        destroy: function(){
            this.off();
        }
    });

    module.view = Backbone.View.extend({
        initialize: function(options){
            if (debug) console.log(options);

            this.model = new module.model(options);

            this.options = _.extend(this.options, options);

            if (debug) console.log(this.options.name);

            this.events();
        },
        options: {  
            name: 'Default title'
        },
        events: function(){
            this.on('event', function(data){
                console.log('An event on view', data);
            })
        },
        destroy: function(){
            this.off();
            this.model.destroy();
        }
    });
    
    return module;
});