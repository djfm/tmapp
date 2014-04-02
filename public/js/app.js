App = Ember.Application.create();

App.Router.map(function () {
  this.resource('projects', function () {
	this.route('new');
	this.resource('resources', function () {
		this.route('new');
	});
  });
});

App.ProjectsRoute = Ember.Route.extend({

});

App.ProjectsNewController = Ember.Controller.extend({
	model: {},
	actions: {
		submit: function () {
			console.log(this.get('model.priority'));
		}
	}
});