/*
 * ID Mock - r0.1.0
 * 2015-11-24 */

 angular.module('app', [
  'ngRoute'
]);
angular.module('app').config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('{[{');
  $interpolateProvider.endSymbol('}]}');
});



// Route configurations
angular.module('app').config(['$routeProvider', function ($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainController'
  })
  .when('/photography', {
    templateUrl: 'views/photography.html',
    controller: 'MainController'
  })
  .when('/videos', {
    templateUrl: 'views/videos.html',
    controller: 'MainController'
  })
  .when('/design', {
    templateUrl: 'views/design.html',
    controller: 'MainController'
  })
  .otherwise({
    redirectTo: '/'
  });
}]);

function MainController ($scope){
	$scope.hello = 'hello';
	console.log($scope.hello);
}

angular.module('app').controller('MainController', ['$scope', MainController]);