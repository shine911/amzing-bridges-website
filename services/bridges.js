angular.module('spa-Application').service('bridgesService', function($http)
{
	var service = {
		getAllBridges: function(){
			return $http.get('data/bridgesCollection.json', {cache: true}).then(function(responseData)
			{
				return responseData.data;
			});
		},

		getBridge: function(id){
			function bridgeMatchesParam(bridge) {
        		return bridge.id === id;
        	}
        	return service.getAllBridges().then(function(bridges) {
        			return bridges.find(bridgeMatchesParam)
      			});
      		}
		};
	return service;
});