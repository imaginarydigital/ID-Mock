 angular.module('app', [
  'ngRoute',
  'ngAnimate',
  'ngMessages'
]);
angular.module('app').config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('{[{');
  $interpolateProvider.endSymbol('}]}');
});

