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