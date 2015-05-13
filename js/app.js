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
.controller('TeacherProfileCtrl', function($scope)
{

    // $scope.


    $scope.createActivity = function()
    {

    }
})
.controller('LandingPageCtrl', function($scope)
{

	
})

.controller('TeacherRegistrationCtrl', function($scope, $http)
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
	$scope.school = "";




		$scope.submit = function()
		{	

            var data = {

                first_name: $scope.firstName,
                last_name: $scope.lastName,
                password: $scope.password,
                email: $scope.email,
                school: $scope.school
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

                if(response.status == 200)
                {
                    //Forward to profile
                    console.log("Forwading to profile");
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

