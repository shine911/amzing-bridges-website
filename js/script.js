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
		name: 'bridge',
		url: '/home/{bridgeId}',
		component: 'bridge',
		resolve: {
	        bridge: function(bridgesService, $transition$) {
	          return bridgesService.getBridge($transition$.params().bridgeId);
	        }
    	}
	}
	];
	  // Loop over the state definitions and register them
	states.forEach(function(state) {
	    $stateProvider.state(state);
	});
});

app.run(function($http) {
  $http.get('data/bridgesCollection.json', { cache: true });
});

app.config(function($compileProvider){
  $compileProvider.preAssignBindingsEnabled(true)
});