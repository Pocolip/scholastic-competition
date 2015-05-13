angular.module('scholastic-competition', ['ngRoute'])


.run(function()
{

})

.config(function($routeProvider) {


 $routeProvider

            // setup an abstract state for the tabs directive
            // .state('home', {
            //     url: "/",
            //     abstract: true,
            //     templateUrl: "app/tabs.html"
            // })
                .when('/', {
                templateUrl : 'templates/teacher.registration.html',
                controller  : 'TeacherRegistrationCtrl'
            })

                .when('/teacher', {
                	templateUrl: 'templates/teacher.registration.html',
                	controller: 'TeacherRegistrationCtrl'

                })

                .when('/signup', {

                	templateUrl: 'templates/signup.options.html',
                	controller: 'SignUpCtrl'
                })

            // route for the about page
            // .when('/about', {
            //     templateUrl : 'pages/about.html',
            //     controller  : 'aboutController'
            // })

            // // route for the contact page
            // .when('/contact', {
            //     templateUrl : 'pages/contact.html',
            //     controller  : 'contactController'
            // });


    // $urlRouterProvider.otherwise('/home');

})
.controller('LandingPageCtrl', function($scope)
{

	
})

.controller('TeacherRegistrationCtrl', function($scope)
{
	//First Name
	//Last Name
	//Schools
	//Password
	//Email
	console.log("Dancing");


	$scope.firstName = "";
	$scope.lastName = "";
	$scope.password = "";
	$scope.email = "";
	$scope.schools = [];




		$scope.register = function()
		{	



		}



})

.controller('StudentRegistrationCtrl', function($scope)
{


})

.controller('ActivityFeedCtrl', function($scope){


})

.controller('')