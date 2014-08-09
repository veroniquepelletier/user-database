'use strict';

/**
 * @ngdoc function
 * @name userDatabaseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the userDatabaseApp
 */
angular.module('userDatabaseApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
