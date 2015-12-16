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

