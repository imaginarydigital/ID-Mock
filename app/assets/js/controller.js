function MainController ($scope){
	$scope.hello = 'hello';
	console.log($scope.hello);
}

angular.module('app').controller('MainController', ['$scope', MainController]);