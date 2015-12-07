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