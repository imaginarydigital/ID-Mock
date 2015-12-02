/*
 * ID Mock - r0.1.0
 * 2015-11-28 */

 angular.module('app', [
  'ngRoute',
  'ngAnimate'
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
	$scope.hello = 'hello';
	console.log($scope.hello);
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