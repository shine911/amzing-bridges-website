// Load module
var app = angular.module('spa-Application', ['ui.router']);
//Config route
app.config(function($stateProvider){
	var homeState = {
	    name: 'home',
	    url: '',
	    templateUrl: 'views/home.html'
	  }

	var galleryState = {
	    name: 'gallery',
	    url: '/gallery',
	    templateUrl: 'views/gallery.html'
	  }

	var aboutState = {
	    name: 'about',
	    url: '/about',
	    templateUrl: 'views/about.html'
	  }

	var contactState = {
	    name: 'contact',
	    url: '/contact',
	    templateUrl: 'views/contact.html'
	  }
	$stateProvider.state(homeState);
	$stateProvider.state(galleryState);
	$stateProvider.state(aboutState);
	$stateProvider.state(contactState);
});