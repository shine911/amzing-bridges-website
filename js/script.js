// Load module
var app = angular.module('spa-Application', ['ui.router']);
//Config route
app.config(function($stateProvider){
	var states = [
	{
	    name: 'home',
	    url: '',
	    component: 'home'
	},
	{
	    name: 'gallery',
	    url: '/gallery',
	    component: 'gallery'
	},
	{
	    name: 'about',
	    url: '/about',
	    component: 'about'
	},
	{
	    name: 'contact',
	    url: '/contact',
	    component: 'contact'
	},
	{
		name: 'bridges',
		url: '/home/{id}',
		component: 'bridges'
	}
	];
	  // Loop over the state definitions and register them
	states.forEach(function(state) {
	    $stateProvider.state(state);
	});
});
