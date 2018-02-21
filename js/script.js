// Load module
var app = angular.module('spa-Application', ['ui.router']);
//Config route
app.config(function($stateProvider, $urlRouterProvider){
	var states = [
	{
	    name: 'home',
	    url: '/home',
	    component: 'home',
	    resolve: {
	    	bridges: function(bridgesService)
	    	{
	    		return bridgesService.getAllBridges();
	    	}
	    }
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
		name: 'home.bridge',
		url: '/{bridgeId}',
		resolve: {
	        bridge: function(bridges, $stateParams) {
	          return bridges.find(function (bridge){
	          	return bridge.id === $stateParams.bridgeId;
	          });
	        }
    	},
    	views: {
    		"@":{
    			component: 'bridge'
    		}
    	}
	}
	];
	  // Loop over the state definitions and register them
	states.forEach(function(state) {
	    $stateProvider.state(state);
	});
	// the known route, with missing '/' - let's create alias
	$urlRouterProvider.when('', '/home');
});

app.run(function($http) {
  $http.get('data/bridgesCollection.json', { cache: true });
});

app.config(function($compileProvider){
  $compileProvider.preAssignBindingsEnabled(true)
});