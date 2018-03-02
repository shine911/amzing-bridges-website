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
	    component: 'gallery',
	    resolve: {
	    	img: function($http)
	    	{
				return $http.get('data/gallery/data.json', {cache: true}).then(function(resp)
				{
					return resp.data;
				});
			}
	    }
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
app.directive('lightgallery', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      if (scope.$last) {

        // ng-repeat is completed
        var gl = $('#lightgallery');
	    gl.lightGallery({
	        mode: 'lg-fade',
	        cssEasing : 'cubic-bezier(0.25, 0, 0.25, 1)',
	        hideControlOnEnd: true
	    });
	    var colours = ['#21171A', '#81575E', '#9C5043', '#8F655D'];
	    gl.on('onBeforeSlide.lg', function(event, prevIndex, index){
		    $('.lg-outer').css('background-color', colours[index])
		});
      }
    }
  };
});