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
            this.options = _.extend(this.options, options);
            this.events();
        },
        events: function(){
            this.on('event', function(data){
                console.log('An event on model', data);
            })
        },
        destroy: function(){
            this.off();
        },
        options: {}
    });

    module.view = [];

    module.view[0] = Backbone.View.extend({
        initialize: function(options){
            if (debug) console.log(options);

            this.model = new module.model(options);

            this.options = _.extend(this.options, options);

            if (debug) console.log(this.options.name);

            this.render();
        },
        render: function(){
            if (debug) console.log('render');

            this.$el = $('<p>' + this.options.name + '</p>');

            $('body').append(this.$el);
        },
        events: function(){
            if (debug) console.log('events');
            var self = this;

            this.on('myEvent', function(data){
                console.log('An event on view 0', data);
            })

            this.$el.on('click', function(event){
                console.log(self.$el.text() + ' 0');
            });
        },
        destroy: function(){
            this.off();
            this.$el.off();
            this.model.destroy();
        },
        options: {  
            name: 'Default title'
        }
    });

    module.view[1] = Backbone.View.extend({
        initialize: function(options){
            if (debug) console.log(options);

            this.model = new module.model(options);

            this.options = _.extend(this.options, options);

            if (debug) console.log(this.options.name);

            this.render();
        },
        render: function(){
            if (debug) console.log('render');

            this.$el = $('<p>' + this.options.name + '</p>');

            $('body').append(this.$el);
        },
        events: function(){
            if (debug) console.log('events');
            var self = this;

            this.on('myEvent', function(data){
                console.log('An event on view 1', data);
            })

            this.$el.on('click', function(event){
                console.log(self.$el.text() + ' 1');
            });
        },
        destroy: function(){
            this.off();
            this.$el.off();
            this.model.destroy();
        },
        options: {  
            name: 'Default title'
        }
    });
    
    return module;
});