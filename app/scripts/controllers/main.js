'use strict';

/**
 * @ngdoc function
 * @name newAngularBoilerplateApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the newAngularBoilerplateApp
 */
angular.module('newAngularBoilerplateApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
