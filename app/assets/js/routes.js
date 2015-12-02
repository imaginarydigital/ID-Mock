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