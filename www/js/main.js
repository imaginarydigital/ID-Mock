/*
 * ID Mock - r0.1.0
 * 2015-12-15 */

 angular.module('app', [
  'ngRoute',
  'ngAnimate',
  'ngMessages'
]);
angular.module('app').config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('{[{');
  $interpolateProvider.endSymbol('}]}');
});



// Route configurations
angular.module('app').config(['$routeProvider', function ($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainController',
    animation: 'from-left'
  })
  .when('/photography', {
    templateUrl: 'views/photography.html',
    controller: 'ViewController',
    animation: 'from-right'

  })
  .when('/videos', {
    templateUrl: 'views/videos.html',
    controller: 'ViewController',
    animation: 'from-right'
  })
  .when('/design', {
    templateUrl: 'views/design.html',
    controller: 'ViewController',
    animation: 'from-right'
  })
  .otherwise({
    redirectTo: '/'
  });
}]);

function MainController ($scope, $location){
console.log('I work');
	$scope.submitForm = function(isValid) {
    
    if (isValid) {
      console.log('our form is amazing');
    }else{
      console.log('There was an error');
    }
  };
}

angular.module('app').controller('MainController', ['$scope', '$location', MainController]);


function ViewController ($scope, $location) {
	$scope.go = function() {
	  $location.path('#/');
	};
}
angular.module('app').controller('ViewController', ['$scope', '$location', ViewController]);



// angular.module('app').controller('View2Controller', ['$scope', '$location',
//   function MyCtrl($scope, $location) {
//     $scope.go = function() {
//       $location.path('/view1');
//     };
//   }
// ]);

angular.module('app').directive('viewAnimation', function ($route) {
  return {
    restrict: 'A',
    link: function (scope, element) {
      var animation = $route.current.animation;
      if (animation) element.addClass(animation);
    }
  };
});



$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });