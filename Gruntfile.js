var path = require('path');

module.exports = function (grunt) {
	grunt.initConfig({
		ember_handlebars: {
		  compile: {
		    options: {
		      namespace: "Ember.TEMPLATES",
		      processName: function (filename) {
		      	return path.basename(filename, '.hbs').replace(/\./g, '/');
		      }
		    },
		    files: {
		      "public/js/templates.js": "public/hbs/*.hbs"
		    }
		  }
		},
		watch: {
			files: ['public/hbs/*.hbs'],
			tasks: ['ember_handlebars']
		}
	});

	grunt.loadNpmTasks('grunt-ember-handlebars');
	grunt.loadNpmTasks('grunt-contrib-watch');
};