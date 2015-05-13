angular.module('scholastic-competition', ['ngRoute'])


.run(function()
{

})

.config(function($routeProvider) {


 $routeProvider

         
                .when('/', {
                templateUrl : 'templates/landingpage.html',
                controller  : 'LandingPageCtrl'
            })

                .when('/teacher', {
                	templateUrl: 'templates/teacher.registration.html',
                	controller: 'TeacherRegistrationCtrl'

                })

                .when('/student', {

                        templateUrl: 'templates/student.registration.html',
                    controller: 'StudentRegistrationCtrl'
                })

                .when('/signup', {

                	templateUrl: 'templates/signup.options.html',
                	controller: 'SignUpCtrl'
                })

                .when('/login', {

                    templateUrl: 'templates/login.html',
                    controller: 'LoginCtrl'
                })

                .when('/tracks' ,{

                    templateUrl: 'templates/events.html',
                    controller: 'TracksCtrl'
                })

                .when('/ranking', {

                    templateUrl: 'templates/ranking.html',
                    controller: 'RankedCtrl'
                })

                .when('/teacherProfile', {

                    templateUrl: 'templates/teacher.profile.html',
                    controller: 'TeacherProfileCtrl'
                });


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

.controller('StateCtrl', function($scope)
{
    $scope.loggedIn = false;


})

.controller('Login', function($scope)
{

})
.controller('TeacherProfileCtrl', function($scope, $http)
{

    // $scope.


    $scope.eventTitle = "";
    $scope.eventDescription = "";
    $scope.eventRequirements = "";
    $scope.eventGrade = "";

    $scope.createEvent = function()
    {

        console.log("Creating Event");
            var date = new Date();
            var data = {

                name: $scope.eventTitle,
                description: $scope.eventDescription,
                grade: $scope.eventGrade,
                requirements: $scope.eventRequirements,
                date: date
                // school: $scope.school
            }
            var request = {

                url: 'http://104.131.167.77:3000/event', 
                method: 'POST',
                data: data
            }
            console.log(data);


            return $http(request)
            .then(function(response)
            {   
                console.log(response);

                if(response.status == 201 || response.status == 200)
                {
                                // $scope.loggedIn = true;

                    //Forward to profile
                    $location.path('/');
                }

            }, function(err){ console.log("FAILED TO CREATE");})
    }
})
.controller('LandingPageCtrl', function($scope, $http)
{

	// $scope.events = ["math", "bees", "yo", "bad", "cool"];

    $scope.events = [];
    $scope.tracks = [];

    var request = {

        url: 'http://104.131.167.77:3000/event',
        method: 'GET'
    }

    $http(request)
    .then(function(response)
    {
            console.log(response);
            if(response.status == 200 || response.status == 201)
            {
                $scope.events = response.data.events;
                console.log($scope.events);

                  function chunk(arr, size) {
                var row = [];
                for (var i=0; i<arr.length; i+=size) {
                    row.push(arr.slice(i, i+size));
                }
                return row;
            }

            $scope.tracks = chunk($scope.events,3);
            }
    }, function(err){ console.log(err);})

    console.log("events");
    /* Slice the images to a grid */
          
})

.controller('TeacherRegistrationCtrl', function($scope, $http, $location)
{
	//First Name
	//Last Name
	//Schools
	//Password
	//Email


	$scope.firstName = "";
	$scope.lastName = "";
	$scope.password = "";
	$scope.email = "";
	$scope.school = "";




		$scope.submit = function()
		{	

            var data = {

                firstName: $scope.firstName,
                lastName: $scope.lastName,
                password: $scope.password,
                email: $scope.email
                // school: $scope.school
            }
            var request = {

                url: 'http://104.131.167.77:3000/professor', 
                method: 'POST',
                data: data
            }
            console.log(data);


            return $http(request)
            .then(function(response)
            {   
                console.log(response);

                if(response.status == 201 || response.status == 200)
                {
                                $scope.loggedIn = true;

                    //Forward to profile
                    $location.path('teacherProfile');
                }

            }, function(err){ console.log("FAILED TO CREATE");})

		}



})

.controller('StudentRegistrationCtrl', function($scope)
{


})

.controller('TracksCtrl', function($scope){


})

.factory('Routes', function()
{

    var hostname = "";

    return {

        "signup": "/signup",
        "login": "/login",
        "profile" : "/profile" 
    }

})

