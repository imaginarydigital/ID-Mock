 angular.module('app', [
  'ngRoute',
  'ngAnimate'
]);
angular.module('app').config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('{[{');
  $interpolateProvider.endSymbol('}]}');
});

