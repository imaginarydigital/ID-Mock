/*
 * ID Mock - r0.1.0
 * 2015-12-09 */

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

 //  <div id="modal1" class="modal bottom-sheet">
 //    <div class="modal-content">
 //      <h4>Modal Header</h4>
 //      <p>A bunch of text</p>
 //    </div>
 //    <div class="modal-footer">
 //      <button href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Agree</button>
 //    </div>
 //  </div>
 // 

$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });