angular.module('spa-Application').component('bridge', {
  bindings: { bridge: '<' },
  templateUrl: 'views/bridges.html',
  controller: function()
  {
  	this.$onInit = function()
  	{
	  	var mymap = L.map('mapid').setView([this.bridge.x, this.bridge.y], 10);
	    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
	    maxZoom: 18,
	    id: 'mapbox.streets',
	    accessToken: 'pk.eyJ1Ijoic2hpbmU5MTEiLCJhIjoiY2pkNDJ5dTYwMnBuazJxbXc4OW8wOGhkeSJ9._PyHMKyTgo6M-VAKctb9QQ'
	}).addTo(mymap);
	    var marker = L.marker([this.bridge.x,this.bridge.y]).addTo(mymap);
	    marker.bindPopup("<b>"+this.bridge.name+"</b><br>"+this.bridge.shortDescription).openPopup();
  	}
  }
});