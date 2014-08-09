'use strict';

/**
 * @ngdoc function
 * @name userDatabaseApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the userDatabaseApp
 */
angular.module('userDatabaseApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
