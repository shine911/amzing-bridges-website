// Load module
var app = angular.module('spa-Application', ['ngRoute']);
//Config route
app.config(function($routeProvider){
		$routeProvider
		//Setup route
			.when('/', {
				templateUrl : 'views/home.html',
				controller : 'homeControl'
			})
			.when('/gallery', {
				templateUrl : 'views/gallery.html',
				controller : 'galleryControl'
			})
			.when('/contact', {
				templateUrl : 'views/contact.html',
				controller : 'contactController'
			})
			.when('/about', {
				templateUrl : 'views/about.html',
				controller : 'aboutController'
			});
});

//Navbar active
app.controller('homeControl', function($scope)
{
	var home = angular.element(document.querySelector( '#home'));
	var gallery = angular.element(document.querySelector( '#gallery'));
	var contact = angular.element(document.querySelector( '#contact'));
	var about = angular.element(document.querySelector( '#about'));
	home.addClass('active');
	gallery.removeClass('active');
	contact.removeClass('active');
	about.removeClass('active');
});

app.controller('galleryControl', function($scope){
	var home = angular.element(document.querySelector( '#home'));
	var gallery = angular.element(document.querySelector( '#gallery'));
	var contact = angular.element(document.querySelector( '#contact'));
	var about = angular.element(document.querySelector( '#about'));
	home.removeClass('active');
	gallery.addClass('active');
	contact.removeClass('active');
	about.removeClass('active');
});
app.controller('contactController', function($scope){
	var home = angular.element(document.querySelector( '#home'));
	var gallery = angular.element(document.querySelector( '#gallery'));
	var contact = angular.element(document.querySelector( '#contact'));
	var about = angular.element(document.querySelector( '#about'));
	home.removeClass('active');
	gallery.removeClass('active');
	contact.addClass('active');
	about.removeClass('active');
});
app.controller('aboutController', function($scope){
	var home = angular.element(document.querySelector( '#home'));
	var gallery = angular.element(document.querySelector( '#gallery'));
	var contact = angular.element(document.querySelector( '#contact'));
	var about = angular.element(document.querySelector( '#about'));
	home.removeClass('active');
	gallery.removeClass('active');
	contact.removeClass('active');
	about.addClass('active');
});